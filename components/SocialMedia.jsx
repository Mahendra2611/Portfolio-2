"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
const Button = () => {
  const router = useRouter();
  const handleNavigation = (path)=>{
    router.push(path)
  }
  return (
    <div className="flex justify-center  pt-10">
      <ul className="flex list-none space-x-4 sm:space-x-14">

        <li className="relative group">
         
          <button onClick={()=>handleNavigation("https://x.com/mpv_34")}>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            {/* Twitter Icon (add the actual icon here) */}
            <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
          </svg>
           
           
          </div>
          </button>
        </li>

        <li className="relative group">
        <button onClick={()=>handleNavigation("https://www.instagram.com/mahendra_123.p")}>
          <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-pink-500 text-white transition-colors duration-300">
            {/* Instagram Icon (add the actual icon here) */}
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
           
          </div>
          </button>
        </li>
        <li className="relative group">
        <button onClick={()=>handleNavigation("https://github.com/Mahendra2611")}>
  <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-[#211F1F] text-white transition-colors duration-300">
    {/* GitHub Icon */}
    <svg height="1.8em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="github">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.394.6.11.823-.26.823-.577 0-.285-.01-1.043-.015-2.047-3.338.727-4.036-1.607-4.036-1.607-.548-1.392-1.337-1.764-1.337-1.764-.985-.67.075-.657.075-.657 1.09.076 1.664 1.118 1.664 1.118 1.015 1.732 2.656 1.23 3.3.94.099-.734.396-1.23.722-1.514-2.67-.303-5.468-1.334-5.468-5.934 0-1.31.467-2.379 1.235-3.22-.124-.302-.535-1.528.105-3.181 0 0 1.008-.323 3.293 1.238A11.47 11.47 0 0 1 12 4.3c1.02 0 2.037.138 3.003.41 2.281-1.562 3.288-1.238 3.288-1.238.64 1.653.229 2.879.105 3.181.77.841 1.235 1.91 1.235 3.22 0 4.609-2.799 5.623-5.475 5.917.406.35.769 1.041.769 2.101 0 1.522-.015 2.739-.015 3.113 0 .318.223.691.827.578C20.563 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  </div>
  </button>
</li>

<li className="relative group">
<button onClick={()=>handleNavigation("https://www.linkedin.com/in/mahendra-pratap-verma-559b81257")}>
  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-[#0077B5] text-white transition-colors duration-300">
    {/* LinkedIn Icon */}
    <svg height="1.8em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="linkedin">
      <path d="M4.98 3C3.93 3 3 3.93 3 4.98v14.04C3 20.07 3.93 21 4.98 21h14.04c1.05 0 1.98-.93 1.98-1.98V4.98C21 3.93 20.07 3 19.02 3H4.98zM9.17 16H6.65v-7h2.52v7zm-1.26-8.46c-.8 0-1.45-.68-1.45-1.5 0-.83.65-1.5 1.45-1.5s1.45.67 1.45 1.5c0 .82-.65 1.5-1.45 1.5zm10.46 8.46h-2.52v-3.74c0-.89-.32-1.5-.93-1.5-.57 0-.93.39-.93 1.15v3.91h-2.52v-7h2.52v1h.03c.35-.58 1.03-1.27 2.09-1.27 1.54 0 2.7.99 2.7 3.12v3.15z"/>
    </svg>
  </div>
  </button>
</li>


      </ul>
    </div>
  );
};

export default Button;
