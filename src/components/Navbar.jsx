import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)
    const handleClick = () => setNavVisible(prevState => !prevState)

    return (
        <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232345] text-gray-300'>
            <div>
                <img 
                    src={Logo} 
                    alt='logo' 
                    style={{ width: '50px'}}
                />
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10 p-2'>
                {navVisible ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={navVisible ? "absolute top-0 left-0 w-full h-screen bg-[#232345] flex flex-col justify-center items-center" : "hidden"}>
                <li className='py-3 my-3 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-3 my-3 text-4xl' onClick={handleClick}>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-3 my-3 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-3 my-3 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className='py-3 my-3 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div className="hidden lg:flex flex-column fixed top-[35%] left-0">
                <ul>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href=''>LinkedIn <FaLinkedin size={30}/> </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#232323]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href=''>Github <FaGithub size={30}/> </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#48746a]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href=''>Email <HiOutlineMail size={30}/> </a>
                    </li>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f69]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href=''>Resume <BsFillPersonLinesFill size={30}/> </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar