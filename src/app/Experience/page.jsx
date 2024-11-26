import React, { Fragment } from 'react'

const experience = [
  {
    id: 1,
    location: "Synpluse Thailand CO., LTD.",
    description: ["Developed Core Banking software by using Avaloq (PL/SQL) programming.","Using SQL for data analysis , support appropriate system design and development",
      "Designed test cases and Perform unit testing after completing system development. (Functional, UI , API)","Create a UML Diagram to explain the operation of a Technical Documentation Development (TDD) system"],
    date: "May 2024 - September 2024",
    direction: "left",
    role: "Analyst, Software Engineer",
  },
  {
    id: 2,
    location: "Toyota Tsusho Nexty Electronics (Thailand) CO., LTD.",
    description: ["Developed control functions on the Infineon TC275 lite kit using FreeRTOS and C Programming.","Established seamless communication across CAN, I2C and UART protocols",
      "Designed a GUI for easy system control and interfacing","Conducted thorough testing to ensure the system performance"],
    date: "April 2023 - October 2023",
    direction: "right",
    role: "Internship - Software Engineer",
  },
];

const Timeline = ({events}) => {
  return (
    <div className = "flex flex-col gap-y-3 w-full my-4 items-center justify-center">
      <div className = "flex text-white items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-10 mt-20 mr-2">
          <path fill-rule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
          <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
        </svg>
        <h3 className="mx-2 text-4xl font-extrabold mt-20">Experience</h3>
      </div>
      
      {events.map((event,key) => {
        return <Fragment key={key}>
          {/* Circle */}
          <Circle />
          {/* Timeline content */}
          <div className = "grid grid-cols-[1fr_auto_1fr] gap-x-4 p-4">
            {event.direction === 'left'?(
              <EventCard date={event.date} role = {event.role} location={event.location} description={event.description}/>
            ):(
              <div></div>
            )}
            <Pillar/>
            {event.direction === 'right'?(
              <EventCard date={event.date} role = {event.role} location={event.location} description={event.description}/>
            ):(
              <div></div>
            )}
          </div>
          {/* Add Circle between events */}
          {key < (event.length - 1) && <Circle/>}
        </Fragment>
      })}
      <Circle />
    </div>
  )
}

const Circle = () => {
  return (
    <div className="rounded-full w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 mx-auto flex justify-center items-center shadow-lg ring-3 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    </div>
  )
}

const Pillar= () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
  )
}

const EventCard = ({role, location,date,description}) => {
  return (
    <div className = "rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col gap-y-2 shadow-md rounded-xml-xl p-4 flex-wrap">
        <div className = "flex justify-end text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <h3 className= "text-right text-white font-bold mx-2">{date}</h3>
        </div>
        <h3 className = "text-xl text-transparent bg-clip-text bg-gradient-to-r text-bold from-green-400 to-blue-500 font-bold text-lg border-b">{role}</h3>
        <div className = "flex text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3.75 2a.75.75 0 0 0 0 1.5H4v9h-.25a.75.75 0 0 0 0 1.5H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 0 0-1.5H12v-9h.25a.75.75 0 0 0 0-1.5h-8.5ZM6.5 4a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 7 4h-.5ZM6 7a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 7 8h-.5a.5.5 0 0 1-.5-.5V7Zm3-3a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h.5A.5.5 0 0 0 10 5v-.5a.5.5 0 0 0-.5-.5H9Zm-.5 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7Z" clip-rule="evenodd" />
          </svg>
            <h2 className = "text-l -bold text-white text-white mx-2">{location}</h2>
        </div>
        
        <ul className="mx-3 mt-2 list-disc list-inside">
        {description.map((item, index) => (
          <li className = "text-gray-400 text-l" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Experience() {
  return (
    <div className= "flex flex-warp" id="experience">
      <Timeline events={experience} />
    </div>
  );
}

export default Experience
