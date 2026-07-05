import React from 'react'
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom'

const BoxHome = () => {

    let navigate = useNavigate()  

  return (
    <div className="bg-[#1E1E24] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Find Your Perfect Piece
        </h1>

        <p className="text-gray-300 mt-5 text-lg">
          Book a personalized consultation with our jewelry experts.
        </p>

        <button className="mt-8 text-black bg-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:bg-gray-300 transition"
         onClick={()=>{
        navigate('/contact')
        }}
        >
          Schedule Consultation
          <ArrowRight size={20} />
        </button>

      </div>
    </div>
  );
};

  

export default BoxHome
