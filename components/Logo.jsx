import React from "react";
import Image from "next/image";

const Logo = ({ name, link }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-gray-300 shadow-lg bg-gray-800 flex items-center justify-center">
        <Image 
          src={link} 
          alt={name} 
          width={50} 
          height={50} 
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
      </div>
      <h2 className="text-white mt-2 text-sm sm:text-xl font-semibold">{name}</h2>
    </div>
  );
};

export default Logo;
