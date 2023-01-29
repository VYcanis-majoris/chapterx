import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2> Thank you for your Order!</h2>
        <p className='email-msg'>Check your Email Inbox for the Receipt</p>
        <p className='description'>
          If you have any quesitons, please email:
          <a className='email' href='mailto: order@chapterx.com'>
            order@chapterx.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
