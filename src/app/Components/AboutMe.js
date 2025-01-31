import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='grid grid-row-2 justify-center items-center mt-12 px-12 py-4'>
        <div className='flex flex-col items-center'>
        <p className='text-xs'>Get to Know</p> 
        <p className='text-2xl'>About me</p>
        </div>
        <div className='sm:flex place-items-end gap-4 mt-12'>
                <Image
                 className='shrink-1 size-full rounded-3xl'
                 src={'/images/aboutMe.png'}
                 height={200}
                 width={300}
                 alt='AboutMe' 
                 />
    
            <div className='mt-6'>
                <div className='grid grid-cols-2'>
                    <div className=''>
                        <p className='font-bold text-sm'>Experience</p>
                        <p className=''>2+ years</p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className=''>
                        <p className='font-bold text-sm'>Education</p>
                    </div>
                </div>
                <div className='mt-2'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of using Lorem Ipsum is that 
                    it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. Many desktop publishing packages 
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their infancy. 
                    Various versions have evolved over the years, sometimes by accident, 
                    sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
        </div>
    </div>
    // <div className='mt-16'>
    //     <div className=' justify-center items-center content-center bg-blue-500'>
    //         <p className='text-sm '>Get to know</p> <p className='text-2xl'>About me</p>
    //     </div>
    //     <div className='mt-2 sm:flex gap-2'>
    //             <Image
    //             className='shrink-1'
    //             src={'/images/aboutMe.png'}
    //             height={200}
    //             width={300}
    //             alt='AboutMe' 
    //             />
    //         <div className=''>
    //             <p>Experience</p>
    //             <p>2+ years</p>
    //             <p>Frontend Developer</p>
    //             <p className=''>Education</p>
    //             <p>B.Sc. Bachelor Degree</p>
    //             <p className='text-sm'>
    //                 lorem asdad sad asda daasdas da da da dasd rfr ajdhakehdahdk hasdj
    //                 adkalkdj lajdlakjdlkaml ablda dadkjan ij ladlajiodaoieqingoahfoia
    //                 asduiwhrofnahraoijdlafiuahroiajdahfafo adkjahdaioh ahdoiah o
    //                 ajkdahahelanfladnalfhaoi lakjda jdlajad asdas;dka;sk; a;sldka;slrjpoaj
    //                 aksjdaoiwueioaj alsdjaoiuwro aho alsjdonia ueoirau  alksjdnoiauoaji
    //             </p>
    //         </div>
    //     </div>
    // </div>
  )
}

export default AboutMe