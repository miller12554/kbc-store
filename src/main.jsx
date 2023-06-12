import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SiteRoot from './SiteLayout/SiteRoot'
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthContextProvider>
  <SiteRoot />
    </AuthContextProvider>
     
   
  </React.StrictMode>,
)
