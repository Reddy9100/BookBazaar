import React from 'react';
import { GrFormNext } from "react-icons/gr";
import release from "../../assets/release.jpg";

const ScreeningSoon = () => {
  return (
    <div>
      <div className='bg-black p-4'>
        <div className='flex justify-between items-center text-white mb-4'>
          <h1 className='text-xl font-semibold'>Screening Soon</h1>
          <GrFormNext className="text-2xl bg-blue-700 rounded-full" />
        </div>
        <div className='flex overflow-x-scroll scrollbar-hide space-x-4'>
          {/* Each image is now in its own div with a white background and margin */}
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic1"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic2"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic3"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic4"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic5"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic6"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic7"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
              alt="pic8"
              className='w-[196px] h-[286px] object-cover'
            />
            <div className='flex justify-around items-center mt-3'>
           <h2 className='font-bold text-slate-800'>Release</h2>
           <hr className='w-4 h-[2px] transform rotate-90 bg-slate-300'/>
           <p className='font-bold text-black'>30 sep 2024</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreeningSoon;
