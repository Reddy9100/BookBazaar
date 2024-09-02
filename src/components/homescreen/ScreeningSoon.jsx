import React from 'react';
import { GrFormNext } from "react-icons/gr";

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
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic1"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic2"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic3"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic4"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic5"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic6"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic7"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
          <div className='bg-white p-4  flex-shrink-0'>
            <img
              src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362"
              alt="pic8"
              className='w-[196px] h-[286px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreeningSoon;
