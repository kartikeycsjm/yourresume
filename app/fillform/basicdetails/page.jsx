'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  let router=useRouter();
  const save=()=>{
    router.push('/fillform/objective')
  }
  return (
    <div className='w-full h-screen flex justify-center flex-col items-center bg-[rgba(0,0,0,0.9)]'>
      <div id="name" className='w-[90%] h-[120px] flex justify-center flex-col md:w-[600px] items-center m-2'>
        <input
          type="text" placeholder='Your Full Name'
          className='w-[80%] h-[50px] p-4 rounded'
        />
      </div>
      <div id="name" className='w-[90%] h-[120px] flex justify-center flex-col md:w-[600px] items-center m-2'>
        <input
          type="text" placeholder='Your Email'
          className='w-[80%] h-[50px] p-4 rounded'
        />
      </div>
      <div id="name" className='w-[90%] h-[120px] flex justify-center flex-col md:w-[600px] items-center m-2'>
        <input
          type="text" placeholder='Your Phone number'
          className='w-[80%] h-[50px] p-4 rounded'
        />
      </div>
      <div id="name" className='w-[90%] h-[120px] flex justify-center flex-col md:w-[600px] items-center m-2'>
        <input
          type="text"
          placeholder='Personal Portfolio Link'
          className='w-[80%] h-[50px] p-4 rounded'
        />
      </div>
      <button onClick={save}
      className='border border-blue-700 text-[40px] text-blue-700 px-2'>Next</button>
    </div>
  )
}

export default page