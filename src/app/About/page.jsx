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
    window.open("https://drive.google.com/file/d/12f4QaS5wKgnIX6IjmSMiMs4VXl03pHIG/view?usp=sharing", "_blank");
  };

  return (
    <div className="flex justify-center items-center mt-5" id="about">
      <div className="bg-gray-800 max-w-7xl rounded-xl flex flex-wrap shadow-xl text-white mt-12">
        <Image 
          className="object-cover rounded-l-xl w-full md:w-1/2" 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462563189_1687634331813872_7254341285214983393_n.jpg?stp=dst-jpg_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=34CUvYLfw-kQ7kNvgHN0VHM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFuDbYsOCBjnw4b679lWIrjkFj3bUZjt0Zg4hAFCzZM3A&oe=676B8AA2"
          alt = "chayuda_img" 
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
        </span></h3>
          </div>

          <h2 className="font-bold text-3xl pt-5">I&apos;m Chayuda Sirithanchat (Noey)</h2>
          <p className="pt-2 text-gray-400">I am passionate about technology and problem-solving, holding a Bachelor's Degree in Embedded System Engineering from Burapha University. During my studies, I gained deep knowledge in both hardware and software systems, particularly in embedded systems, microcontrollers, and real-time operating systems.</p>
          <p className="pt-2 text-gray-400">With hands-on experience as a Software Engineer, I have contributed to various projects involving embedded systems and software development. I have worked on designing, testing, and implementing embedded solutions that integrate hardware and software seamlessly. Additionally, I have experience in creating efficient and scalable software applications, working with different programming languages and tools.</p>
          <p className="pt-2 text-gray-400">I am particularly drawn to Frontend Development, where I can combine my technical expertise with creativity to build user-friendly and visually appealing interfaces. I am passionate about enhancing user experiences and am constantly exploring new web technologies, such as React and Next.js, to develop intuitive, responsive web applications. Throughout my projects, I have developed strong problem-solving skills and the ability to adapt to new technologies quickly. I am enthusiastic about working in dynamic environments and continuously improving my skills to meet the demands of the evolving tech landscape.</p>
          
          <div className="pt-2 flex mx-auto justify-">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
            </svg>
            <p className="mx-2">Bangkok, Thailand</p>
          </div >

          <div className="pt-2 flex mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
            </svg>
            <p className="mx-2">Tel. (+66)851205239</p>
          </div>

          <div className="pt-2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" className="size-6">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <p className="mx-2">Email: n.sirithan16@gmail.com</p>
          </div>
          
          <div className="pt-5 flex gap-2">
            <button className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer;" onClick={handleLinkedlnClick}>Linkedln</button>
            <button className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm mt-5 cursor: pointer;" onClick={handleGithubClick}>Github</button>
            <button className="flex shadow-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-1 transform transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-sm animate-bounce mt-5 cursor: pointer;" onClick={handleResumeClick}>View Resume
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
