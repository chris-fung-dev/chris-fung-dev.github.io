import React from "react";
import { FaGamepad, FaGithub } from "react-icons/fa"; // Importing the necessary icons

const SocialLinks = () => {
  return (
    <div className="fixed top-[35%] left-0">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://chris-fung-dev.itch.io/"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              itch.io <FaGamepad size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://github.com/chris-fung-dev"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              GitHub <FaGithub size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
