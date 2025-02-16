import Image from "next/image";

import SocialMedia from "@/components/SocialMedia";
const Card = () => {
  "/assets/profile_pic.jpg"
  return (
    <div className="mb-16">
      <div className="sm:flex">
        <div className=" order-2 sm:flex-1/2 relative flex flex-col justify-around gap-3 p-4 w-full sm:h-[550px]  bg-zinc-800 ">
          <div className="relative z-5 w-full h-52 sm:h-[75%] rounded-lg overflow-hidden cursor-pointer">
            <Image
              src="/assets/profile_pic.jpg"
              width={300}
              height={200}
              className="w-full h-full object-cover sm:object-contain"
              alt="Profile Picture"
            />
          </div>

          <div className="w-full text-center overflow-clip text-xl font-semibold  text-lime-500 sm:text-2xl capitalize whitespace-nowrap overflow-ellipsis">
            <span >Mahendra Pratap Verma</span>
          </div>
          <a
            href="/assets/mahendra_resume.pdf"
            target="_blank"

            className="flex  justify-center border-2 border-yellow-500 items-center gap-1 p-2  text-xs font-medium text-gray-300 rounded-lg "
          >
            <span className="text-white font-bold text-[16px] ">Download Resume</span>
          </a>

        </div>
        <div className="px-4 order-1  flex flex-col gap-y-5 justify-center items-center  sm:flex-1/2" >
          <h1 className="text-white    font-fredericka text-3xl sm:text-5xl">Hi There I'm <br /> Mahendra Pratap Verma</h1>
          <h3 className="text-xl sm:text-3xl font-[var(--font-montserrat)] font-sans my-2 text-yellow-300">A FullStack Developer and Comptetive Programmer</h3>
          <p className="text-[16px] sm:text-[20px] font-[var(--font-montserrat)] my-2 text-emerald-200">I am a passionate Full Stack Developer and a 3rd year B.Tech CSE student with a strong enthusiasm for Competitive Programming. With over 1000+ problems solved. My interests lie in building scalable web applications and continuously improving my coding and problem-solving skills.</p>
        </div>
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Card;
