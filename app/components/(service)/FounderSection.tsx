import Image from 'next/image'
import React from 'react'

const FounderSection = () => {
  return (
    <main className='min-h-screen flex items-center justify-center  relative'>

  <h1 className="font-archivo font-extrabold tracking-[-0.02em] leading-[10rem] text-[180px] text-center">
        SOFTWARE ENGINEER
      </h1>

      <div className='absolute top-[60%]'>
        <div className='absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse'></div>
         <Image src={'/Personal_Image.jpeg'} height={200} width={200} className='object-colver shadpw-xl  rounded-xl backdrop-blur-2xl'  alt='image' />


      </div>

     

    </main>
  )
}

export default FounderSection