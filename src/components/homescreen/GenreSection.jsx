import React, { useState } from 'react';

const GenreSection = () => {
  const [activeGenre, setActiveGenre] = useState(''); // State to track the active button

  const genres = [
    'All', 'Action', 'Comedy', 'Drama', 'Romance', 'Sports', 'Fantasy',
    'Horror', 'Adventure', 'Thriller', 'Crime', 'Science Fiction', 'Western', 'Mystery'
  ];

  const handleGenreClick = (genre) => {
    setActiveGenre(genre); // Update the active genre when a button is clicked
  };

  return (
    <div className='bg-black p-4 pb-20'>
      <div className='flex justify-between items-center text-white py-4'>
        <h1 className='text-xl font-semibold'>Genres Junction</h1>
      </div>
      <div className='flex overflow-x-scroll scrollbar-hide overflow-y-hidden space-x-2 mb-4'>
        {genres.map((genre, index) => (
          <div key={index} className='h-[35px] w-[120px] flex items-center justify-center'>
            <button
              onClick={() => handleGenreClick(genre)}
              className={`text-sm px-2 font-semibold w-full h-full flex items-center justify-center ${activeGenre === genre ? 'bg-white text-black' : 'bg-gray-900 text-gray-500'}`}
            >
              {genre}
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://wallpaperaccess.com/full/9041172.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://th.bing.com/th/id/OIP.C9Zt_s2ppySfjKwgwurgjwHaMu?rs=1&pid=ImgDetMain" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://image.tmdb.org/t/p/original/6S4BRlZPfzrludhsPDPVe6fEoxV.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://th.bing.com/th/id/OIP.dqkUusnLGPoZNDmpzmb73QAAAA?rs=1&pid=ImgDetMain" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://wallpaperaccess.com/full/9041172.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://th.bing.com/th/id/OIP.C9Zt_s2ppySfjKwgwurgjwHaMu?rs=1&pid=ImgDetMain" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://image.tmdb.org/t/p/original/6S4BRlZPfzrludhsPDPVe6fEoxV.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://th.bing.com/th/id/OIP.dqkUusnLGPoZNDmpzmb73QAAAA?rs=1&pid=ImgDetMain" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg" alt="pic1" className='w-[300px] h-[160px] flex-shrink-0'/>
      </div>
      <button className='bg-gray-900 text-gray-500 w-full mt-4 p-2'>View More</button>
    </div>
  );
}

export default GenreSection;
