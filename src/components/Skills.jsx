import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-[#4c9c72]'>// These are the technologies I have worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactJS} alt='ReactJS icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills

// ashdjshadka