"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <motion.div
      className="my-12 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-center text-white text-3xl sm:text-6xl mb-4 font-bold font-lacquer">
        <span className="text-orange-500">WORK</span> EXPERIENCE
      </h1>
      <motion.div
        className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] sm:w-[600px] w-full rounded-lg p-6 shadow-xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-sm sm:text-lg rounded-lg px-3 py-1 mb-3">
          July 2024 – Sept 2024
        </span>
        <h1 className="font-bold text-xl sm:text-3xl text-orange-400">
          Frontend Web Developer Intern
        </h1>
        <h2 className="text-lg sm:text-2xl mt-1">Grovyo Platforms (Remote)</h2>
        <a
          href="YOUR_CERTIFICATE_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-sm text-blue-400 underline hover:text-blue-300"
        >
          Certificate Link
        </a>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
          <li>
            Developed dynamic, responsive web pages using Next.js, resulting in a 40% improvement in page load speed and a 30% increase in user engagement.
          </li>
          <li>
            Improved user experience by implementing cross-browser compatibility and mobile responsiveness.
          </li>
          <li>
            Integrated RESTful APIs and backend logic using Express.js. Collaborated to optimize performance and scalability.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
