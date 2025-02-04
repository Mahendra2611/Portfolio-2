import React from "react";
import Image from "next/image";

const Logo = ({ name, link }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <Image src={link} alt={name} width={50} height={50}  className="rounded-lg " />
      <h2 className="text-white mt-2 text-lg font-semibold">{name}</h2>
    </div>
  );
};

export default Logo;
