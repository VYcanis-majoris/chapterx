import React from 'react';

import Link from 'next/link';

const Cancelled = () => {
  return (
    <div className='cancel-wrapper'>
      <div className='cancel'>
        <h4>Your Order has been Cancelled.</h4>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancelled;
