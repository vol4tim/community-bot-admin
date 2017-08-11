import Notifications from 'react-notification-system-redux';
import i18next from 'i18next'
import { LOAD, SET_LANGUAGE } from './actionTypes'
import { listen as listenMessages } from '../messages/actions'
import { listen as listenChats } from '../chats/actions'

export function setLoad(bool) {
  return {
    type: LOAD,
    payload: bool
  }
}

export function flashMessage(message, type = 'info') {
  return (dispatch) => {
    const notificationOpts = {
      // title: 'Hey, it\'s good to see you!',
      message,
      position: 'tr',
      autoDismiss: 10
    };
    if (type === 'error') {
      dispatch(Notifications.error(notificationOpts))
    } else {
      dispatch(Notifications.info(notificationOpts))
    }
  }
}

export function setLanguage(language) {
  i18next.changeLanguage(language)
  return {
    type: SET_LANGUAGE,
    payload: language
  }
}

export function load() {
  return (dispatch) => {
    dispatch(listenMessages());
    dispatch(listenChats());
  }
}
