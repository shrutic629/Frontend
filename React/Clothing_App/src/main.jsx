import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header'
import './App.css'
import New_Arrival from './New_arrival'
import Latest_prod from './Latest_prod'
import About_six from './About_six'
import Footer from './Footer'

import Sixteen_Pro from './Sixteen_Pro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* Page 1 */}
    {/* <Header/>
    <New_Arrival/>
    <Latest_prod/>
    <About_six/>
    <Footer/> */}

    {/* Page 2 */}
    <Header/>
    <Sixteen_Pro/>
    <Footer/>
  </React.StrictMode>,
)
