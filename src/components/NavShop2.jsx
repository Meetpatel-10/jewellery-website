import React from 'react'
import { Search   } from "lucide-react"
import { Mic  } from "lucide-react"
import { ScanSearch  } from "lucide-react"


const NavShop2 = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-10 md:px-8 py-4 mx-7 text-black">

  {/* Logo */}
  <div className="w-full md:w-auto">
    <h1 className="text-3xl md:text-4xl font-bold">
      LUXORA
    </h1>
  </div>

  {/* Search Bar */}
  <div className="flex items-center w-full md:w-[#500px] lg:w-[#650px] border border-gray-300 rounded-xl px-4 py-3">
    <Search size={20} />

    <input
      type="text"
      placeholder="Search for jewellery..."
      className="flex-1 px-3 outline-none"
    />

    <Mic size={20} />
    <ScanSearch size={20} className="ml-3" />
  </div>

  
 <div className="w-[80%] md:w-auto flex items-center justify-center md:justify-end whitespace-nowrap ">
  <span className='font-semibold'>{props.itemCount}</span>
  <span className="ml-1">ITEMS</span>
</div>

</div>
  )
}

export default NavShop2
