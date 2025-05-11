"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, GraduationCap, List, FolderGit2 } from "lucide-react";

const Navbar = () => {
  const path = usePathname();

  const navItems = [
    { route: "/", icon: Home },
    { route: "/education", icon: GraduationCap },
    { route: "/skills", icon: List },
    { route: "/projects", icon: FolderGit2 },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex gap-6 shadow-lg z-50">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = path === item.route;

        return (
          <Link
            key={index}
            href={item.route}
            prefetch
            className={`p-2 rounded-full transition duration-300 ${
              isActive
                ? "bg-gradient-to-br from-orange-500 to-pink-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Icon size={24} />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
