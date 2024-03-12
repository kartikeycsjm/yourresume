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
            <div id="overview" className='mt-5 p-2 border-black w-[90%] min-h-[100px] border flex justify-start flex-col'>
                <h1 className='underline text-'>Overview</h1>
                <p className='text-[12px]'>Dedicated and forward-thinking Computer Science Engineering student with a passion for creating innovative
                    solutions through web development. Seeking an entry-level position as a web developer to leverage a solid foundation
                    in programming, problem-solving skills, and a collaborative mindset. Eager to contribute to a dynamic team and
                    embark on a fulfilling career in the ever-evolving field of technology</p>
            </div>
            <div id="overview" className='mt-5 p-2 border-black w-[90%] min-h-[100px] border flex justify-start flex-col'>
                <h1 className='underline text-'>Technical Skills</h1>
                <ul className='list-disc'>
                    <li>h</li>
                </ul>
                <p className='text-[12px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga sed pariatur aliquam neque corporis sunt accusantium blanditiis architecto numquam quos officiis voluptate quam quas voluptatum, doloremque accusamus at quod? Blanditiis.</p>
            </div>
        </div>
    )
}

export default page