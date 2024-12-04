import React, { Fragment } from "react";

const education = [
  {
    id: 1,
    year: "Year 2020 - 2024",
    title: "Bachelor's Degree in Embedded Systems Engineering",
    location: "Burapha University",
    description:
      "Graduated with a GPA 3.38. Specialized in Embedded Systems, Programming.",
    direction: "left", // เพิ่ม direction
  },
  {
    id: 2,
    year: "Year 2014 - 2020",
    title: "High School (Science and Mathematics Program)",
    location: "Nawamintarachinuthit Traimudomsuksa Pattanakarn School",
    description: "Focused on mathematics and science",
    direction: "right", // เพิ่ม direction
  },
];

const Timeline = ({ events }) => {
  return (
    <div
      className="flex flex-col gap-y-3 w-full my-4 items-center justify-center"
      id="education"
    >
      <div className="flex text-white items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <h3 className="mx-2 text-4xl font-extrabold">Education</h3>
      </div>

      {events.map((event, key) => {
        return (
          <Fragment key={key}>
            {/* Circle */}
            <Circle />
            {/* Timeline content */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 p-4">
              {event.direction === "left" ? (
                <EventCard
                  year={event.year}
                  title={event.title}
                  location={event.location}
                  description={event.description}
                />
              ) : (
                <div></div>
              )}
              <Pillar />
              {event.direction === "right" ? (
                <EventCard
                  year={event.year}
                  title={event.title}
                  location={event.location}
                  description={event.description}
                />
              ) : (
                <div></div>
              )}
            </div>
            {/* Add Circle between events */}
            {key < event.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
    </div>
  );
};

const Circle = () => {
  return (
    <div className="rounded-full w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 mx-auto flex justify-center items-center shadow-lg ring-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    </div>
  );
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
  );
};

const EventCard = ({ year, title, location, description }) => {
  return (
    <div className="rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col gap-y-2 shadow-md rounded-xml-xl p-4 flex-wrap">
      <div className="text-white flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 2 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <h3 className="text-right text-white font-bold mx-2">{year}</h3>
      </div>
      <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r text-bold from-green-400 to-blue-500 font-bold text-lg border-b">
        {title}
      </h3>
      <div className="text-white flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 1 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <h2 className="text-l -bold text-white text-white mx-2">{location}</h2>
      </div>
      <p className="mx-3 mt-2 text-gray-400 ">{description}</p>
    </div>
  );
};

function Education() {
  return (
    <div className="flex flex-warp">
      <Timeline events={education} />
    </div>
  );
}

export default Education;
