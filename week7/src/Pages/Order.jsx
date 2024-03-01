import React from 'react'
import Header from '../components/Header';

export function Order() {
  return (
    <>
      <Header showCartButton={false} />  
    <div className=' mt-20 ml-[100px] mb-5 text-4xl'>Bought Items </div>
      <div className='grid grid-cols-2 mx-20'>
        
        <div className='flex justify-between p-4 m-5 bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>

        <div className='flex justify-between p-4 m-5 bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>

        <div className='flex justify-between p-4 m-5  bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>

        <div className='flex justify-between p-4 m-5 bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>

        <div className='flex justify-between p-4 m-5 bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>

        <div className='flex justify-between p-2 m-5 bg-gray-300'>
        <h1 className=' '> Sun Glasses</h1> 
        <p>$40.00</p>
        </div>
      </div>   
       <div  className='flex mt-20 text-xl justify-center'>You have successfully bought the above products. Thank you for choosing RuthZ Shop!!!</div>
    
       <hr className="px-5 my-10  bg-gray-800"/>

<footer className='w-full left-0 flex justify-center items-center h-16 bg-gray-800 text-white'>
<p>&copy; 2024 RuthZ Shop. All rights reserved.</p>
</footer>

   </>
  )
}
