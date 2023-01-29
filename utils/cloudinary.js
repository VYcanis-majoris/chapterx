import { v2 as cloudinary } from 'cloudinary';
import { BsTextCenter } from 'react-icons/bs';
import React from 'react';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getNamesTransformations = (firstName, lastName) => [
  {
    overlay: {
      font_family: 'Open Sans',
      font_size: '20',
      font_weight: '500',
      text: firstName,
      text_align: 'center',
    },
    width: '200',
    color: '#ffffff',
    y: '-50',
    x: '375',
    crop: 'fit',
    gravity: 'center',
  },
  {
    overlay: {
      font_family: 'Open Sans',
      font_size: '20',
      font_weight: '500',
      text: lastName,
      text_align: 'center',
    },
    width: '200',
    color: '#ffffff',
    y: '-50',
    x: '445',
    crop: 'fit',
    gravity: 'center',
  },
];

const gettitleTransformations = (title) => {
  return [
    {
      overlay: {
        font_family: 'Sacramento',
        font_size: '35',
        font_weight: '500',
        text: title,
        text_align: 'center',
      },
      width: 500,
      color: '#ffffff',
      y: '100',
      x: '400',
      crop: 'fit',
    },
  ];
};

const getGuestImageTransformation = (guestImageName) => ({
  overlay: `${guestImageName}`,
  height: '100',
  width: '100',
  y: '-30',
  x: '250',
  gravity: 'center',
  radius: 'max',
  crop: 'fill',
  border: '4px_solid_rgb:ffffff',
});

const uploadGuestProfilePic = async (guestName, guestImageUrl) => {
  const guestImageName = guestName.replace(' ', '-');
  await cloudinary.uploader.upload(guestImageUrl, {
    public_id: `${guestImageName}`,
  });
  return guestImageName;
};

const getCompanyNameTransformations = (companyName) => {
  return [
    {
      overlay: {
        font_family: 'Open Sans',
        font_size: '20',
        font_weight: '500',
        text: companyName,
        text_align: 'center',
      },
      width: 500,
      color: '#ffffff',
      y: '130',
      x: '400',
      crop: 'fit',
    },
  ];
};

const generateCardUrl = async (
  title,
  firstName,
  lastName,
  companyName,
  guestImageUrl
) => {
  const guestImageName = await uploadGuestProfilePic(
    `${firstName} ${lastName}`,
    guestImageUrl
  );
  const titleTransformations = gettitleTransformations(title);
  const imageTransformation = getGuestImageTransformation(guestImageName);
  const nameTransformations = getNamesTransformations(firstName, lastName);
  const companyNameTransformations = getCompanyNameTransformations(companyName);
  const url = cloudinary.url('Sample_Card_Design-ai_lmefeb', {
    transformation: [
      ...titleTransformations,
      ...companyNameTransformations,
      imageTransformation,
      ...nameTransformations,
    ],
  });
  return url;
};

export { generateCardUrl };
