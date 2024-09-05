import React, { useState } from 'react';

const GenreSection = () => {
  const [activeGenre, setActiveGenre] = useState('All'); // Default 'All' is active

  const genres = [
    'All', 'Action', 'Comedy', 'Drama', 'Romance', 'Sports', 'Fantasy',
    'Horror', 'Adventure', 'Thriller', 'Crime', 'SciFi', 'Western', 'Mystery'
  ];

  const handleGenreClick = (genre) => {
    setActiveGenre(genre); // Update the active genre when a button is clicked
  };

  return (
    <div className='p-4 pb-32' style={{ backgroundColor: "#0E0E12" }}>
      <div className='flex justify-between items-center text-[#ECEDF0] py-4'>
        <h1 className='text-[18px] font-semibold text-[#ECEDF0]'>Genres Junction</h1>
      </div>
      <div className='flex gap-[7px] overflow-x-scroll scrollbar-hide overflow-y-hidden mb-4'>
        {genres.map((genre, index) => (
          <div key={index} className='h-[30px] w-[120px] flex items-center justify-center'>
            <button
              onClick={() => handleGenreClick(genre)}
              className={`text-sm px-3 font-semibold w-full h-full flex items-center justify-center 
                ${activeGenre === genre ? 'bg-[#ECEDF0] text-[#222227]' : 'bg-[#222227] text-[#6A7185]'}
              `}
            >
              {genre}
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-[7px]'>
        
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310144069407.jpeg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://wallpaperaccess.com/full/9041172.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310144069407.jpeg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://wallpaperaccess.com/full/9041172.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310144069407.jpeg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        <img src="https://wallpaperaccess.com/full/9041172.jpg" alt="pic1" className='w-[102px] h-[144px] flex-shrink-0' loading='lazy' />
        
        
      </div>
      <button className='bg-[#222227] text-[#6A7185] w-full font-normal mt-4 p-2' style={{ fontSize: "14px", fontWeight: "500" }}>
        View More
      </button>
    </div>
  );
}

export default GenreSection;
