"use client"
import { useRouter,usePathname } from 'next/navigation'; 

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  console.log(path)
  const handleNavigation = (path) => {
    router.push(path); 
  };

  return (
    <div className="flex items-center justify-around bg-blue-500 w-full h-14 rounded-sm">
      <button
        className={`flex items-center justify-center w-10 h-10  rounded-full ${path === "/"?"text-yellow-300":"text-white"} hover:text-orange-500 text-white bg-transparent `}
        onClick={() => handleNavigation('/')}
      >
        {/* Home Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </button>

      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full  ${path === "/education"?"text-yellow-300":"text-white"} text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out`}
        onClick={() => handleNavigation('/education')}
      >
        {/* Education Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
      </button>

      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full  ${path === "/skills"?"text-yellow-300":"text-white"} text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out`}
        onClick={() => handleNavigation('/skills')}
      >
        {/* Skills Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-of-contents"><path d="M16 12H3"/><path d="M16 18H3"/><path d="M16 6H3"/><path d="M21 12h.01"/><path d="M21 18h.01"/><path d="M21 6h.01"/></svg>
      </button>

      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full  ${path === "/projects"?"text-yellow-300":"text-white"} text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out`}
        onClick={() => handleNavigation('/projects')}
      >
        {/* Projects Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
      </button>

     
    </div>
  );
};

export default Navbar;
