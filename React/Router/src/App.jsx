import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './About/About'
import Blog from './Blog/Blog'
import Header from './Header/Header'

import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
<Header/>

    <Routes>
      
      <Route path='/' element={<About/>}>
  
      </Route>
      <Route path='/Blog' element={<Blog/>}>
          
      </Route>
    </Routes>
      

    </>
  )
}

export default App
