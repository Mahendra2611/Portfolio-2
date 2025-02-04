"use client"
import React from "react";
import Logo from "@/components/Logo";
import Underline from "@/components/Underline";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  
  const handleNavigation = (route) => {
    router.push(route);
  };
  const language = [
    { name: "C", link: "/assets/c.png" },
    { name: "C++", link: "/assets/cpp.png" },
    { name: "Javascript", link: "/assets/js.png" }
  ];
  const framework = [
    { name: "React.js", link: "/assets/react.png" },
    { name: "Node.js", link: "/assets/node.png" },
    // { name: "Next.js", link: "/assets/next.png" },
    { name: "Express.js", link: "/assets/express.png" },
    { name: "Tailwind CSS", link: "/assets/tailwind.png" }
  ];
  
  const tools = [
    { name: "GitHub", link: "/assets/git.png" },
    { name: "Firebase", link: "/assets/firebase.png" },
    { name: "VS Code", link: "/assets/vscode.png" },
    { name: "MongoDB", link: "/assets/mongodb.png" }
  ];
  
  return (
    <div className="pb-20">
      <h1 className="text-center pt-4  text-white text-3xl sm:text-6xl font-bold font-lacquer">
        <span className="text-orange-500">SK</span>ILLS & <span className="text-orange-500">ACHI</span>VEMENTS
      </h1>
<Underline width="200px" height="5px"/>
       {/* Achivements */} 
       <div>
        <h1 className="p-4 text-yellow-300 text-2xl sm:text-4xl sm:pl-20   font-rubikWetPaint">Achivements</h1>
        <div className="flex flex-col gap-4  justify-start sm:pl-20 p-4 text-white text-lg">
          <p ><span className="text-lg sm:text-2xl font-semibold text-lime-500">Leetcode : </span> Knight (Max. Rating 1927) 
          <button onClick={()=>handleNavigation("https://leetcode.com/u/mahendra_34/")} className="pl-4   "><Link color="yellow" size={18}/> </button>
          </p>
          <p ><span className="text-lg sm:text-2xl font-semibold text-lime-500">Codeforces : </span> Specialist (Max. Rating 1447)
          <button onClick={()=>handleNavigation("https://codeforces.com/profile/mahendra_34")} className="pl-4   "><Link color="yellow" size={18}/> </button>
          </p>
          <p ><span className="text-lg sm:text-2xl font-semibold text-lime-500">Codechef : </span> 3* (Max. Rating 1779)
          <button onClick={()=>handleNavigation("https://www.codechef.com/users/mahendra_34")} className="pl-4   "><Link color="yellow" size={18}/> </button>
          </p>
        </div>
      </div>
       {/* Languages */}
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl sm:text-4xl sm:pl-20 font-rubikWetPaint">Languages</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {language.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </div>

      {/* framework */}
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl sm:text-4xl sm:pl-20  font-rubikWetPaint">Framework</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {framework.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl sm:text-4xl sm:pl-20  font-rubikWetPaint">Tools</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {tools.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Page;
