import React from 'react'

const NotFound = () => {
  return (
<div className="h-[81vh] flex flex-col justify-center items-center bg-slate-950 text-white">
    <h2 className="text-8xl font-bold text-[#CDAE87] text-shadow-xs">
    404
    </h2>

    <p className="text-2xl mt-3">
    Oops! Page Not Found
    </p>

   <button
    onClick={() => navigate("/")}
    className="mt-5 bg-[#CDAE87] px-6 py-3 rounded-lg" >
    Go Home
  </button>
  
</div>
  )
}

export default NotFound
