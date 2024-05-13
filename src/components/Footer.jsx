import React from 'react'
import logo2 from '../assets/images/blog2.png'
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className='w-full pt-16 ' >
      <p className='border-t-2 border-gray-300 w-[90%] m-auto'></p>
        <div className='grid lg:grid-cols-4 grid-cols-2 p-3 py-14 bg-blue-600 bg-opacity-5'>
           <div className='py-2  space-y-4'>
              <img src={logo2} alt="" className='w-48 m-auto'/>
              <h1 className='text-start text-gray-800 font-semibold'>Explorez votre destination ultime pour tout ce qui concerne le développement : tutoriels, articles et une communauté passionnée de développeurs.</h1>
           </div>
           <div className='text-center font-semibold text-gray-800 space-y-2'>
               <h1 className='py-2 text-lg font-bold'>Terms & policy</h1>
               <p>Terms of Service</p>
               <p>Privacy policy</p>
               <p>Cookie policy</p>
               <p>Cookie preferences</p>
           </div>
           <div className='text-center font-semibold text-gray-800 space-y-2'>
              <h1 className='py-2 text-lg font-bold'>About</h1>
              <p>Company</p>
              <p>Community</p>
              <p>Careers</p>
           </div>
           <div className='space-y-6 col-auto xl:col-span-1 m-auto'>
             <h1 className='text-lg font-bold text-center text-gray-800'>Get the lastest updates</h1>
             <div className='w-fit xl:flex space-y-2 xl:space-y-0 justify-center space-x-2'>
                 <input type="text" placeholder='Enter your Email ....' className='bg-gray-100 px-2'/>
                 <button className='bg-blue-600 text-gray-50 px-3 py-1 font-semibold rounded-md'>SUBSCRIBE</button>
             </div>
             <p className='flex justify-center space-x-4 text-2xl text-blue-600 text-center m-auto'>
                    <FaFacebookSquare />
                    <RiTwitterXLine />
                    <FaSquareInstagram />
                    <FaLinkedin />
                    <IoMdMail />
              </p>
           </div>
        </div>
      <p className='border-t-2 border-gray-300 w-[90%] m-auto'></p>
      <div className='py-6 text-end text-gray-600 px-10 bg-blue-600 bg-opacity-5'>
        <h1>© 2024 ,BlogBinder All Right Reserved.</h1>
      </div>
    </div>
  )
}
