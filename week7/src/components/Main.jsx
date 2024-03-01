import React, {useState} from 'react'
import {Link}  from 'react-router-dom'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {Products} from '../data.js'
import Header from '../components/Header';

import { useNavigate } from 'react-router-dom';
export default function Main() {
  const navigate = useNavigate()
const [filteredProducts, setFilteredProducts]= useState(Products)
const searchHandler= (e) =>{
  const filteredArray= Products.filter((product)=> product.title.toLowerCase().includes(e.target.value))
  if(filteredArray.length !=0){
    setFilteredProducts(filteredArray)
  }
}
 
  return (
    <>
         <Header showCartButton={true} />
    <div className='w-full relative top-20'> 
      <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3xl font-bold'>RuthZ Shop</h1>
         
          <div className='search flex justify-between items-center px-5 py-2 bg-gray-100 rounded'>
            <input type='text' placeholder='Search product' className='bg-transparent outline-0' onChange={searchHandler}/>
            <button><CiSearch/></button>
          </div>
      </div>
      <div className='flex w-2/4 mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio ut voluptatum quisquam? 
            Dolores, autem ipsa eveniet vitae recusandae aliquam perspiciatis error deserunt,
            Repellat atque maiores, dolores mollitia eos natus impedit odio neque!
          </div>
    <div className="categories w-full flex justify-between px-2 py-20">
       <div className='bg-black text-white px-5 py-2 rounded-full hover:bg-gray-700 drop-shadow-xl'>
        <button onClick={()=>searchHandler}>Watches</button>
       </div>
       <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
        <p>Laptops</p>
       </div>
       <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
        <p>Monitors</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Mouses</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Glasses</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Keyboards</p>
       </div>
       <div className='bg-black text-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Watches</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Laptops</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Monitors</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Mouses</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Glasses</p>
       </div>
       <div className='bg-white px-4 py-2 rounded-full drop-shadow-xl'>
        <p>Keyboards</p>
       </div>
    </div>
    </div>

      <div className='products grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-9 p-5 mx-20 z-20 '>

       {/* map through products and create a card for each one */}
       {filteredProducts && filteredProducts.map((product, index) => {
              return(<>
                <Link to={`/view/${product.id}`}> 
                  
          <div key={index} className='product h-[300px] bg-white drop-shadow-2xl p-2 border'>
          <img src={product.img} alt=" " className='w-full h-[60%] object-cover p-2' />
          <div className='m-2 bg-gray-100 p-2 truncate'>
            <h1 className='text-xl font-semibold'> {product.title}</h1>
            <div className='flex justify-between items-center'>
              <p className='text-xl font-bold'>${product.price}.00</p>
              <CiShoppingCart size={'1.4rem'}/>
            </div>
            <p className='text-sm'>{product.description}</p>
             </div> 
            
        </div>
       
            </Link>
           
        
      </> )
     })}
       
   </div>   
    <div className="flex justify-center">
      <button onClick={() => navigate(`/view/1`)} className="align-center  hover:bg-blue-400 bg-blue-700 text-white font-bold py-2 px-10 my-5  ">Details</button>
    </div> 
   

  
   </>
  );

} 

