import React, { useState } from 'react';

const Navbartop = () => {
  const [activeButton, setActiveButton] = useState('screening'); // Default active button

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className='flex justify-center items-center fixed  bg-[#0E0E12] py-2 px-4 rounded-full'>
      <div className='flex justify-around items-center space-x-2'>
        <button
          className={`text-white py-2 px-4 rounded-full ${activeButton === 'screening' ? 'bg-[#4b4fba]' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('screening')}
        >
          Screening
        </button>
        <button
          className={`text-white py-2 px-4 rounded-full ${activeButton === 'streaming' ? 'bg-[#4b4fba]' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('streaming')}
        >
          Streaming
        </button>
        <button
          className={`text-white py-2 px-4 rounded-full ${activeButton === 'posters' ? 'bg-[#4b4fba]' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('posters')}
        >
          Posters
        </button>
      </div>
    </div>
  );
};

export default Navbartop;
