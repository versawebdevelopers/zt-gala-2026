import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch } from 'wouter'
import App from './App'
import Gallery from './Gallery'
import './index.css'
import favicon from '@/imports/favicon-logo-icon (1).png'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/png'
faviconLink.href = favicon
document.head.appendChild(faviconLink)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Switch>
      <Route path="/gallery" component={Gallery} />
      <Route component={App} />
    </Switch>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
)
