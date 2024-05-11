import React from 'react'
import logo from './../assets/images/blog.png'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
  return (
    
    <div>
    <header class="text-gray-600 body-font text-xl font-semibold shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="" className=' w-52'/>
        </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-8 md:space-x-10">
        <Link to='/'><a className={`${location.pathname === '/'? "  text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Home</a></Link>
        <Link to='/Blog'><a className={`${location.pathname === '/Blog'? "  text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Blog</a></Link>
        <Link to='/Business'><a className={`${location.pathname === '/Business'? " text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Business</a></Link>
        <Link to='/Networks'><a className={`${location.pathname === '/Networks'? " text-blue-500":" hover:text-gray-900 focus:text-blue-500"}`}>Networks</a></Link>
      </nav>
        <Link to='/Contact'><button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded mt-4 md:mt-0 text-gray-50">Contact Us </button></Link>
      </div>
    </header>
    </div>
  )
}
