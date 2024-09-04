import React from 'react'
import arrow from "../../assets/arrow.svg"
import view from "../../assets/view.svg"
const TopRated = () => {
  return (
    <div>
        <div className=' p-4' style={{backgroundColor : "#0E0E12"}}>
       <div className='flex justify-between items-center text-white mb-4'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0]'>Top Rated On <br/> Bookmyshow Or IMDB</h1>
            <img src={arrow} className="text-2xl w-[18px] h-[18px] bg-[#0067B3] rounded-full"/>
       </div>
       <div className='flex gap-[10px] overflow-x-scroll scrollbar-hide'>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/hungergames.MPW-136443_500x749.jpg?v=1708452738" alt="pic1" className='w-[154px] h-[216px] flex-shrink-0' loading='lazy'/>
            <button className='w-[106px] h-[216px] flex-shrink-0 bg-[#222227] flex flex-col relative'>
                <img src={view} alt="view" className='flex-shrink-0 text-white bg-[#0067B3] p-2 rounded-full w-[40px] h-[40px] absolute top-[77px] left-[33px]'/>
                <p className=' text-[#A9ADB9] text-[10px] font-semibold w-[px] h-[16px] absolute top-[123px] left-[27px] right-[28px]'>View More</p>
            </button>
        </div>
       
    </div>
    </div>
  )
}

export default TopRated