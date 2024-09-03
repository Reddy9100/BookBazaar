import React from 'react'
import { GrFormNext } from "react-icons/gr";
const TopRated = () => {
  return (
    <div>
        <div className=' p-4' style={{backgroundColor : "#0E0E12"}}>
       <div className='flex justify-between items-center text-white mb-4'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0]'>Top Rated On <br/> Bookmyshow Or IMDB</h1>
            <GrFormNext className="text-2xl w-[18px] h-[18px] bg-[#0067B3] rounded-full"/>
       </div>
       <div className='flex overflow-x-scroll scrollbar-hide space-x-4'>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
        </div>
    </div>
    </div>
  )
}

export default TopRated