import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; //index not needed
import {Link} from 'react-router-dom';

class PostIndex extends Component {

  //using Will or Did doesnt matter because api is async
  componentDidMount() {
    //get the posts
    return this.props.fetchPosts()
  }

  renderPosts(){
    //obj doesnt have map
    return _.map(this.props.posts, p => {
      const url = `/posts/${p.id}`
      return (
        <li className="list-group-item" key={p.id+p.title}>
          <Link to={url}>{p.title}</Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <Link className="btn btn-primary pull-xs-right" to="/posts/new">Add a Post</Link>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex)
