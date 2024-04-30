import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header'
import './App.css'
import New_Arrival from './New_arrival'
import Latest_prod from './Latest_prod'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <New_Arrival/>
    <Latest_prod/>
  </React.StrictMode>,
)
