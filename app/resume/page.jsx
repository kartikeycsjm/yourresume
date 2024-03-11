import React from 'react'

const page = () => {
    return (
        <div className='w-[595px] h-[842px] bg-green-100 flex justify-start items-center flex-col'>
            <div id="header" className='w-[90%] mt-[3%] h-[100px] border-black border-b-2'>
                <h1 className='underline text-[36px] text-center'>Kartikey Mishra</h1>
                <div id="links" className='flex justify-center items-center'>
                    <span> kartikeymgkp@gmail.com </span>
                    |
                    <span> +91 7084651619 </span>
                    |
                    <span> GITHUB </span>
                    |
                    <span> PORTFOLIO </span>
                </div>
            </div>
            <div id="content">
                <div id="overview" className='border-black w-[90%] h-[100px] flex justify-start items-center'>
                    <h1>Overview</h1>
                </div>
            </div>
        </div>
    )
}

export default page