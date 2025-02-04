import React from 'react';
import Image from 'next/image';

const Card = ({ year, degree, collage }) => {
    return (
        // <div className="flex justify-center w-full border-2 border-yellow-500 sm:w-60   items-center gap-4 my-2">
           
            <div className="flex flex-col justify-start sm:h-[200px] sm:w-[600px] w-[90%] items-center bg-[#031738] py-4 px-2 shadow-[inset_10px_10px_10px_-1px_#020914,inset_-10px_-10px_10px_-1px_#142a4d] rounded-lg">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white sm:text-2xl rounded-lg px-3 py-2">{year}</span>
                <h1 className="font-bold text-xl text-orange-400 mt-2 sm:text-4xl">{degree}</h1>
                <h2 className="text-base text-center mt-1 text-white sm:text-3xl">{collage}</h2>
            </div>
        // </div>
    );
};

export default Card;
