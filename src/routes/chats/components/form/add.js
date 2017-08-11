import React from 'react'

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <div className={(props.fields.chatId.error) ? 'form-group has-error' : 'form-group'}>
      <label>chatId</label>
      <input value={props.fields.chatId.value} onChange={props.handleChange} name="chatId" type="text" className="form-control" />
      {props.fields.chatId.error &&
        <span className="help-block">{props.fields.chatId.error}</span>
      }
    </div>
    <div className={(props.fields.name.error) ? 'form-group has-error' : 'form-group'}>
      <label>name</label>
      <input value={props.fields.name.value} onChange={props.handleChange} name="name" type="text" className="form-control" />
      {props.fields.name.error &&
        <span className="help-block">{props.fields.name.error}</span>
      }
    </div>
    <button type="submit" className="btn btn-primary" disabled={props.form.submitting}>Save</button>
    {props.form.success &&
      <div className="alert alert-success">{props.form.success}</div>
    }
  </form>
)

export default Form
