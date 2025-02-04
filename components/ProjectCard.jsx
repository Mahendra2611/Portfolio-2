"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ name, imgLink, lang, githubLink, websiteLink }) => {
  const router = useRouter();

  const handleNavigation = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="p-4 my-4 mx-2 border border-gray-700 rounded-lg">
      {/* Project Image */}
      <Image src={imgLink} alt={name} width={300} height={200} className="w-full" />
      
      {/* Project Name */}
      <h2 className="text-lg text-white font-semibold mt-2">{name}</h2>

      {/* Languages Used */}
      <ul className="flex flex-wrap gap-2 mt-2">
        {lang.map((data, index) => (
          <li
            key={index}
            className="border-2 border-white/20 py-1 px-2 text-xs md:text-sm rounded-xl bg-[#4e6a99] shadow-lg"
          >
            {data}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-4 mt-3">
        {/* GitHub Button */}
        <button onClick={() => handleNavigation(githubLink)} className="bg-gray-800 text-white px-4 py-2 rounded-md">
          GitHub 
        </button>

        {/* Website Button */}
        <button onClick={() => handleNavigation(websiteLink)} className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
