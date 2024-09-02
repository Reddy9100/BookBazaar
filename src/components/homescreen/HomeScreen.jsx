import React from 'react'
import { Carousel } from 'antd';
import NowOnScreen from './NowOnScreen';
import TopRated from './TopRated';
import ScreeningSoon from './ScreeningSoon';
import Advertisements from './Advertisements';
import DigitalPlatform from './DigitalPlatfoem';
import GenreSection from './GenreSection';
const HomeScreen = () => {

        return (
          <div className="container h-[350px]  mx-auto">
            <Carousel
              autoplay
              dots
              dotPosition="bottom"
              className="rounded-lg shadow-lg"
            >
              <div className=" flex items-center justify-center bg-blue-500 text-white">
                <img src='https://preview.redd.it/telugu-cinema-doesnt-focus-much-on-poster-design-now-but-v0-v41ep26oqrac1.jpeg?width=1000&format=pjpg&auto=webp&s=2ff421ee96632dac11fad88d872fd1c7dd50d2a0' className='h-[300px] w-full' loading='lazy'/>
              </div>
              <div className=" flex items-center justify-center bg-green-500 text-white">
              <img src='https://preview.redd.it/telugu-cinema-doesnt-focus-much-on-poster-design-now-but-v0-v41ep26oqrac1.jpeg?width=1000&format=pjpg&auto=webp&s=2ff421ee96632dac11fad88d872fd1c7dd50d2a0' className='h-[300px] w-full' loading='lazy'/>
              </div>
              <div className=" flex items-center justify-center bg-red-500 text-white">
              <img src='https://preview.redd.it/telugu-cinema-doesnt-focus-much-on-poster-design-now-but-v0-v41ep26oqrac1.jpeg?width=1000&format=pjpg&auto=webp&s=2ff421ee96632dac11fad88d872fd1c7dd50d2a0' className='h-[300px] w-full' loading='lazy'/>
              </div>
              <div className=" flex items-center justify-center bg-purple-500 text-white">
              <img src='https://preview.redd.it/telugu-cinema-doesnt-focus-much-on-poster-design-now-but-v0-v41ep26oqrac1.jpeg?width=1000&format=pjpg&auto=webp&s=2ff421ee96632dac11fad88d872fd1c7dd50d2a0' className='h-[300px] w-full' loading='lazy'/>
              </div>
            </Carousel>
            <div className='flex justify-around bg-black mx-auto p-4 '>
            <button className='w-[200px] bg-slate-900 font-semibold text-white p-3 rounded-md'>Book My Tickets</button>
            <button className='w-[50px] bg-slate-900 font-semibold text-white p-3 rounded-md'>+</button>
            </div>
            <NowOnScreen/>
            <TopRated/>
            <ScreeningSoon/>
            <Advertisements/>
            <DigitalPlatform/>
            <GenreSection/>
          </div>
        );
      
      
}

export default HomeScreen