import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'vol4-form'
import Page from './page'
import { Add } from '../components/form';
import { save } from '../../../modules/chats/actions';

const Container = props => (
  <Page title="Add">
    <Form id="chats" {...props} onSubmit={props.onSubmit}>
      <Add />
    </Form>
  </Page>
)

function mapStateToProps() {
  const fields = {
    chatId: {
      value: '',
      type: 'text',
    },
    name: {
      value: '',
      type: 'text',
    }
  }
  return {
    fields,
    onValidate: (form) => {
      const errors = {}
      if (form.name === '') {
        errors.name = 'обязательное поле'
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
