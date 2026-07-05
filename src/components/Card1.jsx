import React from "react";
import { Heart , ShoppingCart  } from "lucide-react";

const Card1 = (props) => {
  return (
    <div className="w-full max-w-75 mx-auto">
    
      <div className="relative bg-[#F6F3F1] rounded-lg overflow-hidden">

        <img
          src={props.photo}
          alt={props.title}
          className="w-full h-49 sm:h-62 md:h-69 lg:h-77 object-cover transition-transform duration-300 hover:scale-105"
        />

       
        <div className="absolute bottom-3 right-3 flex gap-2 text-black">
          <button className="bg-white p-2 rounded-full shadow">
            <Heart size={18}/>
          </button>

          <button className="bg-white p-2 rounded-full shadow">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      
      <div className="mt-3 text-black">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold uppercase">
          {props.title}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {props.category}
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">
           {props.price}
        </h3>
      </div>
    </div>
  );
};

export default Card1;