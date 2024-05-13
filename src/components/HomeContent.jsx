import React from 'react'
import { Carousel} from "@material-tailwind/react";
import img1 from '../assets/images/8.jpg'
import img2 from '../assets/images/1.jpg'
import HomeElement from './HomeElement';
import RightSide from './RightSide';


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
          <RightSide/>
       </div> 
    </div>
  )
}
