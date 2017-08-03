import React from 'react';
import {Field, reduxForm} from 'redux-form' //enables connection

class PostsNew extends React.Component {

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
      <h3>New post</h3>

      <form>
        <Field
          label="Title for post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="title"
          component={this.renderField}
        />
      </form>

      </div>
    )
  }
}

//form: name of form, unique across components
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
