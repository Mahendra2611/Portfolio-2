"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { Edu } from '../utils/Edu';
import { Underline } from 'lucide-react';

const Education = () => {
  return (
    <motion.div
      className="py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-center text-white text-3xl sm:text-6xl font-bold font-lacquer">
        <span className="text-orange-500">EDU</span>CATION
      </h1>
      <div className="flex justify-center mt-1">
        <Underline width="80" height="2" color="#FFA500" />
      </div>
      <div className="flex flex-col items-center gap-6 mt-8">
        {Edu.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card {...edu} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
