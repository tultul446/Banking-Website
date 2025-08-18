import React from 'react'
import { NavLink, Link } from 'react-router';
import MobileMenu from './MobileMenu'


const Navbar = () => {
  return (
    <navbar clasName="relative w-full m-0 p-0">
       <img src="../abstractleft.png
       " alt="" />
     <div className='hidden md:flex -top-0 absolute mt-5 bg-gray-900/50 w-auto xl:left-15 left-1 right-4 xl:right-15 items-center text-center justify-between px-6 py-4'>
      <img src="../Logo.png" alt="" />


<div className=''>
<span className='space-x-4 '>
      <NavLink to="/" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
        <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full bg-gray-800 hover:bg-green-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
        Home
        </span>
        </NavLink> 

      <NavLink to="/CareersPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
        
         <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full  hover:bg-green-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
        
        Careers
        </span>
        </NavLink>

      <NavLink to="/AboutPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
})}>
 <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full  hover:bg-green-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
  About</span>
  </NavLink>

      <NavLink to="/SecurityPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
         <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full  hover:bg-green-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
        Security
        </span>
        </NavLink>

     

    </span>


</div>

<div className="flex md:space-x-2 xl:space-x-4">
   <NavLink to="/LoginPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
         <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full bg-lime-800 hover:bg-lime-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
        Login</span>
        </NavLink><br/>


      <NavLink to="/SignUpPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
         <span className='xl:px-4 md:px-2 md:py-1 md:text-sm xl:py-2 rounded-full bg-lime-800 hover:bg-lime-700 transition-colors duration-300 active:bg-green-900 hover:text-gray-800'>
        SignUp</span></NavLink>
</div>

      </div> 
      <div>
        <MobileMenu />
      </div>
    </navbar>
  )
}

export default Navbar


