"use client";
import { useRouter, usePathname } from "next/navigation";
import { Home, GraduationCap, List, FolderGit2 } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const handleNavigation = (route) => {
    router.push(route);
  };

  const navItems = [
    { route: "/", icon: Home },
    { route: "/education", icon: GraduationCap },
    { route: "/skills", icon: List },
    { route: "/projects", icon: FolderGit2 },
  ];

  return (
    <div className="flex items-center justify-around sm:justify-center sm:gap-x-40 bg-blue-500 w-full h-14 rounded-sm">
      {navItems.map(({ route, icon: Icon }) => (
        <button
          key={route}
          className={`flex items-center justify-center 
            w-10 h-10 sm:w-35 sm:h-35 rounded-full
            text-white bg-transparent 
            ${
              path === route
                ? "border-2 border-gradient-to-r from-red-800 to-yellow-500 shadow-lg bg-slate-500"
                : ""
            }
          `}
          onClick={() => handleNavigation(route)}
        >
          {/* Large Icon with Adaptive Sizing */}
          <Icon size={28} className="sm:size-[30px]" />
        </button>
      ))}
    </div>
  );
};

export default Navbar;
