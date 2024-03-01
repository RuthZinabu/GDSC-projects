 import { useState } from 'react'
import { Home } from './Pages/Home'
import { Products } from './Pages/Products'
import {Cart} from './Pages/Cart'
import {View} from  "./Pages/View";
import {Order} from  './Pages/Order';
import { CartProvider  } from './components/CartContext.jsx';
import Header from './components/Header';
import {Footer} from './components/Footer';

//react router dom
import{
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Outlet,
   Route
}from 'react-router-dom'

 function App() {
  const router=createBrowserRouter(
      createRoutesFromElements(
       
        <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view' element={<View />} />
        <Route path='/view/:productId' element={<View />} />
        <Route path='/order' element={<Order />} />
        </Route>
       
      )
  )
  return (
     <div className='App'>
      < CartProvider >
        <RouterProvider router={router}/>
      </CartProvider >
      </div>   
  )
}

export default App;
const Root=()=>{
  return(
    <>
    {/* <div><Header/></div> */}
    <div><Outlet/></div>
    <div><Footer/></div>
    </>
  )
}
