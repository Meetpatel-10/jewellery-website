import React from 'react'

import imagemain from '../assets/imagemain.png'
import Feature from '../components/Feature'
import BoxHome from '../components/BoxHome'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  
 let navigate = useNavigate()   
return(


<div>
 
  <div className="relative h-[#450px] sm:h-[#550px] md:h-[#560px]">
    <img
      src={imagemain}
      className="w-full h-full object-cover object-[80%_center] md:object-center"
      
    />

    <div className="absolute inset-0 bg-black/40"></div>

   <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16 pt-1.5 md:pt-0 text-white">
      <h1 className="text-[20px] sm:text-4xl md:text-7xl font-serif leading-tight">
        Timeless Elegance,
        <br />
        <span className="text-[#CDAE87]">Crafted for You</span>
      </h1>

      <p className="mt-2 md:mt-6 max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl">
        Discover our finest jewellery, designed to celebrate every moment.
      </p>

      <button className="mt-1 md:mt-10 bg-[#CDAE87] text-black px-3 py-1.5 md:px-8 md:py-4 rounded-md text-sm md:text-base hover:bg-gray-300 transition"
      onClick={()=>{
        navigate('/shop')
        }}
      >
        Explore Collection
      </button>
    </div>
  </div>


  <Feature />
  <BoxHome/>
</div>
  )
}

export default Home 
