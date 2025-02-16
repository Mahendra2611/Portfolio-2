import React from "react";
import { ProjectData } from "@/utils/ProjectData";
import ProjectCard from "@/components/ProjectCard";
import Underline from "@/components/Underline";
const Page = () => {
  return (
    <div className="p-4">
         <h1 className="text-center pt-4 text-white font-bold font-lacquer text-3xl sm:text-6xl  ">
        <span className="text-orange-500">PRO</span>JECTS
      </h1>
     <Underline/>
     <div className="flex flex-wrap justify-center items-center ">
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
     </div>
    </div>
  );
};

export default Page;
