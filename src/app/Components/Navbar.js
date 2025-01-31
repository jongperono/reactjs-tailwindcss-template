import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-black p-5 gap-5  justify-end items-center'>
        <div className='hidden sm:flex gap-6 '>
            <div className='text-xl hover:underline '>About</div>
            <div className='text-xl hover:underline'>Experience</div>
            <div className='text-xl hover:underline'>Projects</div>
            <div className='text-xl hover:underline'>Contact</div>
            
        </div>

        <div className=' grid cursor-pointer gap-2  sm:hidden'>
        <span className='bg-gray-300 h-2 w-10 border bottom-2 rounded-md'></span>
        <span className='bg-gray-300 h-2 w-10 border bottom-2 rounded-md'></span>
        <span className='bg-gray-300 h-2 w-10 border bottom-2 rounded-md'></span>
        </div>
    </div>
  )
}

export default Navbar