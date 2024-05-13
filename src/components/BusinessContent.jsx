import React from 'react'
import RightSide from './RightSide'
import { IoIosArrowForward } from "react-icons/io";
import img from '../assets/images/7.jpg'
import img2 from '../assets/images/8.jpg'

export default function BusinessContent() {
  return (
    <div className='lg:w-[86%] w-[95%] m-auto z-0 pt-48 py-32 xl:py-0 md:pt-32 xl:pt-32'>
       <div className="grid lg:grid-cols-12 gap-6 ">
         <div className='lg:col-span-8'>
         <div className='flex justify-start items-center text-gray-700 text-sm space-x-1'>
                <a href="/" className={`${location.pathname === '/'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Home</a><IoIosArrowForward />
                <a href="/Blog" className={`${location.pathname === '/Blog'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Blog</a><IoIosArrowForward />
                <a href="/Business" className={`${location.pathname === '/Business'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Business</a>
              </div>

              <div className='w-[97%]'>
                <h1 className='py-7 text-5xl font-bold text-gray-900'>Business</h1>
                <p className='text-gray-600 text-lg'>
                   Elevate your business with strategic moves. Define a clear vision, understand your market, and prioritize customer satisfaction. Efficiently manage resources, adapt to market trends, and embrace innovation. Foster a positive company culture, invest in talent, and leverage technology for sustainable growth. A well-rounded business approach ensures resilience and success in today's dynamic market.
                </p>
              </div>
{/* hhhh */}
              <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Business</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Aiyana Grant ● </span> November 28, 2023</p>
            <p className='text-gray-700'>4 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Crafting Success: Business Insights and Webflow Strategies for Modern Entrepreneurs</h1>
            <p className='text-gray-700'>Esse voluptatem cupiditate rerum blanditiis et laboriosam debitis.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Learn</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>International</p>
            </div>
          </div>
       </div>
{/* hhhhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img2} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Business</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Dahlia Halvorson ● </span> November 28, 2023</p>
            <p className='text-gray-700'>2 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Webflow Wonders: Transforming Your Business Landscape in the Digital Era</h1>
            <p className='text-gray-700'>Qui id libero aspernatur et aut. Mollitia quasi consequuntur magnam</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Digital</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
            </div>
          </div>
       </div>
         </div>
           <RightSide/>
       </div>
   </div>
  )
}
