import React from 'react'
import flower  from '../assets/flower.jpg' 
import f2  from '../assets/f2.jpg' 

export const Banner = () => {
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-star flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'> 
        <div className=' h-full lg-py-40 flex flex-col justify-center lg:items-start items-center text-white'>
            <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome <span className='text-my-magenta-800'>Front-End Developer | UI Enthusiast</span></h1>
            <p> 👋 Hi, I am Welcome! I am passionate about creating visual experiences that resonate with users. 
                With a background in graphic design and a love for clean aesthetics, 
                I bring ideas to life through pixels and vectors.</p>
            
        </div>
        <img src={ f2}   className='rounded-full border-2 w-[400px] h-[190px] p-1 border-my-magenta-800 img-glow' alt='' />
    </div>
  )
}
