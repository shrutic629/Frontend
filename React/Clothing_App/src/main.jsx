import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header'
import './App.css'
import New_Arrival from './New_arrival'
// import Option1 from './Option1'
import Latest_prod from './Latest_prod'
import About_six from './About_six'
import Footer from './Footer'

import Sixteen_Pro from './Sixteen_Pro'
import Option2 from './Option2'
import Page_change from './Page_change'


import Our_comp from './Our_comp'
import Our_Background from './Our_Background'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* Page 1 */}
    {/* <Header/>
    <New_Arrival/>
    {/* <Option1/> */}
    {/* <Latest_prod/>
    <About_six/>
    <Footer/> */} 

    {/* Page 2 */}
    {/* <Header/>
    <Sixteen_Pro/>
    <Option2/>
    <Latest_prod/>
    <Page_change/>
    <Footer/> */}

    {/* Page 3 */}
    <Header/>
    <Our_comp/>
    <Our_Background/>
    <Footer/>
  </React.StrictMode>,
)
