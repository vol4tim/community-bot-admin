import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Form } from 'vol4-form'
import Page from './page'
import { New as Fields } from '../components/form'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0
    };
  }

  render() {
    return (
      <Page title="Create new congress">
        <Form id="newCongress" {...this.props}>
          <Fields />
        </Form>
        <p>Building cost: <b>{this.state.cost} ETH</b></p>
        <hr />
        <Link className="btn btn-default" to="/start">Join an existing congress</Link>
      </Page>
    )
  }
}

function mapStateToProps() {
  return {
    fields: {
      quorum: {
        value: '',
        type: 'text'
      },
      minutes: {
        value: '',
        type: 'text'
      },
      majority: {
        value: '',
        type: 'text'
      }
    },
    onValidate: (form) => {
      const errors = {}
      if (form.quorum === '') {
        errors.quorum = 'обязательное поле'
      }
      if (form.minutes === '') {
        errors.minutes = 'обязательное поле'
      }
      if (form.majority === '') {
        errors.majority = 'обязательное поле'
      }
      return errors;
    }
  }
}

export default connect(mapStateToProps)(Container)
