import React from 'react';

import { GrFormNext } from "react-icons/gr";

const NowOnScreen = () => {
  return (
    <div className='bg-black p-4'>
       <div className='flex justify-between items-center text-white mb-4'>
            <h1 className='text-xl font-semibold'>Now On Screening</h1>
            <GrFormNext className="text-2xl bg-blue-700 rounded-full"/>
       </div>
       <div className='flex overflow-x-scroll scrollbar-hide space-x-4'>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://www.movieposters.com/cdn/shop/files/wednesday.tv_240x360_crop_center.progressive.jpg?v=1689352362" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
        </div>
    </div>
  );
}

export default NowOnScreen;