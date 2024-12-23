"use client";

import React from "react";

const ContactActions = () => {
  return (
    <div>
      <button
        type="submit"
        className="flex text-l items-center justify-center space-x-2 text-xl hover:scale-105 duration-300 w-[120px] h-[30px]"
      >
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 0 16 16"
          fill="currentColor"
          class="size-6"
        >
          <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
        </svg>
      </button>
    </div>
  );
};

export default ContactActions;
