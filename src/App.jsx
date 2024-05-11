import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Business from './pages/Business'
import Networks from './pages/Networks'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Blog' element={<Blog/>}/>
         <Route path='/Business' element={<Business/>}/>
         <Route path='/Networks' element={<Networks/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
