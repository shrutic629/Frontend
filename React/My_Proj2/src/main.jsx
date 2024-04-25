import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Section/>
    <Footer/>
    
  </React.StrictMode>,
)
