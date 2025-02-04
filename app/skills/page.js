import React from "react";
import Logo from "@/components/Logo";

const Page = () => {
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
    <div>
      <h1 className="text-center pt-4 text-white text-3xl font-semibold">
        <span className="text-orange-500">SK</span>ILLS
      </h1>
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl font-semibold">Languages</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {language.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </div>

      {/* framework */}
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl font-semibold">Framework</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {framework.map((logo, index) => (
            <Logo key={index} name={logo.name} link={logo.link} />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h1 className="p-4 text-yellow-300 text-2xl font-semibold">Tools</h1>
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
