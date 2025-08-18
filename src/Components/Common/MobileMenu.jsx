import React, { useState } from 'react'
import { NavLink } from 'react-router';

import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const MobileMenu = () => {
  const [menuOpen, setMenuOpen ] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen)



  return (
   <div className='relative w-full m-0 p-0 '>
    <div className='md:hidden   justify-between flex items-center    absolute  px-4  -mt-[250px]'>
 <img src="../Logo.png" alt="" className=''/>

 {/* Hamburger Menu Button */}
      <div className='text-white ml-36'>
         <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={30} /> : < FiAlignJustify  size={30} />}
          </button>
      </div>
    </div>
    

    {/* Mobile Menu */}
{menuOpen && (
  <div className='md:hidden   shadow-lg  px-5  py-2 ml-16 mr-16 text-center absolute z-50 -top-0 '>

 <span className='space-y-4  '>
      <NavLink to="/" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>
       
        Home</NavLink> <br/>

      <NavLink to="/CareersPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>Careers</NavLink><br/>

      <NavLink to="/AboutPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
})}>About</NavLink><br/>

      <NavLink to="/SecurityPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>Security</NavLink><br/>

      <NavLink to="/LoginPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>Login</NavLink><br/>


      <NavLink to="/SignUpPage" style={( {isActive}) => ({
        color:isActive ? 'lime' : 'white',
      })}>SignUp</NavLink>

    </span>
  </div>
)}

   </div>

  )
}

export default MobileMenu;











