import React from 'react';
import heroBanner from "../assets/image.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src={heroBanner} alt="Banner" />
            
            <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />
            <img className="w-36 h-20 absolute top-2 left-4" src={logo} alt="/" />
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className='left-[50%] max-w-[1100px] m-auto absolute p-4'>
                    <div>
                    <p className='text-gray-400'>Motorbike Rental</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Your secure is our priority</h1>
                    <p className='mt-4 max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt totam ea corporis sequi earum, sapiente explicabo animi delectus facere cumque?</p>
                    <button className='mt-2 bg-slate-200 text-black hover:bg-black/50 hover:text-white'>Reserve Motorbike</button>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Hero