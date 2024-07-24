import React from "react";
import Photo from "../assets/profile-pic.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start md:mr-8">
          <h2 className="text-white text-4xl font-bold mb-4">
            I'm a Game Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md mb-6">
            I have 3 years of experience
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mb-8">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaLongArrowAltRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Photo}
            alt="Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
