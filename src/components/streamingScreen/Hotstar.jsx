import React from 'react';
import backicon from '../../assets/back-icon.svg';
import hotstarLogo from '../../assets/hotstar-logo.svg';
import front from '../../assets/front-icon.svg';
import view from '../../assets/view.svg';
import { useNavigate,Link } from 'react-router-dom';
const HotstarComponent = () => {
 
    const navigate = useNavigate()

    const NavigateToPlatformsGrid = () =>{
        navigate("/OttHome")
    }

  return (
    <div className='h-[89vh] bg-[#0E0E12] overflow-y-auto pb-12'>
        <div className='h-[240px] relative' style={{
            background:
                "linear-gradient(to bottom,rgba(1, 20, 124, 1),rgba(1, 20, 124, 0)",
            }}>
            <img src={backicon} onClick={NavigateToPlatformsGrid} alt='backicon' className='absolute top-[4px] left-[4px] h-[24px] w-[24px]'/>
            <div className='flex justify-center items-center h-full'>
                <Link to="/OttHotstar"><img src={hotstarLogo} alt="prime" className='h-[46px] w-auto'/></Link>
            </div>
        </div>
        <div className='-mt-16 space-y-3'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0] ml-3'>New On Hotstar</h1>
            <div className='flex gap-[10px] overflow-x-scroll scrollbar-hide px-[14px]'>
                {[
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
                ].map((image,index)=>(
                    <img key={index} 
                    src={image}
                    alt={`pic${index + 1}`}
                    className='w-[154px] h-[216px] flex-shrink-0'
                    />
                ))}
            </div>
        </div>
        <div className='mt-3 space-y-3'>
            <h1 className='text-[18px] font-semibold text-[#ECEDF0] ml-5'>Streaming Shortly</h1>
            <div className='flex gap-[10px] overflow-x-scroll scrollbar-hide px-[14px]'>
                {[
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
                ].map((image,index)=>(
                    <img key={index} 
                    src={image}
                    alt={`pic${index + 1}`}
                    className='w-[154px] h-[216px] flex-shrink-0'
                    />
                ))}
            </div>
        </div>
        <div className='mt-3 space-y-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[18px] font-semibold text-[#ECEDF0] ml-3'>Hotstar For You</h1>
                <img src={front} alt='front' className='w-[18px] mr-2  h-[18px] bg-[#0067B3] p-1 rounded-full text-[#FFFFFF]'/>
            </div>
            <div className='flex gap-[10px] overflow-x-scroll scrollbar-hide px-[14px]'>
                {[
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                    "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
                ].map((image,index)=>(
                    <img key={index} 
                    src={image}
                    alt={`pic${index + 1}`}
                    className='w-[154px] h-[216px] flex-shrink-0'
                    />
                ))}
                 <button className='w-[106px] h-[216px] flex-shrink-0 bg-[#222227] flex flex-col justify-center items-center'>
                  <img src={view} alt="view" className='text-white bg-[#0067B3] p-3 rounded-full w-10 h-10'/>
                  <p className='text-[#A9ADB9] text-xs font-semibold mt-2'>View More</p>
              </button>
            </div>
        </div>
    </div>
  )
}

export default HotstarComponent;