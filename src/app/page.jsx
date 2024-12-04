"use client";

import React from "react";
import About from "./About/page";
import Activity from "./Activity/page";
import Contact from "./Contact/page";
import Education from "./Education/page";
import Experience from "./Experience/page";
import Skills from "./Skills/page";
import Home from "./Home/page";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Experience />
      <Activity />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default page;
