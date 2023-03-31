import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const slideInAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2 md:mr-8">
          <animated.h2
            style={textAnimation}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            I'm a Software Engineer
          </animated.h2>
          <animated.p
            style={textAnimation}
            className="text-white py-4 max-w-md"
          >
            As a software enthusiast, I thrive on creating innovative web and app
            solutions that enhance the user experience. I am Iftakhar Ahmed
            Mahin, a passionate developer with a flair for creativity.
          </animated.p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-300 to-red-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <animated.div style={slideInAnimation} className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
