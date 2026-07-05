import React from 'react'

const BoxAbout = () => {
  return (
    <div className=" bg-[#1E1E24] max-w-full  my-20 px-6 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-7xl text-whitw mt-5">
           40+
          </h2>
          <p className="text-white mt-3">
            Years of Exprience
          </p>
        </div>

        <div>
          <h2 className="text-7xl text-whitw mt-5">
           50K+
          </h2>
          <p className="text-white mt-3">
            Happy Clients
          </p>
        </div>

        <div>
          <h2 className="text-7xl text-whitw mt-5">
           100+
          </h2>
          <p className="text-white mt-3">
            Master Artisans
          </p>
        </div>

        <div>
          <h2 className="text-7xl text-whitw mt-5">
           15
          </h2>
          <p className="text-white mt-3">
            Global Boutiques
          </p>
        </div>

      </div>
    </div>

  )
}

export default BoxAbout
