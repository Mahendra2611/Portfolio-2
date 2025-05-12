"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ year, degree, collage }) => {
  return (
    <motion.div
      className="flex flex-col items-center sm:w-[600px] w-full bg-[#031738] shadow-lg rounded-lg p-5 text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl  cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm sm:text-xl rounded-lg px-3 py-1 mb-2">
        {year}
      </span>
      <h1 className="font-bold text-xl sm:text-3xl text-orange-400">{degree}</h1>
      <h2 className="text-base sm:text-2xl text-center mt-1">{collage}</h2>
    </motion.div>
  );
};

export default Card;
