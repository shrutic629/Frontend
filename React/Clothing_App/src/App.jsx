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

function App() {
  

  return (
    <>
        <Home/>
        <Our_Products/>
        <About_us/>
        <Contact_us/>
    </>
  )
}

export default App
