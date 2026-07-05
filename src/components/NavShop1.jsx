import React, { useEffect, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

const NavShop1 = () => {
    
  const [openCategory, setOpenCategory] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openMetal, setOpenMetal] = useState(false);
  const [openGemstone, setOpenGemstone] = useState(false);
  const [openOccasion, setOpenOccasion] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);

  const categoryItems = [
    "All Jewellery",
    "Rings",
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Bangles",
    "Pendants",
    "Chains",
  ];
  const filterItems = [
  "Newest First",
  "Best Selling",
  "Price: Low to High",
  "Price: High to Low",
  "Customer Rating",
  "Featured",
];
const collectionItems = [
  "Bridal Collection",
  "Everyday Wear",
  "Luxury Collection",
  "Vintage Collection",
  "Office Wear",
  "Party Wear",
  "Festive Collection",
  "New Arrivals",
];
const metalItems = [
  "Gold",
  "Rose Gold",
  "White Gold",
  "Platinum",
  "Sterling Silver",
];
const gemstoneItems = [
  "Diamond",
  "Emerald",
  "Ruby",
  "Sapphire",
  "Pearl",
  "Topaz",
  "Amethyst",
  "No Gemstone",
];
const occasionItems = [
  "Wedding",
  "Engagement",
  "Anniversary",
  "Birthday",
  "Festival",
  "Daily Wear",
  "Gift",
  "Party",
];
const priceItems = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "Above ₹5,00,000",
];



  return (
    <div className="rounded-xl p-3 mx-4 md:mx-12 mt-4 bg-amber-50 border-2 border-gray-300">
      <div className="flex flex-wrap items-center gap-5 md:gap-10">

        {/* Filter */}
        <div className="relative"
        onMouseEnter={() => setOpenFilter(true)}
        onMouseLeave={() => setOpenFilter(false)}>

           <button
              onClick={() => setOpenFilter(!openFilter)}
               className="flex items-center gap-2 text-black font-medium border-r pr-6" >
               <ListFilter size={18} />
                 Filter
                 <ChevronDown size={18} />
             </button>

              {openFilter && (
             <div className="absolute top-full left-0 w-56 pt-1 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg ">

             {filterItems.map((item, index) => (
              <button
               key={index}
               className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
             {item}
               </button>
         ))}

           </div>
          )}

        </div>

        {/* Category Dropdown */}
        <div className="relative "
        onMouseEnter={() => setOpenCategory(true)}
        onMouseLeave={() => setOpenCategory(false)}>
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="flex items-center gap-1 text-[#827C7C] font-medium"
          >
            Category
            <ChevronDown size={18} />
          </button>

          {openCategory && (
            <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {categoryItems.map((item, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Collection Buttons */}
        <div className="relative "
        onMouseEnter={() => setOpenCollection(true)}
        onMouseLeave={() => setOpenCollection(false)}>

          <button
            onClick={() => setOpenCollection(!openCollection)}
            className="flex items-center gap-1 text-[#827C7C] font-medium" >
            Collection
            <ChevronDown size={18} />
          </button>

           {openCollection && (
            <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            {collectionItems.map((item, index) => (
         <button
          key={index}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100">
          {item}
         </button>
         ))}

         </div>
          )}
        </div>

        {/* Metal Button */}
        <div className="relative "
        onMouseEnter={() => setOpenMetal(true)}
        onMouseLeave={() => setOpenMetal(false)}>

          <button
             onClick={() => setOpenMetal(!openMetal)}
             className="flex items-center gap-1 text-[#827C7C] font-medium">
             Metal
             <ChevronDown size={18} />
          </button>

             {openMetal && (
            <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">
               {metalItems.map((item, index) => (
              <button
               key={index}
               className="block w-full text-left px-4 py-2 hover:bg-gray-100" >
                 {item}
             </button>
                 ))}
            </div>
            )}

        </div>

        {/* Gemstone Button */}
        <div className="relative "
        onMouseEnter={() => setOpenGemstone(true)}
        onMouseLeave={() => setOpenGemstone(false)}>

          <button
             onClick={() => setOpenGemstone(!openGemstone)}
             className="flex items-center gap-1 text-[#827C7C] font-medium" >
             Gemstone
             <ChevronDown size={18} />
          </button>

            {openGemstone && (
          <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">

            {gemstoneItems.map((item, index) => (
            <button
             key={index}
             className="block w-full text-left px-4 py-2 hover:bg-gray-100">
             {item}
           </button>
           ))}
          </div>
         )}

        </div>
  
       {/* {Occasion Button} */}
        <div className="relative "
        onMouseEnter={() => setOpenOccasion(true)}
        onMouseLeave={() => setOpenOccasion(false)}>

          <button
           onClick={() => setOpenOccasion(!openOccasion)}
           className="flex items-center gap-1 text-[#827C7C] font-medium">
           Occasion
           <ChevronDown size={18} />
          </button>

          {openOccasion && (
          <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">

           {occasionItems.map((item, index) => (
            <button
             key={index}
             className="block w-full text-left px-4 py-2 hover:bg-gray-100">
             {item}
            </button>
           ))}

          </div>
           )}

        </div>
   
       {/* Price Button */}
        <div className="relative "
        onMouseEnter={() => setOpenPrice(true)}
        onMouseLeave={() => setOpenPrice(false)}>

          <button
            onClick={() => setOpenPrice(!openPrice)}
            className="flex items-center gap-1 text-[#827C7C] font-medium">
              Price
            <ChevronDown size={18} />
          </button>

          {openPrice && (
          <div className="absolute top-10 left-0 w-56 pt-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg z-50">

            {priceItems.map((item, index) => (
            <button
              key={index}
             className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              {item}
            </button>
           ))}

           </div>
         )}

        </div>

      </div>
    </div>
  );
};

export default NavShop1;