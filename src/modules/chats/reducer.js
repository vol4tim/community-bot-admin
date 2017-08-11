import _ from 'lodash'
import { SET, ADD, REMOVE } from './actionTypes'

const initialState = {
  items: {}
}

export default function chats(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const items = { ...state.items }
      items[action.payload.id] = action.payload
      // store.set('accounts', items)
      return { ...state, items }
    }

    case REMOVE: {
      const items = { ...state.items }
      _.unset(items, action.payload)
      // store.set('accounts', items)
      return { ...state, items }
    }

    case SET: {
      const items = {}
      _.forEach(action.payload, (item) => {
        items[item.id] = item
      })
      return { ...state, items }
    }

    default:
      return state;
  }
}
