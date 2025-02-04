import React from 'react';
import Card from './Card';
import { Edu } from "../utils/Edu.js";
import { Underline } from 'lucide-react';

const Education = () => {
  return (
    <div className="my-5 w-full  shadow-inner rounded-lg p-4">
      <h1 className="text-center pt-4 text-white text-3xl sm:text-6xl font-bold font-lacquer">
        <span className="text-orange-500 ">EDU</span>CATION
      </h1>
      <Underline width="12" height="2"/>
      <div className="flex flex-col justify-center items-center w-full  gap-5   mt-5">
        {Edu.map((edu) => (
          <Card key={edu.id} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
