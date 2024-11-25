import React from 'react'
import Image from 'next/image'

const skill = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
    title: "Programming C",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    title: "Programming C++",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/128/2772/2772128.png",
    title: "SQL",
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    title: "Python",
  },
  {
    id: 5,
    image: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
    title: "HTML",
  },
  {
    id: 6,
    image: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    title: "CSS",
  },
  {
    id: 7,
    image: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    title: "React",
  },
  {
    id: 8,
    image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    title: "NextJS",
  },
  {
    id: 9,
    image: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png?f=webp",
    title: "Tailwind CSS",
  },
];


function Skills() {
  return (
    <div className = "text-white"  id="skills">
      <div className = "flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12 mt-5 mr-2">
          <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
        </svg>
        <h3 className = "font-extrabold text-4xl mt-5">My Skills</h3>
      </div>
      
      <div className = "w-90 grid grid-cols-3 md:grid-cols-3 gap-5 mx-5 mt-5 my-5">
        {skill.map((skill) => (
          <div key={skill.id} className = "bg-gray-800 rounded-[10px] flex flex-col items-center hover:scale-105 duration-300">
            <h2 className = "font-bold text-2xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-shadow">{skill.title}</h2>
            <img className = "w-[150px] pt-5 mt-1 mb-5" src= {skill.image}/>
          </div>
        ))}
         
      </div>
    </div>
  )
}

export default Skills
