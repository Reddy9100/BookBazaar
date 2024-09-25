import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';

const CelestiForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    file: null,
    category: 'Telugu',
  });

  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file input or text input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('file', formData.file);
    formPayload.append('category', formData.category);

    try {
      const response = await axios.post('http://localhost:5000/upload', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully:', response.data);
      fetchSongs(); // Fetch the songs after a successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const fetchSongs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/songs'); // Endpoint that returns songs
      console.log('Fetched songs:', response.data); // Log the fetched songs

      // Create Blob URLs for each song
      const songsWithBlobUrls = await Promise.all(
        response.data.map(async (song) => {
          const blob = await fetch(song.url).then(res => res.blob());
          return {
            ...song,
            blobUrl: URL.createObjectURL(blob), // Create a blob URL
          };
        })
      );

      setSongs(songsWithBlobUrls);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    fetchSongs(); // Call the async function when the component mounts
  }, []);

  const playNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0); // Loop back to the first song
    }
    setIsPlaying(false); // Reset play state when changing songs
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto p-5 bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around h-[400px] w-[350px] bg-spotify-primary p-7 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-5 text-center">Celestia Upload</h1>

        <div className="mb-4">
          <label className="text-white">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Upload File:</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Category (Language):</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-spotify-secondary"
          >
            <option value="Telugu">Telugu</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-spotify-secondary text-white font-bold rounded-lg hover:bg-spotify-accent transition duration-200"
        >
          Submit
        </button>
      </form>

      <div className="h-[50vh]">
        {songs.length > 0 && (
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white text-lg">Now Playing: {songs[currentSongIndex].filename}</h2>
            <ReactAudioPlayer
              src={songs[currentSongIndex].blobUrl} // Use the Blob URL from the song object
              autoPlay={isPlaying}
              controls
              onEnded={playNextSong} // Move to the next song when the current one ends
            />
           
            <button
              onClick={playNextSong}
              className="mt-2 p-2 bg-spotify-secondary text-white font-bold rounded-lg hover:bg-spotify-accent transition duration-200"
            >
              Next Song
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CelestiForm;
