import React from 'react';
import image1 from '../assets/images.jfif';
import helmet from '../assets/helmet.jpg';
import flat from '../assets/flat.jpeg';
import trip from '../assets/trip.jpg';
import insur from '../assets/insur.webp';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={image1}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={helmet}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={flat}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={trip}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={insur}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Our Services</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
            - We have brand new motorbikes <br />
            - Always have helmet <br />
            - Alwasy help You <br />
            - Always Assist <br />
            - All Motorbikes have insurance <br />

        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Book Motorbike</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;