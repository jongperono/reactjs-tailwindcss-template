import React from 'react'
import Image  from "next/image";

const Profile = () => {
  return (
    <div className='justify-start items-center gap-16 mt-2 mx-2 p-2'>
        <div className='flex justify-center gap-5 mt-20'>
            <div className=''>
                <Image src='/images/profile.jpg'
                alt='Profile'
                width={600}
                height={600}
                className='rounded-full'
                />
            </div>
            <div className= 'content-end '>
                <p className='text-xs content-center'>Hello! I'm</p>
                <h1 className='text-3xl'>John Doe</h1>
                <p className='text-xl'>Frontend Developer</p>
                <div className='flex gap-2'>
                    <div className='border border-4 px-6 py-2 rounded-2xl text-sm'>Download</div>
                    <div className='bg-gray-400 border border-4 px-6 py-2 rounded-2xl bg text-sm'>Contact Info</div>
                </div>
                <div className='flex gap-2 justify-center text-sm mt-2'>
                    <div className=''>
                    <Image 
                    className='rounded-full'
                    src={'/images/linkedIn.png'}
                    height={20}
                    width={30}
                    alt='linkedIn'
                    />
                    </div>
                    <div>
                    <Image 
                    className='rounded-full'
                    src={'/images/github.png'}
                    height={20}
                    width={30}
                    alt='github'
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile