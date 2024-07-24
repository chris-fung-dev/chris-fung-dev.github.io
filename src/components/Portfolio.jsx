import React from "react";
import Squish_Photo from "../assets/squish-thumbnail.png";
// import Bunny_Photo from "../assets/bunny-thumbnail.png";
// import BatteryLife_Photo from "../assets/battery-life-thumbnail.png";

const Portfolio = () => {
  return (
    <div>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
      >
        <div>
          <p>Portfolio</p>
          <p>Check out some of my work right here</p>
        </div>

        <div>
          <div>
            <img src={Squish_Photo} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
