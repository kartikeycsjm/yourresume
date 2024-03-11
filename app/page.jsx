'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-[rgba(0,0,0,0.8)] flex justify-center 
    items-center flex-col'>
      <Link href={'/fillform/basicdetails'} className='text-white bg-[#000625] p-4'>Start Filling Form</Link>
    </div>
  )
}
export default page