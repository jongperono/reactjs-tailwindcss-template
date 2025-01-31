import React from 'react'

const Experience = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center mt-12'>
            <p className='text-xs'>Explore My</p>
            <p className='text-2xl'>Experience</p>
        </div>
        <div className='flex justify-center mt-6 px-12 p-4'>
            <div className='w-1/2'>
                <div>
                    frontend
                </div>
                <div className='sm:flex flex-wrap gap-6'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>Python</p>
                    <p>React.js</p>
                    <p>Next.js</p>
                </div>    
            </div>
            <div className='w-1/2'>
                <div >
                    backend
                </div>
                <div className='sm:flex flex-wrap gap-6'>
                    <p>Django</p>
                    <p>Node.js</p>
                    <p>MySQL</p>
                    <p>Express</p>
                    <p>NoSQL (MongoDB, Firebase)</p>
                    <p>Postman</p>
                </div>
            </div>
        </div>
    </>
    // <div className='mt-12'>
    //     <div className='flex flex-col justify-center items-center'>
    //         <p>Explore My</p>
    //         <p>Experience</p>
    //     </div>
    //     <div className='sm:flex mx-4 p-6 justify-evenly items-center'>
    //         <div className='w-100 h-100 border border-2'>
    //             <div>Frontend Development</div>
    //             <div className='sm:flex flex-auto gap-2'>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //                 <p>Experience 1</p>
    //             </div>
                
    //         </div>
    //         <div className='mt-4'>
    //             <div>backend Development</div>
    //             <div className='sm:flex flex-auto gap-2'>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //                 <p>Experience 2</p>
    //             </div>
                
    //         </div>
    //     </div>
    // </div>
  )
}

export default Experience