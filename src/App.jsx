import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
