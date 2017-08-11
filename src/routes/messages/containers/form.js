import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { Form } from 'vol4-form'
import cron from 'node-cron'
import Page from './page'
import { Add, Edit } from '../components/form';
import { save } from '../../../modules/messages/actions';

const Container = props => (
  <Page title={(props.isNew) ? 'Add' : 'Edit'}>
    <Form id="messages" {...props} onSubmit={props.onSubmit}>
      {props.isNew ?
        <Add />
        :
        <Edit />
      }
    </Form>
  </Page>
)

function mapStateToProps(state, props) {
  const fields = {
    chatId: {
      value: '',
      type: 'text',
    },
    time: {
      value: '',
      type: 'text',
    },
    text: {
      value: '',
      type: 'text',
    }
  }
  let isNew = true;
  if (_.has(state.messages.items, props.params.id)) {
    isNew = false;
    const item = state.messages.items[props.params.id]
    fields.id = {
      value: item.id,
      type: 'text',
    }
    fields.chatId.value = item.chatId
    fields.time.value = item.time
    fields.text.value = item.text
  }
  return {
    isNew,
    fields,
    chats: _.values(state.chats.items),
    onValidate: (form) => {
      const errors = {}
      if (form.time !== '') {
        if (cron.validate(form.time) === false) {
          errors.time = 'не верно указано время'
        }
      }
      if (form.text === '') {
        errors.text = 'обязательное поле'
      }
      return errors;
    }
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    save
  }, dispatch)
  return {
    onSubmit: form => actions.save(form)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
