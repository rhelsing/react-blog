import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'

class PostShow extends React.Component {

  componentDidMount() {
    //get the post id from url, send to action, reduce will bring it back
    const { id } = this.props.match.params
    return this.props.fetchPost(id)
  }

  onDeleteClick(){
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push("/")
    })
  }

  render() {

    //trying to access records that dont exist is common !!!
    if(!this.props.post){
      return <div>Loading...</div>
    }

    return (
      <div>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >Delete</button>
      <h3>{this.props.post.title}</h3>
      <div>Categeories: {this.props.post.categories}</div>
      <div>{this.props.post.content}</div>
      <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){ //destructure state, also get props to be
  // post: posts[id]
  // could pass all.. could pass just data, going to use request though
  // return {posts}
  const { id } = ownProps.match.params
  return {post: posts[id]}

}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow)

//if function doesnt exist, check naming and check that passed to connect w/ {}
