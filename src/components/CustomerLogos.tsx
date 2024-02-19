import Image from 'next/image'
import React from 'react'

const logoPaths = [
  '/images/Google.svg',
  '/images/Microsoft.svg',
  '/images/Spotify.svg',
  '/images/Mailchimp.svg',
  '/images/Airbnb.svg',
  '/images/uber.svg',
];

const CustomerLogos = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center pb-10'>
      {logoPaths.map((logoPath) => (
        <Image key={logoPath} src={logoPath} alt="Customer logo" width={100} height={55} />
      ))}
    </div>
  );
};

export default CustomerLogos;
