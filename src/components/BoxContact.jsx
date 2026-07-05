import React from 'react'

const BoxContact = () => {
  return (
    <div className="bg-[#1E1E24] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Experience Luxury in Person
        </h1>

        <p className="text-gray-300 mt-5 text-lg">
          Visit our flagship boutique to explore our full collection and receive personalized service from our expert team.
        </p>

       <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10 mt-8">
            <button className="text-black bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
          Call Now
        </button>
        <button className="text-white bg-black border border-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
          Email Us
        </button>
        </div>
        


      </div>
    </div>
  )
}

export default BoxContact
