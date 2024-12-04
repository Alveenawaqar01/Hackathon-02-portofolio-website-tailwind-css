import React from 'react'
import { FaBehanceSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoCopyOutline } from 'react-icons/io5'
import { MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md'

const Footer = () => {
  return (
    <main className='w-full h-full bg-white flex justify-center items-start mt-2 py-3'>
      <div className='w-full md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center'>
        {/* Top Section */}
        <div className='flex flex-col justify-center items-center'>
          {/* "Get in Touch" Button */}
          <div className="bg-black w-[160px] h-10 flex justify-center items-center text-xl rounded-xl mt-2 cursor-pointer transform transition-all duration-300 hover:bg-blue-200 hover:scale-105 hover:shadow-lg hover:text-white text-white">
            Get information
          </div>

          <p className='mt-3 md:text-lg text-center text-xs'>
            If you are looking for a graphic designer or developer have a query or simply want to connect
          </p>
        </div>

        {/* Contact Info */}
        <div className='mt-4 w-full text-center'>
          <h1 className='flex justify-center items-center font-semibold text-sm md:text-lg'>
            <MdOutlineEmail className='text-2xl mr-2' /> 
            abc@gmail.com 
            <IoCopyOutline className='ml-2 cursor-pointer' />
          </h1>
          <h2 className='flex justify-center items-center font-semibold text-sm md:text-lg mt-2'>
            <MdPhoneInTalk className='text-2xl mr-2' /> 
            0300-00000 
            <IoCopyOutline className='ml-2 cursor-pointer' />
          </h2>
        </div>

        {/* Social Media Links */}
        <div className='mt-2 text-center'>
          <p className='text-sm md:text-lg'>You may also find me on these platforms</p>
          <div className='flex items-center justify-center space-x-6 mt-2'>
            <FaLinkedin className='text-3xl sm:text-4xl text-blue-700 hover:text-blue-600 cursor-pointer' />
            <FaInstagram className='text-3xl sm:text-4xl text-pink-400 hover:text-pink-500 cursor-pointer' />
            <FaBehanceSquare className='text-3xl sm:text-4xl text-black hover:text-gray-800 cursor-pointer' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
