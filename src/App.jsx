import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/login'
import Signup from './Components/signup'
import './App.css'
import Cart from './Components/Cart'
const App = () => {

  return (
    <div className="app-background">
      <Nav />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
             <Route path='Cart' element={<Cart />} />
      </Routes>
      <div className="image-container">
        <img
          src="bg1.jpg"
          alt="Wood Background"
          className="background-image"
        />
        <div className="image-text">
          <div className="main-text">Going eco has never been Easier</div>
          <div className="sub-text">Make a Difference With Every Purchase, Shop Sustainable.</div>
        </div>

      </div>
      
    </div>
  )
}
export default App