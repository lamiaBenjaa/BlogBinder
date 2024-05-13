import React from 'react'
import img from '../assets/images/8.jpg'
import img2 from '../assets/images/7.jpg'
import img3 from '../assets/images/2.jpg'
import img4 from '../assets/images/1.jpg'
import img5 from '../assets/images/6.jpg'

export default function HomeElement() {
  return (
    <div className=' '>
        {/* ha lwl */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img} alt="" className=' h-[270px] w-full object-cover'/>
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
       {/* ha tani  */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img2} alt="" className=' h-[270px] w-full object-cover'/>
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
       {/* ha talta */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img3} alt="" className=' h-[270px] w-full object-cover'/>
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
       {/* ha rab3a */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img4} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Network</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Merle Fisher ● </span> November 28, 2023</p>
            <p className='text-gray-700'>3 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Connect and Thrive: Navigating the Digital Network with Webflow Mastery</h1>
            <p className='text-gray-700'>Nostrum cumque accusamus ut nisi veniam optio expedi</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Digital</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Code</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Crypto</p>
            </div>
          </div>
       </div>
       {/* ha lkhamssa */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 '>
          <div className='relative col-span-6'>
            <img src={img5} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Tuturials</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Efrain Franey ● </span> November 28, 2023</p>
            <p className='text-gray-700'>3 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Webflow Tools Unveiled: Streamlining Your Business Operations for Efficiency</h1>
            <p className='text-gray-700'>Ipsa et facilis fuga non voluptatem ut aut expedita cupiditate.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Secure</p>
            </div>
          </div>
       </div>
    </div>
  )
}
