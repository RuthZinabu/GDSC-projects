import React from 'react';
import { HiOutlineMenuAlt2, HiOutlineHome } from 'react-icons/hi';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export default function Header({ showCartButton }) {
  return (
    <div className='fixed top-0 left-0 w-screen bg-white shadow-md bg-opacity-[0.8] z-10'>
      <header className='flex justify-between items-center p-3'>
        <div>
          <h1 className='text-xl font-bold'>RZ</h1>
        </div>

      <ul className='flex justify-between '>
        {/* <li className='px-3' >
      <button>
          <HiOutlineMenuAlt2 size='1.5rem' />
        </button>
</li> */}
        <li className='px-3 font-bold hover:text-gray-300' >
          <NavLink to='/' >
            Home
          </NavLink>
        </li>
        <li className='px-3 font-bold  hover:text-gray-300'  >
          <NavLink to='/products' >
          Products
          </NavLink>
        </li>

        <li  className='px-3 font-bold  hover:text-gray-300 '>
          <NavLink to='/view/1'>
         View
          </NavLink>
        </li>

        {showCartButton && (
            <li className='px-3 font-bold hover:text-gray-300'>
              <NavLink to='/cart'>
                Cart
              </NavLink>
            </li>
          )}

        <li className='px-3 font-bold  hover:text-gray-300'>
          <NavLink to='/order'>
            Order
          </NavLink>
        </li>
       
      {/* <li className='px-3'>
          <NavLink to='/cart' activeClassName='text-blue-500'>
            <CiShoppingCart size='1.5rem' />
          </NavLink>
        </li> */}
 </ul>
      </header>
    </div>
  );
}
