import React from 'react'
import RightSide from './RightSide'
import { IoIosArrowForward } from "react-icons/io";
import img from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/5.jpg'

export default function NetworkContent() {
  return (
    <div className='lg:w-[86%] w-[95%] m-auto z-0 pt-48 py-32 xl:py-0 md:pt-32 xl:pt-32'>
         <div className="grid lg:grid-cols-12 gap-6 ">
           <div className='lg:col-span-8'>
           <div className='flex justify-start items-center text-gray-700 text-sm space-x-1'>
                <a href="/" className={`${location.pathname === '/'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Home</a><IoIosArrowForward />
                <a href="/Blog" className={`${location.pathname === '/Blog'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Blog</a><IoIosArrowForward />
                <a href="/Networks" className={`${location.pathname === '/Networks'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Network</a>
              </div>

              <div className='w-[97%]'>
                <h1 className='py-7 text-5xl font-bold text-gray-900'>Network</h1>
                <p className='text-gray-600 text-lg'>
                Navigate the path to success by building a strong network. Connect with professionals in your industry, attend networking events, and leverage social platforms. Cultivate meaningful relationships, share insights, and stay engaged. A robust network opens doors to opportunities, fosters collaboration, and accelerates personal and career development.
                </p>
              </div>
{/* hhhh */}
              <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Network</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Merle Fisher ● </span> November 28, 2023</p>
            <p className='text-gray-700'>6 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Connect and Thrive: Navigating the Digital Network with Webflow Mastery</h1>
            <p className='text-gray-700'>Nostrum cumque accusamus ut nisi veniam optio expedi.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Digital</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Code</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Crypto</p>
            </div>
          </div>
       </div>
{/* hhhhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img2} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Network</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Dahlia Halvorson ● </span> November 28, 2023</p>
            <p className='text-gray-700'>3 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Webflow Networking 101: Building Powerful Connections for Professional Growth</h1>
            <p className='text-gray-700'>Modi quo nobis quas iure optio doloribus tempore rerum.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Learn</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
            </div>
          </div>
       </div>

       {/* hhhhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img3} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Network</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Dahlia Halvorson ● </span> November 28, 2023</p>
            <p className='text-gray-700'>5 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Webflow Wizardry: A Step-by-Step Tutorial for Business Transformation</h1>
            <p className='text-gray-700'>Nihil facere et rem ad maiores. Modi nostrum accusamus qui qui.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Learn</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Code</p>
            </div>
          </div>
       </div>
           </div>
           <RightSide/>
    </div>
    </div>
   
  )
}
