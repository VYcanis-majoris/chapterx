import React from 'react';

const form = ({ products, bannerData }) => {
  const handleSubmit = async () => {
    const response = await fetch('/product/cloudinary-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log(data);
  };

  return (
    <div className='form-loc'>
      <div className='form-container'>
        <div className='brand-title'>Enter Details</div>
        <form action='/api/card' method='POST'>
          <div className='inputs'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Enter First Name'
              required
              className='form-input'
            />
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Enter Last Name'
              required
              className='form-input'
            />
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Enter Your Designation/Title'
              required
              className='form-input'
            />
            <label htmlFor='companyName'>Company:</label>
            <input
              type='text'
              id='companyName'
              name='companyName'
              placeholder='Enter Company Name'
              required
              className='form-input'
            />
            <label htmlFor='guestImageUrl'>Image-Url:</label>
            <input
              type='text'
              id='guestImageUrl'
              name='guestImageUrl'
              placeholder='Enter Cloudinary link'
              required
              className='form-input'
            />
            <button type='submit' className='form-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
