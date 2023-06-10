import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './context/UserAuth1.jsx'
import SiteRoot from './SiteLayout/SiteRoot'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <SiteRoot />
      </AuthProvider>
   
  </React.StrictMode>,
)
