import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-800 shadow-xl mx-auto">
        <div className = "text-center text-white">
            <h2 className="mx-8 font-black text-2xl pt-2">
            Chayuda's{" "}
                <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            Portfolio
                </span>
            </h2>
            <p className="text-gray-300">Thank you for visiting my personal portfolio website.I hope you enjoyed exploring my work. For inquiries or collaborations, don’t hesitate to reach out.</p>
        </div> 
        <div className = "text-white text-l font-bold flex gap-5 justify-center mt-5 pb-5">  
            <div className = "flex rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" class="size-6">
                    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                </svg>
                <a href="#home" classNmae= "mx-1">Home</a>
            </div>
            <div className = "flex rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" class="size-6">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <a href="#about" classNmae= "mx-1">About</a>
            </div>
            <div className = "flex rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" class="size-6">
                    <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
                    <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
                </svg>
                <a href="#education" classNmae= "mx-1">Education</a>
            </div>
            <div className = "flex rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
                <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
            </svg>
                <a href="#experience" classNmae= "mx-1">Experience</a>
            </div>
            <div className = "flex rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" className="size-6">
                    <path d="M12 5H4v4h8V5Z" />
                <path fillRule="evenodd" d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v1.5h2.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H6V12H2a1 1 0 0 1-1-1V3Zm1.5 7.5v-7h11v7h-11Z" clipRule="evenodd" />
                </svg>
                <a href="#activity" classNmae= "mx-1">Activity</a>
            </div>
            <div className = "flex rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
                </svg>
                <a href="#skills" classNmae= "mx-1">Skills</a>
            </div>         
        </div> 
    </div>
  )
}

export default Footer
