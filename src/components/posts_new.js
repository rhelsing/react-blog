import React from 'react';
import {Field, reduxForm} from 'redux-form' //enables connection

class PostsNew extends React.Component {

  renderField(field){

    // const { meta } = field //grab meta from field
    const { meta: { touched, error} } = field //grab meta from field, and touched and error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <span style={{color: 'red'}}>{touched? error : ''}</span>
      </div>
    )
  }

  renderTextarea(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <textarea style={{height: '200px'}}
          className="form-control"
          {...field.input}
        ></textarea>
        {field.meta.errors}
      </div>
    )
  }

  //called when redux form says it's valid, wired up to redux in form onSubmit
  onSubmit(values){
    console.log(values)
  }

  render() {

    const { handleSubmit } = this.props //pull from props, redux form provides

    return (
      <div>
      <h3>New post</h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      </div>
    )
  }
}

function validate(values) {
  const errors = {}


  // errors.title.push("Title must be longer than 3 characters")
  //validate
  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter categories!"
  }
  if (!values.content) {
    errors.content = "Enter a content plz!"
  }

  return errors;

}

//form: name of form, unique across components
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)
