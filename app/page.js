import Image from "next/image";

import SocialMedia from "@/components/SocialMedia";
const Card = () => {
  return (
    <div className="mb-16">
      <div className="relative flex flex-col gap-3 p-4 w-full  bg-zinc-800 ">
        <div className="relative z-5 w-full h-52 bg-purple-800 rounded-lg overflow-hidden cursor-pointer">
          <Image src={"/assets/profile_pic.jpg"} width={300} height={200} className="w-full" />
        </div>
        <div className="w-full text-center overflow-clip text-lg font-semibold text-gray-300 capitalize whitespace-nowrap overflow-ellipsis">
          <span >Mahendra Pratap Verma</span>
        </div>
        <button className="flex justify-center items-center gap-1 p-2  bg-gradient-to-t from-blue-600 to-gray-300 text-xs font-medium text-gray-300  rounded-lg shadow-inner">
          <span className="text-black font-bold text-[16px]">Download Resume</span>
        </button>
      </div>
      <div className="px-4" >
        <h1 className="text-white font-bold text-3xl">Hi There I'm <br/> Mahendra Pratap Verma</h1>
        <h3 className="text-xl font-semibold font-sans my-2 text-yellow-300">A FullStack Developer and Comptetive Programmer</h3>
        <p className="text-[16px]  font-sans my-2 text-emerald-200">I am a passionate Full Stack Developer and a 3rd year B.Tech CSE student with a strong enthusiasm for Competitive Programming. With over 1000+ problems solved. My interests lie in building scalable web applications and continuously improving my coding and problem-solving skills.</p>
      </div>
      <div>
        <SocialMedia/>
      </div>
    </div>
  );
};

export default Card;
