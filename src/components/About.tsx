import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <main className="w-full h-full bg-white flex justify-center items-center mt-2 py-6">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0">

        {/* Left - Image Section */}
        <div className="flex flex-col md:w-1/3 space-y-6 justify-center items-center md:items-start">
          <Image 
            src="/logo-02.jpg" 
            width={300} 
            height={250} 
            alt="Logo"
            className="border-4 border-gray-800 rounded-lg shadow-xl"
          />
          <Image 
            src="/project-01.jpg" 
            width={300} 
            height={250} 
            alt="Project"
            className="border-4 border-gray-800 rounded-lg shadow-xl"
          />
        </div>

        
        <div className="md:w-2/3 text-center md:text-left space-y-4 px-4 md:px-8">
          <div className="bg-black w-[160px] h-10 flex justify-center items-center text-xl font-extrabold rounded-xl text-white mx-auto md:mx-0">
            About Me
          </div>

          {/* Short Description */}
          <p className="text-xs md:text-lg text-black mt-3 leading-relaxed font-light">
            As a passionate and creative graphic designer I specialize in turning ideas into visually compelling designs that engage inform, and inspire With a keen eye for detail and a deep understanding of design principles I work on creating brand identities digital graphics marketing materials and everything in between design
          </p>

          {/* Graphic Design Details */}
          <div className="mt-2">
            <h1 className="text-3xl font-extrabold text-black tracking-wide">
              Logo Designing
            </h1>
            <p className="text-black leading-relaxed text-lg font-light mt-2 mb-2">
              A logo is more than just a graphic its the face of your brand As a graphic designer I specialize in creating unique timeless logos that represent the core values and identity of a business I believe in simplicity creativity, and functionality to design
            </p>
          </div>

          {/* Skills - Adobe Illustrator and Photoshop */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2 mb-2">
            <div className="bg-black w-[160px] h-12 flex justify-center items-center text-lg font-medium rounded-xl text-white">
              Adobe Illustrator
            </div>
            {/* Add more skills here if needed */}
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;
