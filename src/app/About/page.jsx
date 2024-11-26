"use client"

import React from 'react'
import Image from 'next/image';

function About() {

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/12f4QaS5wKgnIX6IjmSMiMs4VXl03pHIG/view?usp=sharing", "_blank");
  };

  const handleLinkedlnClick = () => {
    window.open("https://www.linkedin.com/in/chayuda-sirithanchat/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/ChayudaSi?tab=repositories", "_blank");
  };

  return (
    <div className="flex justify-center items-center mt-5" id="about">
      <div className="bg-gray-800 max-w-7xl rounded-xl flex flex-wrap shadow-xl text-white mt-12">
        <Image 
          className="object-cover rounded-l-xl w-full md:w-1/2 " 
          src="/Images/img_Chayuda.jpg"
          alt = "chayuda_img"
          width={500} height={300} 
        />
        <div className="px-5 w-full md:w-1/2">
          <div className="flex items-center mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12 mt-10 mr-1">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <h3 className="font-extrabold text-4xl pt-10">
              About{" "}
              <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Me
              </span>
            </h3>
          </div>

          <h2 className="font-bold text-3xl pt-5">I&apos;m Chayuda Sirithanchat (Noey)</h2>
          <p className="pt-2 text-gray-400">I am passionate about technology...</p>
          {/* Other paragraph content */}
          
          <div className="pt-5 flex gap-2">
            <button 
              className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer;" 
              onClick={handleLinkedlnClick}
            >
              Linkedln
            </button>
            <button 
              className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer;" 
              onClick={handleGithubClick}
            >
              Github
            </button>
            <button 
              className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm animate-bounce mt-5 cursor: pointer;" 
              onClick={handleResumeClick}
            >
              View Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6 mx-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
