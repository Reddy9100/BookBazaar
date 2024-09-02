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
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spiderman2002.adv.24x36_500x749.jpg?v=1709822787" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
        </div>
    </div>
  );
}

export default NowOnScreen;