import React from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-400">
            Contact
          </p>
          <p className="py-6 text-white">You can knock me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/fada2406-e1c3-4954-b1c6-9802d0c962ee"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name?"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-gray-300"
            />
            <AiOutlineUser className="absolute left-3 top-3 text-cyan-400" />

            <input
              type="text"
              name="email"
              placeholder="Your email?"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-gray-300"
            />
            <AiOutlineMail className="absolute left-3 top-3 text-cyan-400" />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-gray-300"
            ></textarea>
            <AiOutlineMessage className="absolute left-3 top-3 text-cyan-400" />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
