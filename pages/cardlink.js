import useSWR from 'swr';
import React from 'react';
import { Layout } from '@/components';
import Link from 'next/link';
import { client } from '../lib/client';

import { HeroBanner, Product, FooterBanner } from '../components';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function cardlink({ products, bannerData }) {
  const { data, error } = useSWR('/api/staticCardData', fetcher);

  if (error) return <div>Failed to Load!</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='card-link'>
        <h1>Custom Card Design Details:</h1>
        <p className='custom-user-details'>First Name: {data.firstName}</p>
        <p className='custom-user-details'>Last Name: {data.lastName}</p>
        <div className='buttons-link'>
          <a href={data.url} target='_blank' rel='noopener' className='btn'>
            Open Custom Card Design
          </a>
          <div style={{ width: 40 }}></div>
          <Link href='/product/nfc-card'>
            <button type='button' className='btn'>
              Place your order Now!!!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
