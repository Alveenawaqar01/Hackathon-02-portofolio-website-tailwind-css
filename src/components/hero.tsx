import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
      <main className='w-full  h-full md:h-[400px] flex justify-center items-center bg-black'>
        <div className='flex w-full md:w-[80%] h-full flex-col md:flex-row justify-between items-start pt-5'>
          {/* left*/}
   <div className='w-full md:w-[40%] flex justify-center items-center'>
    <Image src="/logo11.png"  width={350}
    height={350}
    alt='profile' 
  
    
    
     />
   </div> 
          {/*right*/}
          <div className='w-full p-10 md:w-[60%] space-y-2'>
            <h1 className='text-5xl font-extrabold text-white'>I am Alveena </h1>
            <p className='text-white'>Hello Im a passionate and creative Graphic Designer with a deep love for visual storytelling My expertise lies in transforming ideas into beautiful
               impactful designs that communicate your brands message clearly and creatively With a keen eye for detail and a strong understanding of design principles
               I focus on delivering designs that not only look great but also serve a functional purpose</p>

               <button className="px-3 py-1 bg-white text-black rounded-lg shadow-md transform transition-all duration-300 hover:bg-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold">
  Hire Me
</button>


              <div>
                
              </div>
             
          </div>
        </div>
      </main>
  )
}

export default Hero
