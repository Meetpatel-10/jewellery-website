import React from 'react'

const Info = () => {
  return (
    
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-serif text-black">LUXORA</h2>
            <p className="mt-4 text-gray-600">
              Exquisite jewelry crafted with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Rings</li>
              <li>Necklaces</li>
              <li>Earrings</li>
              <li>Bracelets</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Customer Care</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Size Guide</li>
              <li>Care Instructions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Newsletter</h3>

            <p className="text-gray-600 mb-4">
              Subscribe for exclusive offers
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border text-black border-gray-300 px-3 py-2 rounded-l-md outline-none"
              />

              <button className="bg-black text-white px-5 rounded-r-md">
                Join
              </button>
            </div>
          </div>

        </div>

        

      </div>
  
  )
}

export default Info
