import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export const socialMedias = [
    {
      link: "https://www.linkedin.com",
      icon: <FaLinkedinIn className="size-8 md:size-8 xl:size-10" />,
      className: " text-white bg-blue-600 rounded-full p-2 "
    },
    {
      link: "https://www.facebook.com",
      icon: <FaFacebookF className="size-8 md:size-8 xl:size-10" />,
      className: " text-white bg-blue-500 rounded-full p-2 "
    },
    {
      link: "https://x.com",
      icon: <FaXTwitter className="size-8 md:size-8 xl:size-10" />,
      className: " text-white bg-gray-800 rounded-full p-2 "
    },
    {
      link: "https://www.instagram.com",
      icon: <FaInstagram className="size-8 md:size-8 xl:size-10" />,
      className: " text-white bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 rounded-full p-2 "
    },
    
  ];
  