import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    // console.log(name,github);
    useEffect(() => {
        AOS.init();
      }, [])
    const { name, shortDescription, technologies, github, link } = props.data
    return (
        <div className='bg-white h-[25rem] ml-3 text-center m-auto space-y-2 w-[22rem] md:h-[19rem] md:w-[18rem] px-1 shadow-lg mt-1 shadow-fuchsia-700 rounded-md'>
            <div className='w-full'>
                <h2 style={{ fontFamily: 'sans' }} className='text-center text-lg font-extrabold text-gray-900 border-b border-gray-600 rounded-md w-full'>{name}</h2>
            </div>
            <p className='text-center font-bold h-[5rem] p-1'>{shortDescription}</p>
            <div className='h-[8rem]'>
                <div style={{fontFamily:'serif'}} className='text-lg font-extrabold text-center px-2 md:flex space-x-2 text-fuchsia-700'>Tech: <div className='md:flex md:flex-wrap mt-[3px] space-x-1 items-center justify-left'>{technologies.map((item,index)=>{
                            return <p className='text-black text-base font-bold'>{item},</p>
                })}</div></div>
            </div>

            <div className='flex justify-around my-4'>
                        <a href={github} target="_blank" className='bg-blue-600 hover:bg-blue-700 px-2 py-1 md:px-2 md:py-0.5 text-white rounded-md font-bold'>Github</a>
                        <a href={link} target="_blank" className='border border-black  text-black p-1 md:p-1 rounded-md font-bold hover:bg-green-600 hover:text-white'>Open Project</a>
            </div>

        </div>
    )
}

export default ProjectCard
