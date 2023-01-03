import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import nmax from '../assets/nmax.png';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://inwfile.com/s-cz/omy34b.jpg',
      title: 'nmax',
    },
    {
      url: 'https://news.trenddetail.com/content/uploads/2022/09/24/2539f5a3bf.jpg',
      title: 'pcx',
    },
    {
      url: 'https://www.ananmoney.com/wp-content/uploads/2022/08/Yamaha-XMAX-2023-Black.png',
      title: 'xmax',
    },
    {
      url: 'https://images.91wheels.com//assets/b_images/main/models/profile/profile1661764705.jpg',
      title: 'harley',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-[600px] sm:h-[600px] md:w-[800px] m-auto py-16 px-4 relative group'>
        <div className='text bold font-bold text-5xl md:text-7xl drop-shadow-2xl text-center p-4'>Motorbikes</div>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;