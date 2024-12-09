"use client"; // This ensures this component is client-side only

import React from "react";

function AboutActions() {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1PJtMSCpk-ZmwxcfEpckX_Iqim8ADJ_O_/view?usp=sharing",
      "_blank"
    );
  };

  const handleLinkedlnClick = () => {
    window.open("https://www.linkedin.com/in/chayuda-sirithanchat/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/ChayudaSi?tab=repositories", "_blank");
  };

  return (
    <div className="pt-5 flex gap-2">
      <button
        className="justify-center items-center flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer; w-[100px] h-[30px]"
        onClick={handleLinkedlnClick}
      >
        Linkedln
      </button>
      <button
        className="justify-center items-center flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer; w-[85px] h-[30px]"
        onClick={handleGithubClick}
      >
        Github
      </button>
      <button
        className="justify-center items-center flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm animate-bounce mt-5 cursor: pointer; w-[180px] h-[30px]"
        onClick={handleResumeClick}
      >
        View Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="size-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
export default AboutActions;
