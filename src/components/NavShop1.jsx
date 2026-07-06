import React, { useState, useRef } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

const NavShop1 = () => {
    
 const [openMenu, setOpenMenu] = useState("");

const timeoutRef = useRef(null);

const handleMouseEnter = (menu) => {
  clearTimeout(timeoutRef.current);
  setOpenMenu(menu);
};

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setOpenMenu("");
  }, 200);
};

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
        <div
  className="relative"
  onMouseEnter={() => handleMouseEnter("filter")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-2 text-black font-medium border-r pr-6">
    <ListFilter size={18} />
    Filter
    <ChevronDown size={18} />
  </button>

  {openMenu === "filter" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 bg-white border text-black border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("filter")}
      onMouseLeave={handleMouseLeave}
    >
      {filterItems.map((item, index) => (
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

{/* Category Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("category")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Category
    <ChevronDown size={18} />
  </button>

  {openMenu === "category" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("category")}
      onMouseLeave={handleMouseLeave}
    >
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

{/* Collection Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("collection")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Collection
    <ChevronDown size={18} />
  </button>

  {openMenu === "collection" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("collection")}
      onMouseLeave={handleMouseLeave}
    >
      {collectionItems.map((item, index) => (
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

{/* Metal Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("metal")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Metal
    <ChevronDown size={18} />
  </button>

  {openMenu === "metal" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("metal")}
      onMouseLeave={handleMouseLeave}
    >
      {metalItems.map((item, index) => (
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

{/* Gemstone Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("gemstone")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Gemstone
    <ChevronDown size={18} />
  </button>

  {openMenu === "gemstone" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("gemstone")}
      onMouseLeave={handleMouseLeave}
    >
      {gemstoneItems.map((item, index) => (
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

{/* Occasion Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("occasion")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Occasion
    <ChevronDown size={18} />
  </button>

  {openMenu === "occasion" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("occasion")}
      onMouseLeave={handleMouseLeave}
    >
      {occasionItems.map((item, index) => (
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

{/* Price Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("price")}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 text-[#827C7C] font-medium">
    Price
    <ChevronDown size={18} />
  </button>

  {openMenu === "price" && (
    <div
      className="absolute top-full left-0 mt-2 w-56 z-50 text-black bg-white border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={() => handleMouseEnter("price")}
      onMouseLeave={handleMouseLeave}
    >
      {priceItems.map((item, index) => (
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
        
      </div>
    </div>
  );
};

export default NavShop1;