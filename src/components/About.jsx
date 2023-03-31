import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const About = () => {
  const [show, setShow] = useState(false);

  const slideIn = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-100%)",
  });

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <animated.p style={slideIn} className="text-xl mt-20">
          Hi there!
          I'm Iftakhar Ahmed Mahin, a recent East West University BSc in
          Computer Science and Engineering graduate. I love web and app
          development and study software. I learned programming languages and
          software development methods in university. These initiatives allowed
          me to apply my knowledge and improve my talents. I feel confident in
          my software development skills after these encounters. SQA experience
          complements my technical skills. I am devoted to best practices to
          ensure software products meet the highest quality requirements.
        </animated.p>

        <br />

        <animated.p style={slideIn} className="text-xl">
          I like learning new technologies and software development trends in my
          free time. I appreciate solving difficult problems creatively. I'm
          enthusiastic to learn and contribute to new projects as a developer.
        </animated.p>

        <br />
      </div>
    </div>
  );
};

export default About;
