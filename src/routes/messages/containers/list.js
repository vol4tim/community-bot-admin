import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import _ from 'lodash'
import Page from './page'
import { onRemove } from '../../../modules/messages/actions';

const Chat = (props) => {
  if (props.chatId !== '') {
    if (_.has(props.chats, props.chatId)) {
      return <span>{props.chats[props.chatId].name}</span>
    }
    return <span>???</span>
  }
  return <span>*</span>
}

const List = props => (
  <Page title="Messages">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>chat</th>
          <th>time</th>
          <th>text</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) =>
          <tr key={index}>
            <td><Chat chatId={item.chatId} chats={props.chats} /></td>
            <td>{item.time}</td>
            <td>{item.text}</td>
            <td>
              <div className="btn-group">
                <Link to={'/messages/edit/' + item.id} className="btn btn-info btn-xs"><i className="fa fa-pencil" /> edit</Link>
                <button onClick={() => props.onRemove(item.id)} type="button" className="btn btn-danger btn-xs"><i className="fa fa-trash-o" /> remove</button>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </Page>
)

function mapStateToProps(state) {
  return {
    items: _.values(state.messages.items),
    chats: state.chats.items
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    onRemove
  }, dispatch)
  return {
    onRemove: actions.onRemove
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
