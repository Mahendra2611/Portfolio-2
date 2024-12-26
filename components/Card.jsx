import React from 'react';
import Image from 'next/image';
import Hat from "../assets/hat.jpg";

const Card = ({ year, degree, collage }) => {
    return (
        <div className="flex justify-center w-full md:w-60   items-center gap-4 my-2">
            {/* <div className="flex flex-col justify-around items-center">
                <span>
                    <Image src={Hat} alt="Hat" className="mt-2 w-12 h-12" />
                </span>
                <div className="h-28 border-l-4 border-blue-500"></div>
            </div> */}
            <div className="flex flex-col justify-start w-full items-center bg-[#031738] py-4 px-2 shadow-[inset_10px_10px_10px_-1px_#020914,inset_-10px_-10px_10px_-1px_#142a4d] rounded-lg h-40">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg px-3 py-2">{year}</span>
                <h1 className="font-bold text-xl text-orange-400 mt-2">{degree}</h1>
                <h2 className="text-base mt-1 text-white">{collage}</h2>
            </div>
        </div>
    );
};

export default Card;
