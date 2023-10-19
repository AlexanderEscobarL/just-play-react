import React from 'react'
import ReactDOM from 'react-dom/client'
import { JustPlayApp } from './JustPlayApp.jsx'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JustPlayApp />
  </React.StrictMode>,
)
