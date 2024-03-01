import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import  { Slide, Fade, Zoom } from 'react-slideshow-image'; 
import prof from '../assets/prof.jpg'
import monitor from '../assets/monitor.jpg'
import leatherWatch from '../assets/leatherWatch.jpg'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.jpg'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate()
  const slideimages=[{url: i1, caption: 'Seamless Shopping at Your Fingertips: Order Anywhere, Anytime!'},
                   {url: i2, caption: 'Unlock Your Potential: Navigate the Digital Realm with Ease'},
                   {url: i3, caption: 'Get 20% Discount  on your first order'}];

   return(
    <> 
     <Header showCartButton={true} />
    <div className='slide-container mt-0'>
      <Fade>
        {slideimages.map((image,index) => (
          <div key={index}>
          <div className='relative h-[550px] bg-cover' style={{backgroundImage:`url(${image.url})`}}>
  <span className="absolute left-0 bottom-0 p-4 text-white text-3xl font-bold bg-black bg-opacity-50">{image.caption}</span>
</div>

          </div>
        ))}
      </Fade>
    </div> 
     <div className='flex justify-center mt-10'>
    <h1 className='font-bold text-4xl'>Categories</h1>
    </div> 
    <div className='flex justify-center mt-5 '>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       </div>
       <div className='flex justify-center '>
     <p>ipsum dolor sit amet consectetur adipisicing. </p>
       </div>

       <div className="flex justify-center">
      <button onClick={() => navigate('/products')} className="align-center bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-10 my-5  ">Browse</button>
    </div>

    <div className='categories grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-9 p-5 z-20 mx-20 '>
    <img src={prof } alt=" " className='w-full h-[60%] object-cover p-2' />
    <img src={leatherWatch} alt=" " className='w-full h-[60%] object-cover p-2' />
    <img src={monitor } alt=" " className='w-full h-[60%] object-cover p-2' />
     </div>
 



     <div className='flex justify-center my-10'>
    <h1 className='font-bold text-4xl'>Our latest arrivals</h1>
    </div> 
    <div className='flex justify-center mt-5 '>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       </div>
       <div className='flex justify-center '>
     <p>ipsum dolor sit amet consectetur adipisicing. </p>
       </div>
 
       <div className="flex justify-center">
      <button onClick={() => navigate('/products')} className="align-center bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-10 my-5  ">Browse</button>
    </div>

    <div className='categories grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-9 p-5 z-20 mx-20 '>
    <img src={prof } alt=" " className='w-full h-[100%] object-cover p-2 mt-10' />
    <img src={leatherWatch} alt=" " className='w-full h-[100%] object-cover p-2' />
    <img src={monitor } alt=" " className='w-full h-[100%] object-cover p-2 mt-10' />
     </div>


     <div className='flex justify-center mt-20'>
    <h1 className='font-bold text-4xl'>Our Products</h1>
    </div> 
    <div className='flex justify-center mt-5 '>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       </div>
       <div className='flex justify-center '>
     <p>ipsum dolor sit amet consectetur adipisicing. </p>
       </div>

       <div className="flex justify-center">
      <button onClick={() => navigate('/products')} className="align-center bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-10 my-5  ">More</button>
    </div>

    <div className='categories grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-9 p-5 z-20 mx-20 '>
    <img src={prof } alt=" " className='w-full h-[60%] object-cover p-2' />
    <img src={leatherWatch} alt=" " className='w-full h-[60%] object-cover p-2' />
    <img src={monitor } alt=" " className='w-full h-[60%] object-cover p-2' />
     </div>
   </>
   )
  }