"use client";
import React from "react";
import { ProjectData } from "@/utils/ProjectData";
import ProjectCard from "@/components/ProjectCard";
import Underline from "@/components/Underline";
import { motion } from "framer-motion"; 

const Page = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
       <motion.h1
              className="text-center pt-6 text-4xl sm:text-6xl font-extrabold font-lacquer text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
             PROJECTS
            </motion.h1>
      <Underline />

      <motion.div
        className="mt-10 pb-20 flex flex-wrap justify-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {ProjectData.map((data, index) => (
          <ProjectCard
            key={index}
            name={data.name}
            imgLink={data.img}
            lang={data.lang}
            githubLink={data.gitlink}
            websiteLink={data.weblink}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Page;
