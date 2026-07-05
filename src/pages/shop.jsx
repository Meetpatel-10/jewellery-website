import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card1 from '../components/Card1'
import NavShop1 from '../components/NavShop1'
import NavShop2 from '../components/NavShop2'
import J1 from '../assets/j1.png'
import J2 from '../assets/j2.png'
import J3 from '../assets/j3.png'
import J4 from '../assets/j4.png'
import J5 from '../assets/j5.png'
import J6 from '../assets/j6.png'
import J7 from '../assets/j7.png'



const Shop = () => {
  const valuecard1 =[
    {
      photo:J1,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J2,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J3,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J4,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J5,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J6,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J7,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J1,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J1,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    },
    {
      photo:J1,
      title:"LUMIERE DIAMOND NECKLACE",
      category:"18K White Gold",
      price:"₹ 4,85,000"
    }
    
    
  ];
  return (
    

    <div >
      <NavShop2 itemCount={valuecard1.length} />
      <NavShop1/>

      <div className='mt-auto mb-2' >
        
         <div id="right" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6 '>
    {valuecard1.map(function(elem,index){

        return <div>
        <Card1 key={index}   photo={elem.photo} title={elem.title} category={elem.category} price={elem.price} />
       </div>
      })}
  </div>
      </div>
    </div>


  )
}

export default Shop
