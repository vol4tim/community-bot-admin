import React from 'react'
import Time from './time'

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <div className={(props.fields.chatId.error) ? 'form-group has-error' : 'form-group'}>
      <label>chatId</label>
      <select name="chatId" value={props.fields.chatId.value} onChange={props.handleChange} className="form-control">
        <option value="">все</option>
        {props.chats.map((item, index) =>
          <option key={index} value={item.id}>{item.name}</option>
        )}
      </select>
      {props.fields.chatId.error &&
        <span className="help-block">{props.fields.chatId.error}</span>
      }
    </div>
    <div className={(props.fields.time.error) ? 'form-group has-error' : 'form-group'}>
      <label>time</label>
      <input value={props.fields.time.value} onChange={props.handleChange} name="time" type="text" className="form-control" />
      {props.fields.time.error &&
        <span className="help-block">{props.fields.time.error}</span>
      }
    </div>
    <Time />
    <div className={(props.fields.text.error) ? 'form-group has-error' : 'form-group'}>
      <label>text</label>
      <input value={props.fields.text.value} onChange={props.handleChange} name="text" type="text" className="form-control" />
      {props.fields.text.error &&
        <span className="help-block">{props.fields.text.error}</span>
      }
    </div>
    <input value={props.fields.id.value} onChange={props.handleChange} name="id" type="hidden" className="form-control" />
    <button type="submit" className="btn btn-primary" disabled={props.form.submitting}>Save</button>
    {props.form.success &&
      <div className="alert alert-success">{props.form.success}</div>
    }
  </form>
)

export default Form
