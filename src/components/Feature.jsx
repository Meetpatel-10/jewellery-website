import React from 'react'
import { Star, Gift, ShieldCheck } from "lucide-react";


const Feature = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div>
          <div className="w-16 h-16 rounded-full text-black bg-gray-100 flex items-center justify-center mx-auto">
            <Star size={30} />
          </div>

          <h2 className="text-2xl text-black font-semibold mt-5">
            Premium Quality
          </h2>

          <p className="text-gray-600 mt-3">
            Each piece is crafted with the finest materials and attention to detail.
          </p>
        </div>

        <div>
          <div className="w-16 h-16 rounded-full text-black bg-gray-100 flex items-center justify-center mx-auto">
            <Gift size={30} />
          </div>

          <h2 className="text-2xl text-black font-semibold mt-5">
            Free Shipping
          </h2>

          <p className="text-gray-600 mt-3">
            Complimentary shipping on all orders with premium packaging.
          </p>
        </div>

        <div>
          <div className="w-16 h-16 rounded-full text-black bg-gray-100 flex items-center justify-center mx-auto">
            <ShieldCheck size={30} />
          </div>

          <h2 className="text-2xl text-black font-semibold mt-5">
            Lifetime Warranty
          </h2>

          <p className="text-gray-600 mt-3">
            We stand behind our craftsmanship with a lifetime guarantee.
          </p>
        </div>

      </div>
    </div>

  )
}

export default Feature
