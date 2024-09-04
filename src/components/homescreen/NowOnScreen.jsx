import React from 'react';
import BMS from "../../assets/BMS.svg"
import IMDB from "../../assets/IMDB.svg"
import { GrFormNext } from "react-icons/gr";

const NowOnScreen = () => {
  return (
    <div className='p-4' style={{backgroundColor : "#0E0E12"}}>
       <div className='flex justify-between items-center text-white mb-4'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0]'>Now On Screening</h1>
            <GrFormNext className="text-2xl w-[18px] h-[18px] bg-[#0067B3] rounded-full"/>
       </div>
       
      <div className='flex overflow-x-scroll scrollbar-hide space-x-4'>
            <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-[#A9ADB9] font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-[#0E0E12] text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-gray-800 p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-gray-800'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    <div className='h-[318px]  flex flex-col w-[196px]'>
              <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[196px] h-[286px] flex-shrink-0'/>
              <div className='flex mt-[6px] gap-[6px]'>
                    <div className='text-gray-500 flex w-[110px] h-[26px] justify-between items-center bg-[#222227] p-1'>
                      <img src={BMS} alt="bookmyshow" className='h-[22px] w-[60px] pl-[5px] ml-2'/>
                      <p className=' pb-1 ml-[11px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
                    <div className='text-gray-500 flex w-[80px] h-[26px] justify-between items-center p-1 bg-[#222227]'>
                      <img src={IMDB} alt="bookmyshow" className='h-[22px] pl-[5px]'/>
                      <p className=' pb-1 ml-[7px] flex justify-center items-center text-xs px-1 w-[28px] h-[22px] pt-[3px] bg-black text-gray-400 font-semibold'>8.6</p>
                    </div>
             
            </div>
           
    </div>
    </div>

    </div>
  );
}

export default NowOnScreen;