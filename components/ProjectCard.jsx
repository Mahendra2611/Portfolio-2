"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

const ProjectCard = ({ name, imgLink, lang, githubLink, websiteLink }) => {
  const router = useRouter();

  const handleNavigation = (link) => {
    if (link) router.push(link);
  };

  return (
    <motion.div
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-5 max-w-xs w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05 }} 
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={imgLink}
          alt={name}
          width={300}
          height={180}
          className="rounded-xl object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <motion.h2
        className="text-center text-lime-400 text-2xl font-semibold mt-4"
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h2>

      <ul className="flex flex-wrap justify-center gap-2 mt-3">
        {lang.map((tech, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-md"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mt-5">
        <motion.button
          onClick={() => handleNavigation(githubLink)}
          className="bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 px-4 py-2 text-white rounded-lg transition duration-300"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
        >
          GitHub
        </motion.button>
        <motion.button
          onClick={() => handleNavigation(websiteLink)}
          className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 px-4 py-2 text-white rounded-lg transition duration-300"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
        >
          Live Demo
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
