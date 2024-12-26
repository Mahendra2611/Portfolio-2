"use client"
import { useRouter } from 'next/navigation'; 

const Navbar = () => {
  const router = useRouter();

  
  const handleNavigation = (path) => {
    router.push(path); 
  };

  return (
    <div className="flex items-center justify-around bg-blue-500 w-full h-14 rounded-lg">
      <button
        className="flex items-center justify-center w-10 h-10  rounded-full text-white bg-transparent "
        onClick={() => handleNavigation('/')}
      >
        {/* Home Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </button>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out"
        onClick={() => handleNavigation('/education')}
      >
        {/* Education Icon */}
        <svg
          className="text-white"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
         height="30px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M809.6 313.4l-358.4-108.4-358.4 108.4v208.4l358.4 108.4 358.4-108.4v-208.4zM512 527.8l-290.4-85.5 290.4-85.4 290.4 85.4-290.4 85.5z" />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out"
        onClick={() => handleNavigation('/skills')}
      >
        {/* Skills Icon */}
        <svg
          className="text-white"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
         height="30px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out"
        onClick={() => handleNavigation('/projects')}
      >
        {/* Projects Icon */}
        <svg
          className="text-white"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
        height="30px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M238.7 296h546.7v50H238.7zM238.7 408.4h546.7v50H238.7zM238.7 520.8h546.7v50H238.7zM238.7 633.2h546.7v50H238.7z" />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-transparent hover:transform hover:-translate-y-1 transition-transform ease-in-out"
        onClick={() => handleNavigation('/contact')}
      >
        {/* Contact Icon */}
        <svg
          className="text-white"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
         height="30px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 12h20m-4 4h4m-4-8h4M3 5h4m-4 14h4" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
