import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          saepe molestiae, labore obcaecati expedita consequatur nisi enim
          temporibus nam, inventore laborum maiores explicabo. Commodi incidunt
          accusantium adipisci dolorum dolore nostrum quasi nulla. Aliquam
          voluptate dolorum tempora cumque optio veritatis nesciunt. Dignissimos
          temporibus debitis atque, minus distinctio eum eos asperiores odio.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          harum blanditiis ipsa, inventore dolore deleniti cupiditate quod quasi
          ipsam tenetur animi maxime neque, nam nulla fugiat. Exercitationem eum
          quibusdam corrupti!
        </p>
      </div>
    </div>
  );
};

export default About;
