import React from 'react'
import { Carousel } from 'antd';
import NowOnScreen from './NowOnScreen';
import TopRated from './TopRated';
import ScreeningSoon from './ScreeningSoon';
import Advertisements from './Advertisements';
import DigitalPlatform from './DigitalPlatfoem';
const HomeScreen = () => {

        return (
          <div className="container h-[50vh] mx-auto">
            <Carousel
              autoplay
              dots
              dotPosition="bottom"
              className="rounded-lg shadow-lg"
            >
              <div className=" flex items-center justify-center bg-blue-500 text-white">
                <img src='https://cdn.shopify.com/s/files/1/0057/3728/3618/files/ItemP8475_jpg_500x749.jpg?v=1694528506' className=' w-full'/>
              </div>
              <div className=" flex items-center justify-center bg-green-500 text-white">
              <img src='https://cdn.shopify.com/s/files/1/0057/3728/3618/files/ItemP8475_jpg_500x749.jpg?v=1694528506' className=' w-full'/>
              </div>
              <div className=" flex items-center justify-center bg-red-500 text-white">
              <img src='https://cdn.shopify.com/s/files/1/0057/3728/3618/files/ItemP8475_jpg_500x749.jpg?v=1694528506' className=' w-full'/>
              </div>
              <div className=" flex items-center justify-center bg-purple-500 text-white">
              <img src='https://cdn.shopify.com/s/files/1/0057/3728/3618/files/ItemP8475_jpg_500x749.jpg?v=1694528506' className=' w-full'/>
              </div>
            </Carousel>
            <NowOnScreen/>
            <TopRated/>
            <ScreeningSoon/>
            <Advertisements/>
            <DigitalPlatform/>
          </div>
        );
      
      
}

export default HomeScreen