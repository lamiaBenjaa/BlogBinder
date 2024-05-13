import React from 'react'
import RightSide from './RightSide'
import { IoIosArrowForward } from "react-icons/io";
import img from '../assets/images/4.jpg'
import img2 from '../assets/images/6.jpg'

export default function TutorialsContent() {
  return (
    <div className='lg:w-[86%] w-[95%] m-auto z-0 pt-48 py-32 xl:py-0 md:pt-32 xl:pt-32'>
         <div className="grid lg:grid-cols-12 gap-6 ">
           <div className='lg:col-span-8'>
              <div className='flex justify-start items-center text-gray-700 text-sm space-x-1'>
                <a href="/" className={`${location.pathname === '/'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Home</a><IoIosArrowForward />
                <a href="/Blog" className={`${location.pathname === '/Blog'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Blog</a><IoIosArrowForward />
                <a href="/Tutorials" className={`${location.pathname === '/Tutorials'? "  text-blue-500":" hover:text-blue-500 focus:text-blue-500"}`}>Tutorials</a>
              </div>

              <div className='w-[97%]'>
                <h1 className='py-7 text-5xl font-bold text-gray-900'>Tutorials</h1>
                <p className='text-gray-600 text-lg'>
                Empower your learning journey with tutorials. Access a wealth of knowledge through online tutorials covering diverse subjects. Platforms like YouTube, Coursera, and Khan Academy offer step-by-step guides, enhancing your skills in areas from coding to creative arts. Engage with interactive content, practice consistently, and leverage tutorials as a valuable resource for continuous self-improvement and expertise development.
                </p>
              </div>
{/* hhhh */}
              <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img} alt="" className=' h-[270px] w-full object-cover'/>
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
{/* hhhhhh */}
       <div className='grid grid-cols-12 gap-6 w-[96%] py-10 border-b-2 border-blue-gray-100'>
          <div className='relative col-span-6'>
            <img src={img2} alt="" className=' h-[270px] w-full object-cover'/>
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
           </div>

           <RightSide/>
    </div>
    </div>
  )
}
