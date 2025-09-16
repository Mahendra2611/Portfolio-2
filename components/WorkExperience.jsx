"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <motion.div
      className="my-12 flex flex-col  items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
     <motion.h1
                  className="text-center p-6 text-4xl sm:text-5xl font-extrabold font-lacquer text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                 WORK EXPERIENCE
                </motion.h1>
      <motion.div
        className=" text-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] sm:w-[600px] w-full rounded-lg p-6 shadow-xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-sm sm:text-lg rounded-lg px-3 py-1 mb-3">
          June 2025 – Aug 2025
        </span>
        <h1 className="font-bold text-xl sm:text-3xl text-orange-400">
          Sotware Developer Intern
        </h1>
        <h2 className="text-lg sm:text-2xl mt-1">Seorce (Remote)</h2>
        {/* <a
          href="YOUR_CERTIFICATE_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-sm text-blue-400 underline hover:text-blue-300"
        >
          Certificate Link
        </a> */}
        <div className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
 Built 10+ scalable UI components with Next.js, React, and Tailwind CSS, ensuring seamless cross-device
 compatibility and consistent user experience.          </p>
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
Optimized frontend through image compression, lazy loading, and reusable components, cutting page load time
 by 30% and improving customer experience.          </p>
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
Applied SEO best practices with semantic HTML and metadata optimization, driving a 20% increase in organic
 traffic and higher search rankings.          </p>
        </div>
      </motion.div>

       <motion.div
        className=" text-center mt-5 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] sm:w-[600px] w-full rounded-lg p-6 shadow-xl text-white"
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
        <div className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
            Developed dynamic, responsive web pages using Next.js, resulting in a 40% improvement in page load speed and a 30% increase in user engagement.
          </p>
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
            Improved user experience by implementing cross-browser compatibility and mobile responsiveness.
          </p>
          <p className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300">
            Integrated RESTful APIs and backend logic using Express.js. Collaborated to optimize performance and scalability.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
