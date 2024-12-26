import React from 'react';
import Card from './Card';
import { Edu } from "../utils/Edu.js";

const Education = () => {
  return (
    <div className="my-5 shadow-inner rounded-lg p-4">
      <h1 className="text-center pt-4 text-white text-3xl font-semibold">
        <span className="text-orange-500">EDU</span>CATION
      </h1>
      <div className="flex justify-around items-center flex-wrap mt-5">
        {Edu.map((edu) => (
          <Card key={edu.id} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
