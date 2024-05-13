import React from 'react'
import { Carousel} from "@material-tailwind/react";
import img1 from '../assets/images/8.jpg'
import img2 from '../assets/images/1.jpg'
import HomeElement from './HomeElement';
import logo from '../assets/images/blog2.png'
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import img3 from '../assets/images/4.jpg'
import img4 from '../assets/images/5.jpg'
import img5 from '../assets/images/6.jpg'
import img6 from '../assets/images/ferrari.jpg'


export default function HomeContent() {
  return (
    <div className='lg:w-[86%] w-[95%] m-auto z-0 pt-48 py-32 xl:py-0 md:pt-32 xl:pt-32'>
       <div className="grid lg:grid-cols-12 gap-6">
          <div className='lg:col-span-8'>
          <Carousel transition={{ duration: 1 }} className="w-[98%] max-h-[450px] lg:max-h-[570px]">
            <div className='relative h-full w-full'>
              <img src={img1} alt="image 1" className="relative h-full w-full object-cover"/>
              <div style={{backgroundColor:'rgba(2, 33, 64, 0.5)'}} className='absolute inset-0 bg-opacity-40 hover:bg-blue-gray-900 hover:bg-opacity-60 duration-500'>
                  <div className='text-white pl-16 pt-[20%] space-y-3'>
                     <h1 className='text-gray-100 text-md'>By Dahlia Halvorson  ●  November 28, 2023</h1>
                     <p className='w-[90%] text-4xl font-bold'>Webflow Wonders: Transforming Your Business Landscape in the Digital Era</p>
                     <p className='text-lg'>Qui id libero aspernatur et aut. Mollitia quasi consequuntur magnam</p>
                  </div>
                  <div className='absolute top-3 right-3'> 
                     <p className='text-lg px-3 rounded-md text-gray-50 bg-blue-600 '>Business</p>
                  </div>
              </div>
            </div>
            <div className='relative h-full w-full'>
              <img src={img2} alt="image 2" className="relative h-full w-full object-cover"/>
              <div style={{backgroundColor:'rgba(2, 33, 64, 0.5)'}} className='absolute inset-0 bg-opacity-40 hover:bg-blue-gray-900 hover:bg-opacity-60 duration-500'>
                  <div className='text-white pl-16 pt-[20%] space-y-3'>
                     <h1 className='text-gray-100 text-md'>By Merle Fisher  ●  November 28, 2023</h1>
                     <p className='w-[90%] text-4xl font-bold'>Connect and Thrive: Navigating the Digital Network with Webflow Mastery</p>
                     <p className='text-lg'>Nostrum cumque accusamus ut nisi veniam optio expedi.</p>
                  </div>
                  <div className='absolute top-3 right-3'> 
                     <p className='text-lg px-3 rounded-md text-gray-50 bg-blue-600 '>Business</p>
                  </div>
              </div>
            </div>
          </Carousel>
          <HomeElement/>
          </div>    
          <div className=' lg:col-span-4 w-full relative'>
               <div className='pb-6 lg:border-b-2 border-gray-400 '>
                <div className='p-8 space-y-4 bg-gray-300 mx-3 lg:mx-0'>
                   <img src={logo} alt="" className=' w-56'/>
                    <p className='font-semibold text-gray-800'>Explore our curated content hub for blogs and articles. Enjoy a delightful reading experience with fresh perspectives designed to inform and entertain readers globally.</p>
                    <p className='flex space-x-4 text-2xl text-gray-900'>
                    <FaFacebookSquare />
                    <RiTwitterXLine />
                    <FaSquareInstagram />
                    <FaLinkedin />
                    <IoMdMail />
                    </p>
                </div>
                   
               </div>

               <div className='py-6 '>
                 <h1 className='text-xl font-extrabold text-gray-900'>Featured Posts</h1>
                 {/* lwla */}
                 <div className='grid grid-cols-3 gap-5 border-b-2 py-7 border-gray-400'>
                     <div className='col-span-1'>
                          <img src={img3} alt="" />
                     </div>
                     <div className='col-span-2'>
                        <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Aiyana Grant ● </span> November 28, 2023</p>
                        <h1 className='text-xl font-extrabold lg:text-[16px] text-gray-900 leading-6'>Pro Tips Unleashed: Mastering the Art of Business with Webflow Magic</h1>
                     </div>
                 </div>
                 {/* tanya */}
                 <div className='grid grid-cols-3 gap-5 border-b-2 py-7 border-gray-400'>
                     <div className='col-span-1'>
                          <img src={img4} alt="" />
                     </div>
                     <div className='col-span-2'>
                        <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Aiyana Grant ● </span> November 28, 2023</p>
                        <h1 className='text-xl font-extrabold lg:text-[16px] text-gray-900 leading-6'>Pro Tips Unleashed: Mastering the Art of Business with Webflow Magic</h1>
                     </div>
                 </div>
                {/* talta */}
                 <div className='grid grid-cols-3 gap-5 border-b-2 py-7 border-gray-400'>
                     <div className='col-span-1'>
                          <img src={img5} alt="" />
                     </div>
                     <div className='col-span-2'>
                        <p className='text-gray-700'>By <span className='text-gray-800 font-bold'>Aiyana Grant ● </span> November 28, 2023</p>
                        <h1 className='text-xl font-extrabold lg:text-[16px] text-gray-900 leading-6'>Pro Tips Unleashed: Mastering the Art of Business with Webflow Magic</h1>
                     </div>
                 </div>


                 {/* ---------------------------------------------------- */}


                 <div className='py-8 space-y-3 border-b-2 border-gray-400'>
                    <h1 className='font-bold text-2xl text-gray-900'>Explore More Categories</h1>
                    <div className='bottom-0 flex justify-start  space-x-2'>
                      <p className='text-gray-50 bg-gray-700 px-3 rounded-md py-1'>Network</p>
                      <p className='text-gray-50 bg-gray-700 px-3 rounded-md py-1'>Business</p>
                      <p className='text-gray-50 bg-gray-700 px-3 rounded-md py-1'>Tutorials</p>
                    </div>
                 </div>
               </div>

               <div className='pb-6 lg:border-b-2 border-gray-400 '>
                <div className='p-8 space-y-4 bg-gray-300 mx-3 lg:mx-0'>
                    <p className='font-bold text-gray-900 text-[21px]'>Join Us and Let’s Explore Together</p>
                    <p className='text-gray-900 text-md font-semibold'>Subscribe now for exclusive content and expert insights. Be the first to stay informed!</p>
                    <button className='bg-blue-600 text-gray-50 px-4 py-2 rounded-sm text-lg'>SUBSCRIBE</button>
                </div>
               </div>
               <div className='sticky top-0 bg-white pt-24 pb-14 space-y-4'>
                  <h1 className='font-bold text-2xl text-gray-800 '>Sponsored Ad</h1>
                  <div className='relative h-56 w-full'>
                     <img src={img6} alt="image 1" className="h-full w-full object-cover"/>
                     <div className='absolute bg-gray-900 bg-opacity-40 inset-0 hover:bg-blue-gray-900 hover:bg-opacity-60 duration-500'>
                     <div className='text-gray-200 px-7 lg:pt-[30%] pt-[20%] space-y-3'>
                        <p className='text-2xl font-bold'>Unlock growth potential with our state-of-the-art solutions.</p>
                     </div>
              </div>
            </div>
               </div>
          </div>
       </div> 
    </div>
  )
}
