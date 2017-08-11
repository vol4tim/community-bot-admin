import React from 'react'
import { Link } from 'react-router'

export default function () {
  return (
    <ul className="nav nav-pills nav-stacked">
      <li><Link to="/"><i className="fa fa-comments-o" /> Сообщения</Link></li>
      <li><Link to="/chats"><i className="fa fa-users" /> Чаты</Link></li>
    </ul>
  )
}
