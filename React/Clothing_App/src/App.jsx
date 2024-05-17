import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Home from './Home/Home.jsx'
import './Home/Home.css'

import Our_Products from './Our_Products/Our_Products.jsx'
import './Our_Products/Our_Products.css'

import About_us from './About_us/About_us.jsx'
import './About_us/About_us.css'

import Contact_us from './Contact_us/Contact_us'
import './Contact_us/Contact_us.css'

import Header from './Header/Header.jsx'
import './Header/Header.css'

import Footer from './Footer/Footer.jsx'
import './Footer/Footer.css'

import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
        <Header/>

        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/our_Products/' element = {<Our_Products/>}></Route>
          <Route path='/about_us/' element = {<About_us/>}></Route>
          <Route path='/contact-us/' element = {<Contact_us/>}></Route>
        </Routes>

        <Footer/>
        
    </>
  )
}

export default App
