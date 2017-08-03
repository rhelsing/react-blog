import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; //index not needed

class PostIndex extends Component {

  //using Will or Did doesnt matter because api is async
  componentDidMount() {
    //get the posts
    return this.props.fetchPosts()
  }

  renderPosts(){
    //obj doesnt have map
    return _.map(this.props.posts, p => {
      return (
        <li className="list-group-item" key={p.id}>
          {p.title}
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul>
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
