import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Java & Spring Boot Coder",
          "Cloud & DevOps Enthusiast",
          "Docker Navigator",
          "AWS Explorer",
          "Open Source Contributor",
          "Full-Stack Web Developer",
          "Lifelong Learner in Tech"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
