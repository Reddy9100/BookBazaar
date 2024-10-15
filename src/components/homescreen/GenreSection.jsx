import React, { useState } from 'react';
import { useBooksContext } from '../Context/BooksContext';

const GenreSection = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const { books } = useBooksContext(); // Assuming this contains all books
  const genres = [
    'All', 'Action', 'Comedy', 'Drama', 'Romance', 'Sports', 'Fantasy',
    'Horror', 'Adventure', 'Thriller', 'Crime', 'SciFi', 'Western', 'Mystery'
  ];

  const handleGenreClick = (genre) => {
    setActiveGenre(genre);
  };

  
  const filteredBooks = activeGenre === 'All' ? books : books.filter(book => book.category === activeGenre);

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
                ${activeGenre === genre ? 'bg-[#ECEDF0] text-[#222227]' : 'bg-[#222227] text-[#6A7185]'}`}
              aria-pressed={activeGenre === genre}
            >
              {genre}
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-[7px]'>
        {filteredBooks.map((book, index) => (
          <img
            key={index}
            src={book.picture} // Assuming each book has a coverImage property
            alt={`Cover of ${book.title}`} // Ensure you have a title for better accessibility
            className='w-[102px] h-[144px] flex-shrink-0'
            loading='lazy'
          />
        ))}
      </div>
      <button className='bg-[#222227] text-[#6A7185] w-full font-normal mt-4 p-2' style={{ fontSize: "14px", fontWeight: "500" }}>
        View More
      </button>
    </div>
  );
};

export default GenreSection;
