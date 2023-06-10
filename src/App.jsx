
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/auth/Login'
import Navbar from './components/Navbar'
import AuthProvider from "./context/auth";
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/Forgotpassword'
import ResetPassword from './pages/auth/ResetPassword'
function App() {
 

  return (
    <>
   <AuthProvider></AuthProvider>
    <BrowserRouter>
       <Navbar />
      

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/auth/register" element={<Register  />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="login" element={<Login  />} />
        <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
