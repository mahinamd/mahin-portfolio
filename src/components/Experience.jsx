import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import azure from "../assets/Azure.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import android from "../assets/android.png";
import django from "../assets/django.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/flutter.png";
import mongodb from "../assets/Mongodb.png";
import oracle from "../assets/oracle.png";
import python from "../assets/Python.png";
import sql from "../assets/Sql.png";




const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: azure,
      title: "Microsoft Azure",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: android,
      title: "Android",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: oracle,
      title: "Oracle",
      style: "shadow-red-400",
    },
    {
      id: 12,
      src: sql,
      title: "SQL",
      style: "shadow-orange-400",
    },
    {
      id: 13,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: django,
      title: "Django",
      style: "shadow-green-400",
    },
    {
      id: 15,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    
    
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
