"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pb-20 bg-gradient-to-b from-[#010f1c] via-[#031738] to-[#010f1c] min-h-screen px-4"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Education />
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <WorkExperience />
      </motion.div>
    </motion.div>
  );
};

export default Page;
