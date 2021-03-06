import _ from 'lodash'
import { actions as actionsForm } from 'vol4-form'
import * as model from '../../models/chats'
import { SET, ADD, REMOVE } from './actionTypes'

export function add(item) {
  return {
    type: ADD,
    payload: item
  }
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id
  }
}

export function set(items) {
  return {
    type: SET,
    payload: items
  }
}

// export function load() {
//   return (dispatch) => {
//     model.getChats()
//       .then((chats) => {
//         const items = []
//         chats.forEach((chat) => {
//           items.push({
//             id: chat.key,
//             ...chat.val()
//           })
//         });
//         dispatch(set(items))
//       })
//   }
// }

export function save(form) {
  return (dispatch) => {
    dispatch(actionsForm.start('chats'));
    if (_.has(form, 'id') && form.id !== '') {
      model.update(form.id, form.chatId, form.name)
    } else {
      model.add(form.chatId, form.name)
    }
    dispatch(actionsForm.stop('chats'))
    dispatch(actionsForm.success('chats', 'Сохранено'))
  }
}

export function onRemove(id) {
  return (dispatch) => {
    console.log(dispatch);
    model.remove(id)
  }
}

export function listen() {
  return (dispatch) => {
    model.onAdd((id, data) => {
      dispatch(add({ id, ...data }))
    })
    model.onUpdate((id, data) => {
      dispatch(add({ id, ...data }))
    })
    model.onRemove((id) => {
      dispatch(remove(id))
    })
  }
}
