import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch } from 'wouter'
import App from './App'
import Gallery from './Gallery'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Switch>
      <Route path="/gallery" component={Gallery} />
      <Route component={App} />
    </Switch>
  </React.StrictMode>,
)
