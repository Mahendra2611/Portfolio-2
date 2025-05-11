"use client";
import React from "react";
import Logo from "@/components/Logo";
import Underline from "@/components/Underline";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

const Page = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  const language = [
    { name: "C", link: "/assets/c.png" },
    { name: "C++", link: "/assets/cpp.png" },
    { name: "Javascript", link: "/assets/js.png" },
  ];

  const framework = [
    { name: "React.js", link: "/assets/react.png" },
    { name: "Node.js", link: "/assets/node.png" },
    { name: "Express.js", link: "/assets/express.png" },
    { name: "Tailwind CSS", link: "/assets/tailwind.png" },
  ];

  const tools = [
    { name: "GitHub", link: "/assets/git.png" },
    { name: "Firebase", link: "/assets/firebase.png" },
    { name: "VS Code", link: "/assets/vscode.png" },
    { name: "MongoDB", link: "/assets/mongodb.png" },
  ];

  return (
    <div className="pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900 text-white min-h-screen">
      {/* Title Section */}
      <motion.h1
        className="text-center pt-6 text-4xl sm:text-6xl font-extrabold font-lacquer text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        SKILLS & ACHIEVEMENTS
      </motion.h1>
      <Underline width="64" height="1" />

      {/* Achievements Section */}
      <motion.section
        className="my-8 px-6 sm:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h2
          className="text-yellow-300 text-3xl sm:text-4xl mb-6 font-rubikWetPaint"
          whileHover={{ scale: 1.05 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Leetcode",
              desc: "Knight (Max. Rating 2050)",
              url: "https://leetcode.com/u/mahendra_34/",
            },
            {
              label: "Codeforces",
              desc: "Specialist (Max. Rating 1461)",
              url: "https://codeforces.com/profile/mahendra_34",
            },
            {
              label: "Codechef",
              desc: "4★ (Max. Rating 1956)",
              url: "https://www.codechef.com/users/mahendra_34",
            },
            {
              label: "CodeChef Starters 183",
              desc: "Secured a global rank of 17 (Division 2)",
              url: null,
            },
            {
              label: "Leetcode Weekly Contest 443",
              desc: "Secured global rank 362 out of 26,392 participants",
              url: null,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400 transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 204, 0, 0.5)" }}
            >
              <motion.h3
                className="text-xl font-semibold text-lime-400 flex items-center justify-between"
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                {item.url && (
                  <button onClick={() => handleNavigation(item.url)}>
                    <Link size={20} className="text-yellow-400 hover:text-yellow-300" />
                  </button>
                )}
              </motion.h3>
              <p className="mt-1 text-white text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Languages Section */}
      <motion.section
        className="my-8 px-6 sm:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.h2
          className="text-yellow-300 text-3xl sm:text-4xl mb-4 font-rubikWetPaint"
          whileHover={{ scale: 1.05 }}
        >
          Languages
        </motion.h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {language.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </motion.section>

      {/* Frameworks Section */}
      <motion.section
        className="my-8 px-6 sm:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.h2
          className="text-yellow-300 text-3xl sm:text-4xl mb-4 font-rubikWetPaint"
          whileHover={{ scale: 1.05 }}
        >
          Frameworks
        </motion.h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {framework.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        className="my-8 px-6 sm:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.h2
          className="text-yellow-300 text-3xl sm:text-4xl mb-4 font-rubikWetPaint"
          whileHover={{ scale: 1.05 }}
        >
          Tools
        </motion.h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {tools.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
