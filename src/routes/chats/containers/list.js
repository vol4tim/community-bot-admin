import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import Page from './page'
import { onRemove } from '../../../modules/chats/actions';

const List = props => (
  <Page title="Chats">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>chat</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) =>
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <div className="btn-group">
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
    items: _.values(state.chats.items)
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
