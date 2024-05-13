import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
      <div name="home" className="bg-[#0a192f] w-full h-screen">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center">
              <p className='text-pink-600'>Hello, my name is</p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#f1f1f1]'>Abcd Efg Wxyz</h1>
              <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>I'm a frontend developer</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building and designing exceptional UI for your softwares. Currently, I'm working on a React and Tailwind css project.</p>
              <div>
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' >View Work <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' /> </span> </button>
              </div>
          </div>
      </div> 
  )
}

export default Home