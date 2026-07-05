import React from 'react'
import Card from '../components/Card'
import imagemain from '../assets/imagemain.png'
import BoxAbout from '../components/BoxAbout';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'




const About = () => {
    const valuecard =[
    {
      image:icon1,
      text:"Craftsmanship",
      para:"Every piece is handcrafted by master artisans with meticulous attention to detail, ensuring exceptional quality and timeless beauty.",
    },
    {
      image:icon2,
      text:"Premium Materials",
      para:"We use only ethically sourced diamonds, precious gemstones, and the finest metals to create jewelry of lasting value.",
    },
    {
      image:icon3,
      text:"Ethical Sourcing",
      para:"We partner with responsible suppliers who share our commitment to ethical practices and sustainable sourcing.",
    },
    {
      image:icon4,
      text:"Sustainability",
      para:"We are dedicated to protecting our planet by minimizing waste and embracing environmentally responsible craftsmanship.",
    },
    {
      image:icon5,
      text:"Timeless Design",
      para:"Our collections combine classic elegance with modern artistry, creating pieces that remain beautiful for generations.",
    },
    {
      image:icon6,
      text:"Excellence",
      para:"From design to delivery, we strive for perfection, providing an exceptional experience with every purchase.",
    }
  ];
  return (



    <div className='h-[80%] flex flex-col'>
      <div className='relative'>
      <div className='relative h-[#350px] sm:h-[#450px] md:h-[#520px]'>
          <img className='w-full h-full object-cover' src={imagemain}/>
         </div>
         <div className='absolute inset-0 bg-black/40'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center px-5 sm:px-8 md:px-15 pt-6 md:pt-0 text-white text-center'>
         <h1 className='text-3xl sm:text-5xl md:text-7xl font-serif leading-tight'>Our Story </h1>
          <p className='text-sm sm:text-lg md:text-xl mt-3 md:mt-5 max-w-xs sm:max-w-lg md:max-w-xl leading-6 md:leading-8 text-gray-300'>Crafting timeless pieces with passion and precision since 1985  </p>
      
           
         </div>    
          
         </div>

        <div className='text-black text-center max-w-4xl mx-auto px-6 py-20 '>
          <h1 className='text-4xl md:text-5xl font-normal tracking-wide text-gray-900 mb-8 font-serif'>A Legacy of Excellence</h1>
          <p className='mb-10 space-y-12 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light  text-gray-700 '>For over three decades, LUXORA has been synonymous with exquisite craftsmanship and timeless design. What began as a small atelier has grown into a celebrated name in fine jewelry, trusted by discerning clients around the world.</p>
          <p className='mb-10 space-y-12 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light text-gray-700'>Our journey started with a simple belief: that jewelry should be more than an accessory—it should be a work of art that tells a story, marks a milestone, and becomes a cherished heirloom passed down through generations.</p>
          <p className='mb-10 space-y-12 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light text-gray-700'>Every piece in our collection is meticulously crafted by master artisans who bring decades of expertise and an unwavering commitment to quality. We source only the finest materials—conflict-free diamonds, ethically sourced gemstones, and precious metals of the highest purity.</p>
          <p className='mb-10 space-y-12 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light text-gray-700'>At LUXORA, we believe that true luxury lies in the details. From the initial sketch to the final polish, each step of our process is guided by a dedication to perfection and a respect for the timeless traditions of fine jewelry making.</p>
        </div>
         <div className='text-center mb-5'>
          <h1 className='text-4xl md:text-5xl font-normal tracking-wide text-gray-900 mb-8 font-serif'>Our Values</h1>
         </div>
  <div id="right" className='flex gap-5 overflow-x-auto  flex-nowrap mx-10 '>
    {valuecard.map(function(elem,index){

        return <div >
        <Card image={elem.image} text={elem.text} para={elem.para}  />
       </div>
      })}
  </div>
  <BoxAbout/>
    </div>
  )
}

export default About

