'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  let router=useRouter();
  const save=()=>{
    router.push('/fillform/skills')
  }
  return (
    <div className='w-full h-screen flex justify-center flex-col items-center bg-[rgba(0,0,0,0.9)]'>
      <div id="name" className='w-[90%] flex justify-center flex-col md:w-[600px] items-center m-2'>
        <textarea name="" id="" cols="30" rows="10"
        placeholder='career objective'
        className='p-3 resize-none w-[90%] h-[200px]'
        ></textarea>
      </div>
      <button onClick={save}
      className='border border-blue-700 text-[40px] text-blue-700 px-2'>Next</button>
    </div>
  )
}

export default page