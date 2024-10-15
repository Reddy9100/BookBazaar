import React, { useEffect, useState } from "react";
import { useBooksContext } from "../Context/BooksContext"; // Context for movies
import { Skeleton, Drawer, Rate } from "antd"; // Import Rate from antd

import view from "../../assets/view.svg";
import screeningSoon from "../../assets/trending.json"; // Lottie animation for Screening Soon
import Lottie from "lottie-react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../Context/CartContext"; // Assuming you want to add to cart

const ScreeningSoon = () => {
  const { books, loading, error } = useBooksContext(); // Get movies from context
  const [showLoading, setShowLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { addToCart } = useCartContext(); // Get addToCart from context

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const ScreeningSoonMovies = books.filter((movie) => movie.category === "Fiction"); // Filter movies for Screening Soon

  const handleShowAll = () => {
    setShowAll(true);
  };

  const openDrawer = (movie) => {
    setSelectedMovie(movie);
    setQuantity(1); // Reset quantity when opening the drawer
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedMovie(null);
  };

  const handleAddToCart = () => {
    if (selectedMovie) {
      const itemToAdd = { ...selectedMovie, quantity };
      addToCart(itemToAdd);
      closeDrawer(); // Optionally close the drawer after adding to cart
    }
  };

  if (showLoading || loading) {
    return (
      <div style={{ backgroundColor: "#0E0E12" }}>
        <div className="flex justify-between items-center text-white mb-4">
          <h1 className="text-[18px] font-semibold text-[#ECEDF0] ml-2">Trending Now</h1>
        </div>
        <div className="flex gap-[10px] overflow-x-scroll scrollbar-hide">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              active
              paragraph={false}
              className="flex-shrink-0 w-[196px] h-[286px]"
              title={{ width: "100%" }}
              style={{
                background: "linear-gradient(135deg, black,#0E0E12)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ backgroundColor: "#0E0E12" }}>
      <div className="flex justify-between items-center text-white mb-4">
        <h1 className="text-[18px] mt-2 font-semibold text-[#ECEDF0] ml-2">Trending Now</h1>
        <Lottie animationData={screeningSoon} className="h-[60px] mt-2" />
      </div>
      <div className="flex gap-[10px] overflow-x-scroll scrollbar-hide">
        {(showAll ? ScreeningSoonMovies : ScreeningSoonMovies.slice(0, 5)).map((movie, index) => (
          <div
            key={index}
            className=" bg-white p-5 pb-9 flex flex-col justify-around items-center  flex-shrink-0 w-[196px] h-[286px] cursor-pointer"
            onClick={() => openDrawer(movie)}
          >
            <img
              src={movie.picture}
              alt={movie.title}
              className="w-[156px] h-[236px] object-cover"
            />
            <Rate disabled allowHalf value={movie.rating} className="text-yellow-400 text-center mt-1" />
          </div>
        ))}
        {!showAll && ScreeningSoonMovies.length > 5 && (
          <button
            onClick={handleShowAll}
            className="w-[140px] h-[286px] flex-shrink-0 bg-[#222227] flex flex-col relative"
          >
            <img
              src={view}
              alt="view"
              className="flex-shrink-0 text-white bg-[#0067B3] p-3 rounded-full w-[48px] h-[48px] absolute top-[108px] left-[49px]"
            />
            <p className="text-[#A9ADB9] text-xs font-semibold w-[65px] h-[16px] absolute top-[162px] left-[40px]">
              View More
            </p>
          </button>
        )}
      </div>

      <Drawer
        title={
          <div className="flex flex-col justify-center items-center text-white mb-4">
            <hr className="bg-spotify-accent white w-11 h-1 rounded-lg animate-wiggle" onClick={closeDrawer}/>
            <span className="text-gray-200 mt-2 font-semibold">
              {selectedMovie ? selectedMovie.title : ""}
            </span>
          </div>
        }
        placement="bottom"
        closable={false}
        onClose={closeDrawer}
        style={{ backgroundColor: "#222227" }}
        open={drawerVisible}
        height={500}
      >
        {selectedMovie && (
          <div className="p-4 rounded-lg">
            <img
              src={selectedMovie.picture}
              alt={selectedMovie.title}
              className="w-full h-[250px] object-contain rounded-lg mb-2"
            />
            <p className="text-lg font-semibold text-gray-200 mb-2">Director: {selectedMovie.director}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">{selectedMovie.description}</p>
            <Rate disabled allowHalf value={selectedMovie.rating} className="text-yellow-300 mb-2" />

            <p className="text-white">Price: {selectedMovie.price}</p>
            <div className="flex mt-4 items-center justify-between">
              <button
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                className="bg-white bg-opacity-80 border border-white/10 text-red-600 p-2 rounded-lg shadow-lg"
              >
                <IoMdRemove />
              </button>
              <span className="text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-white bg-opacity-80 border border-white/10 text-green-600 p-2 rounded-lg shadow-lg"
              >
                <IoMdAdd />
              </button>
            </div>
            <button onClick={handleAddToCart} className="bg-slate-50 w-full p-2 rounded-md mt-2 text-black font-semibold">
              Add To Cart
            </button>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default ScreeningSoon;
