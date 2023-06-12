import React from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import Home from '../pages/Home'
// import Register from '../pages/auth/Register'
// import ForgotPassword from '../pages/auth/Forgotpassword'
// import ResetPassword from '../pages/auth/ResetPassword'
// import Profile from '../pages/Profile'
import Account from '../pages/Account'
import Signin from '../pages/SignIn'
import Profile from '../pages/Profile'
  
const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path="/" element={<SiteLayout />} >
      <Route index element={<Home />} />
          <Route path="sign-in" element={<Signin />} />
       
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        {/* <Route path="register" element={<Register />} /> */}
    </Route>



    
  )
)


function SiteRoot() {
  return <RouterProvider router={router} />
}

export default SiteRoot