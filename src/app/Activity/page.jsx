import React from 'react'

const activity = [
  {
    id: 1,
    title: "Senior Project",
    description: ["Project: Wireless Sensor Network for Temperature Monitoring",
      "Environment: FreeRTOS ,ESP32, Programming C / C++, LVGL, Platfrom IO,Easy EDA",
      "Protocol: ESP-NOW, WiFi, ADC, SPI, I2C",
      "Designed and developed software and hardware for efficient temperature data transmission and display across multiple devices",
      "Utilized wireless mesh networking with ESP-NOW to enable seamless communication between devices.",
      "Developed a real-time display interface using LVGL, ensuring an interactive and user-friendly experience."
    ]
  },
  {
    id: 2,
    title: "Mini Project",
    description: ["Project: Doc Support",
      "Environment: HTML, CSS, JavaScript",
      "Developed the Doc Support web application by designing the frontend using HTML, CSS, and JavaScript to create an interactive user experience",
    ]
  },
  {
    id: 3,
    title: "TESA Topgun Rally 2023",
    description: ["Environment: FreeRTOS ,ESP32, Programming C / C++, Edge Impulse",
      "9th on Hardware Programming using ESP32, FreeROTS, and Edge Impulse to detect water level",
    ]
  },
  {
    id: 4,
    title: "Faculty of Engineering Student Club",
    description: ["Public Relations",
      "Vice President",
    ]
  },
  {
    id: 5,
    title: "Startup Thailand League 2022",
    description: ["Participated in the Startup Thailand League 2022 as part of the Kids Finder team, developing a location tracking device. Designed and built a prototype to showcase during the Demo Day event."]
  },
  {
    id: 6,
    title: "Volunteer Instructor: E-Camp",
    description: ["Basic Electronic measurement",
      "Basic Programming Arduino",
    ]
  },
  {
    id: 7,
    title: "Volunteer Instructor: Embedded Workshop",
    description: ["Basic Arduino programming",
      "IOT Programming using ESP32",
    ]
  },
  {
    id: 8,
    title: "Volunteer Instructor:  PCB Prototype Workshop",
    description: ["Basic electronic measurement",
      " PCB design using EasyEDA",
    ]
  },
]

const Activity = () =>{
  return (
    <div className = "text-white" id="activity">
      <div className = "container mx-auto lg:px-24 mt-20">
      <h3 className="text-4xl font-bold text-center mb-5 mt-10">
        Activity{" "}
        <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
        @Burapha University
        </span>
      </h3>
        <div className = "grid grad-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {activity.map((activity) => (
            <div key={activity.id} className = "bg-gray-800 pb-6 px-6 rounded-lg mt-3">
              <div className = "mt-2 text-right text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{activity.id}</div>
              <h2 className = "mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{activity.title}</h2>
              <ul className="mx-3 mt-2 list-disc list-inside">
                {activity.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          </div>
        </div>
    </div>
  );
};

export default Activity

