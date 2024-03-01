import React , { useContext } from 'react'
import { Products } from '../data.js'
import { CartView } from '../components/CartView.jsx'
import { CartContext } from '../components/CartContext.jsx';
export function Cart() {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='ml-[80px]'>
      {Products.map((product) => {
      if(cartItems[product.id] !== 0 ){
        return <CartView data={product}/>
      }

})} 
      </div>
  )
}
