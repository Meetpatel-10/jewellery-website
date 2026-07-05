import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/image1.png'
import{Store} from 'lucide-react'
import{Heart} from 'lucide-react'
import{UserRound} from 'lucide-react'
import{ShoppingBag} from 'lucide-react'



const Navbar = () => {
  return (
    <div className='relative z-50 flex flex-col md:flex-row py-3 px-4 md:px-10 items-center bg-[#FFFFFF] text-black shadow-lg justify-between'>
      <img className='w-28 md:w-42 h-full sm:h-full md:h-20 object-contain brightness-50'
      src={image1}  />
      <div className='flex gap-4 md:gap-10 text-sm md:text-lg mt-3 md:mt-0'>
        <Link className='text-lg font-medium hover:text-[#e3a730] transition duration-300' to='/'>Home</Link>
        <Link className='text-lg font-medium hover:text-[#e3a730] transition duration-300' to='/about'>About</Link>
        <Link className='text-lg font-medium hover:text-[#e3a730] transition duration-300' to='/shop'>Shop</Link>
        <Link className='text-lg font-medium hover:text-[#e3a730] transition duration-300' to='/contact'>Contact</Link>
      </div>

     <div className='flex gap-4 md:gap-8 mt-2 md:mt-0'>
        <button><Store size={25} /></button>
        <button><Heart  size={25}/></button>
        <button><UserRound size={25}/> </button>
        <button><ShoppingBag size={25} /></button>
      </div>
    </div>
    
  ) 
} 

export default Navbar
