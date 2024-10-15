// components/TypeWrittingTitle.js
import React from "react";
import { ReactTyped } from "react-typed";

const TypeWritingTitle = () => {
  return (
    <div className="text-2xl mb-8 dark:text-gray-300">
      <ReactTyped
        strings={[
          "Software Engineer",
          "Full Stack Developer",
          "Computer Science Student",
          "Web Developer",
          "Software Enthusiast",
          "Software Developer",
          "Backend Developer",
          "Frontend Developer",
        ]}
        typeSpeed={100}
        backSpeed={50}
        startDelay={500}
        backDelay={1500}
        loop={true}
        showCursor={true}
        cursorChar={"|"}
      />
    </div>
  );
};

export default TypeWritingTitle;
