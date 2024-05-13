import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../assets/images/8.jpg'
import img2 from '../assets/images/7.jpg'
import img3 from '../assets/images/2.jpg'
import img4 from '../assets/images/1.jpg'
import img5 from '../assets/images/4.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/5.jpg'


export default function Blog() {
  return (
    <div className=''>
      <Header/>
      <h1 className='pt-32 w-[90%] m-auto text-6xl font-extrabold text-gray-900'>All Blogs</h1>
        <div className='grid grid-cols-2 my-10 w-[90%] m-auto'>
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
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img5} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Tutorials</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Aiyana Grant ● </span> November 28, 2023</p>
            <p className='text-gray-700'>3 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Pro Tips Unleashed: Mastering the Art of Business with Webflow Magic</h1>
            <p className='text-gray-700'>Voluptatem officiis vero atque ratione aperiam non.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Tips</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Learn</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Teaching</p>
            </div>
          </div>
       </div>
{/* hhhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img6} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Tutorials</p>
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
{/* hhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 '>
          <div className='relative col-span-6'>
            <img src={img7} alt="" className=' h-[270px] w-full object-cover'/>
            <div className='absolute top-3 right-3'> 
                <p className='text-md px-2 rounded-md text-gray-50 bg-blue-600 '>Network</p>
            </div>
          </div>
          <div className='relative col-span-6 '>
            <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Dahlia Halvorson ● </span> November 28, 2023</p>
            <p className='text-gray-700'>3 Minutes Read</p>
            <h1 className='text-xl font-extrabold text-gray-900 py-3'>Webflow Wizardry: A Step-by-Step Tutorial for Business Transformation</h1>
            <p className='text-gray-700'>Nihil facere et rem ad maiores. Modi nostrum accusamus qui qui.</p>
            <div className='absolute bottom-0 flex justify-start  space-x-2'>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Learn</p>
                <p className='text-gray-50 bg-gray-700 px-2 rounded-md text-[12px] py-[2px]'>Code</p>
            </div>
          </div>
       </div>
        </div>
      <Footer/>
    </div>
  )
}
