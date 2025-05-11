"use client"
import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import SocialMedia from "@/components/SocialMedia";

const Card = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-10 pb-36">
      <div className="sm:flex sm:justify-center sm:items-center w-full px-6 sm:px-20 gap-10">
        
        {/* Left: Profile & Resume */}
        <motion.div
          className="order-2 sm:order-1 sm:w-1/2 flex flex-col items-center gap-5 p-6 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] rounded-2xl shadow-lg border border-cyan-500"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500 shadow-indigo-700">
            <Image
              src="/assets/profile_pic.jpg"
              fill
              className="object-cover"
              alt="Profile Picture"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl text-lime-400 font-bold tracking-wide text-center">
            Mahendra Pratap Verma
          </h2>

          <a
            href="/assets/Mahendra_FullStack.pdf"
            target="_blank"
            download
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Right: About Section */}
        <motion.div
          className="order-1 sm:order-2 sm:w-1/2 text-white flex flex-col justify-center gap-6 mt-10 sm:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi There, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Mahendra Pratap Verma
            </span>
          </h1>

          <h3 className="text-xl sm:text-2xl text-yellow-300 font-semibold">
            A Full Stack Developer & Competitive Programmer
          </h3>

          <motion.p
            className="text-lg sm:text-xl text-emerald-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            I'm a 3rd year B.Tech Computer Science and Engineering student at
            HBUT Kanpur with a strong passion for building full stack web
            applications. From crafting beautiful responsive UIs to building
            secure APIs and integrating real-time features, I thrive on turning
            ideas into production-ready code.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-emerald-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I've worked on routing, authentication, form handling, and seamless
            frontend-backend integration using modern stacks like Next.js and
            Express.js. I also have a solid foundation in DSA, having solved
            over 1500+ problems across various coding platforms using C++.
          </motion.p>
        </motion.div>
      </div>

      {/* Social Media */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Card;
