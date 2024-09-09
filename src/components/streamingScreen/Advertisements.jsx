import React from 'react';
import { Carousel } from 'antd';

const Advertisements = () => {
  return (
    <div className="flex justify-around p-2" style={{backgroundColor : "#0E0E12"}}>
      {/* Vertical text div */}
      <div className="flex items-center justify-center h-[168px] bg-gray-800 text-white">
        <div className="text-[12px] w-[28px] h-[168px] transform -rotate-90 flex justify-center items-center">
          <p style={{color : "#A9ADB9" , fontSize : "14px" ,fontWeight: "400"}}>Advertisements</p>
        </div>
      </div>

      {/* Carousel div */}
      <div className="w-[80vw] h-[168px]">
        <Carousel autoplay className="h-[168px]">
          <div className="h-[168px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/scan_78cface5-e199-4a21-b714-4c1a6d2b20ca_500x749.jpg?v=1718312413"
              alt="Ad 1"
              loading='lazy'
              className="w-full h-[168px] object-fill"
            />
          </div>
          <div className="h-[168px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_500x749.jpg?v=1707491191"
              alt="Ad 2"
              loading='lazy'
              className="w-full h-[168px] object-fill"
            />
          </div>
          <div className="h-[168px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/JOKER.PW.REP_500x749.jpg?v=1574965207"
              alt="Ad 3"
              loading='lazy'
              className="w-full h-[168px] object-fill"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisements;
