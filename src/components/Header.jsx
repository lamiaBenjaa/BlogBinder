import React from 'react'
import logo from './../assets/images/blog2.png'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
  return (

    <header class="text-gray-600 body-font z-10 bg-white bg-opacity-85 text-xl font-semibold shadow-md fixed top-0 left-0 right-0" style={{backdropFilter:'blur(5px)'}}>
      <div className="w-[90%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex items-center text-gray-900 mb-4 md:mb-0">
           <Link to='/'><img src={logo} alt="" className=' w-52'/></Link>
        </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-6 md:space-x-7 lg:space-x-10 xl:space-x-12">
        <Link to='/Blog'><a className={`${location.pathname === '/Blog'? "  text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Blog</a></Link>
        <Link to='/Networks'><a className={`${location.pathname === '/Networks'? " text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Networks</a></Link>
        <Link to='/Business'><a className={`${location.pathname === '/Business'? " text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Business</a></Link>
        <Link to='/Tutorials'><a className={`${location.pathname === '/Tutorials'? " text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Tutorials</a></Link>
      </nav>
        <Link to='/Contact'><button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded mt-4 md:mt-0 text-gray-50">Contact Us </button></Link>
      </div>
    </header>
  )
}
