import React from 'react'
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva } from 'react-icons/si'


const Skills = () => {
  return (
        <main className='w-full h-full bg-white flex justify-center items-start mt-2 py-3'>
        <div className='w-full md:w-[80%] flex flex-col justify-center items-center'>
          {/* Top Section */}
          <div className='flex flex-col justify-center items-center'>
            <div className='font-extrabold text-4xl'>Skills</div>
            <p className='mt-2 text-center text-sm'>
            I create designs that are both visually stunning and functional
            With a strong focus on creativity and precision I craft digital and print designs
            </p>
          </div>
      
          {/* Bottom Section - Icons */}
          <div className="w-full flex flex-wrap gap-8 mt-10 justify-center items-center">
            {/* Icon 1 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiAdobeillustrator className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Adobe Illustrator</h3>
              </div>
            </div>
      
            {/* Icon 2 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiAdobephotoshop className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Photoshop</h3>
              </div>
            </div>
      
            {/* Icon 3 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiCanva className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Canva Design</h3>
              </div>
            </div>
      
          </div>
        </div>
      </main>
      
  )
}

export default Skills
