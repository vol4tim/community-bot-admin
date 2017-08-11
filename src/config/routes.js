import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../shared/containers/app'
import NotFound from '../shared/components/app/notFound'
import * as Messages from '../routes/messages'
import * as Chats from '../routes/chats'

export const routes = () =>
  (<div>
    <Route path="/" component={App}>
      <IndexRoute component={Messages.List} />
      <Route path="/messages">
        <IndexRoute component={Messages.List} />
        <Route path="add" component={Messages.Form} />
        <Route path="edit/:id" component={Messages.Form} />
      </Route>
      <Route path="/chats">
        <IndexRoute component={Chats.List} />
        <Route path="add" component={Chats.Form} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </div>)
