import React from "react";
import { ProjectData } from "@/utils/ProjectData";
import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <div className="p-4">
         <h1 className="text-center pt-4 text-white text-3xl  font-semibold">
        <span className="text-orange-500">PRO</span>JECTS
      </h1>
     <div className="flex flex-wrap max-w-[400px] border-2 border-red-500">
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
