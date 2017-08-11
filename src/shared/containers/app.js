import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notifications from 'react-notification-system-redux';

import Header from '../components/app/header'
import Footer from '../components/app/footer'
import Sidebar from '../components/app/sidebar'
import { load, flashMessage, setLanguage } from '../../modules/app/actions';

import './style.css'

class App extends Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    const style = {
      Containers: {
        DefaultStyle: {
          width: '530px',
        }
      },
      NotificationItem: {
        DefaultStyle: {
          margin: '10px 5px 2px 1px'
        },
      }
    };
    return (<div>
      <Header
        title={this.props.title}
        language={this.props.language}
        setLanguage={this.props.setLanguage}
      />
      <div className="container" id="maincontainer">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10" style={{ borderLeft: '1px solid #eee' }}>
            {this.props.children}
          </div>
        </div>
      </div>
      <Footer />
      <Notifications
        notifications={this.props.notifications}
        style={style}
        allowHTML
      />
    </div>)
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isLoaded: state.app.isLoaded,
    title: state.app.title,
    language: state.app.language,
    notifications: state.notifications,
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    load,
    flashMessage,
    setLanguage,
  }, dispatch)
  return {
    load: actions.load,
    flashMessage: actions.flashMessage,
    setLanguage: actions.setLanguage,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
