import React from 'react'
import{ArrowRight} from 'lucide-react'

const card = (props) => {
  return (
    <div className='h-[#380px] w-56 bg-amber-50 rounded-3xl text-black flex flex-col items-center p-6  mt-2 border-2 border-[#C79A3B] mx-4 shrink-0  md:grid-cols-3' >

      <div className=' flex justify-center items-center h-24 w-24 rounded-full border-2 border-[#C79A3B] overflow-hidden'>
       <img className='h-38 w-38 object-cover justify-center object-center' src={props.image} 
       />
         </div>

       <h2 className='mt-6 text-2xl font-serif text-center flex items-center justify-center min-h-16'>{props.text}</h2>
       <p className='mt-4 text-center text-gray-700 leading-snug min-h-48'>{props.para}</p>

      <button className='mt-auto flex items-center gap-2 text-[#C79A3B] font-medium hover:gap-3 transition '>
       Learn-More
       <ArrowRight size={18} />
      </button>
    

    </div>
  )
}

export default card
