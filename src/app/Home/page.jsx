"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

function About() {
  return (
    <div>
      <div className="flex justify-center py-20" id="home">
        <div className = "container text-white mt-10">

          <div className = "flex flex-col items-center">
            <Image alt="chayudaimg" className = "rounded-full w-80 h-80 object-cover trnsform transition-transform duration-300 hover:scale-105" src = "https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/457740738_409165172283271_4638035414907360065_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=2vD54UEHkacQ7kNvgGErrd3&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&oh=03_Q7cD1QFOGZQxlpZ0FO24SEOUY-br4LPGao6bLCbBDJC9EZB2Vw&oe=67651446"/>
          </div>

          <h2 className = "text-4xl font-bold text-center mt-5 ">I'm {""}<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' > Chayuda Sirithanchat</span><br/>
          <TypeAnimation
          sequence = {["Embedded System Engineer",1000,"FrontEnd Developer",1000]} wrapper="span" speed={50} repeat={Infinity} /></h2>
          <p className = "text-lg text-center mt-2 text-gray-300">I am possionate about Embedded System and Frontend development</p>
        </div>
    </div>
    </div>
  )
}

export default About
