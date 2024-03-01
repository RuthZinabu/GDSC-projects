import React, { useContext } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { CartContext } from './CartContext.jsx';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


export const ProductView  = (props) => {
  const navigate = useNavigate();
   const { cartItems,addToCart, removeFromCart, getTotalCartAmount} = useContext(CartContext)
  const {img, title, description, price, id } = props.data;
const totalAmount = getTotalCartAmount()

  let cartItemQuantity = cartItems[id]


    return( 
         <>
   <Header showCartButton={true} />
        <div   className='product lg:flex block h-[700px] w-[580px] lg:w-[1183px] lg:h-[500px] bg-white drop-shadow-2xl p-2 border justify-between mt-20 mx-20'>
                 <img src={img} alt="" className=' sm:h-[200px] h-[400px] w-[400px] object-cover p-2' />
          <div className='m-2 bg-gray-100 p-2 truncate'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex justify-between items-center'>
              <p className='text-xl font-bold'>${price}.00</p>
              <CiShoppingCart size={'1.4rem'}  onClick = {() => navigate('/cart')}/>
            </div>
            <p className='text-sm text-wrap mb-20'>{ description}</p>
           Size 
            <div className='flex  '>
              <div className='border-2 border-black p-2 px-4 m-3'> S</div>
              <div className='border-2 border-black p-2 px-4 m-3'> M</div>
              <div className='border-2 border-black p-2 px-4 m-3'> L</div>
                </div>
                <div className='flex '>
                <button className='  bg-cyan-400 px-[150px] py-3 m-2' onClick={() => addToCart(id)}>
                  Add to Cart -${totalAmount}
                </button> 
         
              <div className='   '>  
               Quantity
               <div className='flex border-2 border-black w-[85px]'>
              <button className='px-2 py-[2px]' onClick={() => removeFromCart(id)}>-</button>
                <div className='px-2 py-[2px]'>{  <>{cartItemQuantity}</>}</div>
                <div className='px-2 py-[2px]'  onClick={() => addToCart(id)}>+</div>
                </div>
              </div>
                 </div>
             </div>
       </div>

       </>  
      
       )
}

