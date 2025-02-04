
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mahendra Pratap Verma",
  description: "This is portfolio of Mahendra Pratap Verma",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:wght@700&family=Fredericka+the+Great&family=Lacquer&family=Londrina+Sketch&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rubik+Wet+Paint&display=swap"
          rel="stylesheet"
        />

      </head>
      <body >
        {children}
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
