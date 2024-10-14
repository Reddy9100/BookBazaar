import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CelestiForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    picture : '',
    author: '',
    rating: '',
    price: '',
    description: '',
    category: 'Fiction', // Default category
  });

  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      console.log('Book submitted successfully:', response.data);
      fetchBooks();
    } catch (error) {
      console.error('Error submitting book:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-auto p-5 bg-main">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around h-auto w-[350px] bg-spotify-primary p-7 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-5 text-center">Book Upload</h1>
        
        <div className="mb-4">
          <label className="text-white">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>
        <div className="mb-4">
          <label className="text-white">Picture:</label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-white">Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Top-picks">Top-picks</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-spotify-secondary text-white font-bold rounded-lg hover:bg-spotify-accent transition duration-200"
        >
          Submit
        </button>
      </form>

      <div className="h-auto mt-5">
        {books.length > 0 && (
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white text-lg">Books Available:</h2>
            <ul className="text-white">
              {books.map((book, index) => (
                <li key={index} className="mb-2">
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CelestiForm;
