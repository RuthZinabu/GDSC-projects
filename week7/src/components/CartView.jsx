import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext.jsx';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const CartView = (props) => {
  const navigate = useNavigate();
  const { img, title, description, price, id } = props.data;
  const { cartItems, getTotalCartAmount, removeFromCart  } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  
  console.log('Cart Items:', cartItems);
  console.log('Total Amount:', totalAmount);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  return (
    <>
      <Header showCartButton={false} />
      <h1 className='mt-20 font-bold text-2xl'>Your Cart</h1>
   
     {parseInt({totalAmount}) === 0 ? (  <h1>Your Cart is Empty!</h1>
   ) : (
  

        <div className='grid grid-cols-2 mb-40'>
          <div className='column h-[150px] w-[500px] '>
            <button onClick={() => navigate('/products')} >Not ready to checkout? <span className='underline hover:underline-offset-8'>Continue Shopping</span></button>
            <div className='flex '>
              <div><img src={img} /></div>
              <div className='ml-3'>
                <p className='font-bold text-xl mt-3'>{title} </p>
                <p>size: L </p>
                <p>Quantity: {cartItems[id]}</p>
                <div className='flex justify-between'>
                  <div className='pr-[200px] font-bold text-xl'>${price}</div>
                  <button className='px-2 py-[2px] underline hover:underline-offset-8 ' onClick={() => handleRemoveFromCart(id)}>remove</button>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className='column h-[150px]   w-[500px]  '>
            <p className='font-bold text-xl mt-9 mb-[60px]'>Order summary</p>
            <div className='flex justify-between  mb-1'>
              <div>Subtotal</div>
              <div>${totalAmount}</div>
            </div>

            <div className='flex justify-between  mb-2'>
              <div>Shipping</div>
              <div>calculated at the next step</div>
            </div>
            <hr className=' bg-black' />
            <div className='flex justify-between my-3'>
              <div>Total</div>
              <div>${totalAmount}</div>
            </div>
            <button className='bg-black text-white px-40 py-2' onClick = {() => navigate('/order')}>Continue to checkout</button>
          </div>
        </div>
   
      )}


  </>
  );
 
};
