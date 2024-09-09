import React from 'react';
import BMS from "../../assets/BMS.svg"
import IMDB from "../../assets/IMDB.svg"
import arrow from "../../assets/arrow.svg"
import view from "../../assets/view.svg"
const NewOnPlatform = () => {
  return (
    <div className='p-4' style={{backgroundColor : "#0E0E12"}}>
       <div className='flex justify-between items-center text-white mb-4'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0]'>New On Platform</h1>
            <img src={arrow} className="text-2xl w-[18px] h-[18px] bg-[#0067B3] rounded-full"/>
       </div>
       
      <div className='flex gap-[10px]  overflow-x-scroll scrollbar-hide '>
            <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[24px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[24px] w-[40px] pl-[5px]'/>
                      <p className=' pb-1 ml-[9px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <button className='w-[140px] h-[286px] flex-shrink-0 bg-[#222227] flex flex-col relative'>
                <img src={view} alt="view" className='flex-shrink-0 text-white bg-[#0067B3] p-3 rounded-full w-[48px] h-[48px] absolute top-[108px] left-[49px]'/>
                <p className=' text-[#A9ADB9] text-xs font-semibold w-[65px] h-[16px] absolute top-[162px] left-[40px]'>View More</p>
            </button>
    </div>
    
    </div>
  );
}

export default NewOnPlatform;