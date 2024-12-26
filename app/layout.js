import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahendra Pratap Verma",
  description: "This is portfolio of Mahendra Pratap Verma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      
       {children}
      <div className="fixed bottom-0  w-full"> 
        <Navbar/>
      </div>
        </body>
    </html>
  );
}
