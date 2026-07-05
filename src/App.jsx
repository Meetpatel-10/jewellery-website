import React from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/shop'
import Notfound from './pages/Notfound'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Info from './components/Info'




const App = () => {
  return (
    <div className=' bg-[#FFFFFF] text-white'>
     <Navbar/>
  
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
       
  
      <Route path='*' element={<Notfound/>} />
     </Routes>
    <Info/>
    <Footer/>
     
    </div>
  )
}

export default App
