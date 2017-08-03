import React from 'react';
import {Field, reduxForm} from 'redux-form' //enables connection

class PostsNew extends React.Component {

  renderTitleField(field, a){
    return(
      <div>
        <input
          type="text"
          placeholder="Title"
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
          name="title"
          component={this.renderTitleField}
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
