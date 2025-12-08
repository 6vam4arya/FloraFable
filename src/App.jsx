import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import SignUp from './components/signup'
import LogIn from './components/login'
import Home from './components/home'
import About from './components/about'
import Gallery from './components/gallery'


const App = () => {
  return (
    <>

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/LogIn' element={<LogIn />} />         
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App