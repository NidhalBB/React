import React  , {useState} from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
  const [nav , setNave] = useState(false);
  const handlClick = () =>setNave(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>
      {/*menu*/}
      <ul className='hidden md:flex'>
        <li> Home </li>
        <li> About </li>
        <li> Skilles </li>
        <li> Work </li>
        <li> Contact </li>
      </ul>

      <div onClick ={handlClick} className ='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>



      <ul  className={!nav ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li> Home </li>
        <li> About </li>
        <li> Skilles </li>
        <li> Work </li>
        <li> Contact </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}