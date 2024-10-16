import React, { useEffect, useState } from "react";
import { useBooksContext } from "../Context/BooksContext";
import { Skeleton, Drawer, Rate } from "antd"; // Import Rate from antd
import arrow from "../../assets/arrow.svg";
import view from "../../assets/view.svg";
import topPicks from "../../assets/toppicks.json"
import Lottie from "lottie-react"
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../Context/CartContext";
const NowOnScreen = () => {
  const { books, loading, error } = useBooksContext();
  const [showLoading, setShowLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToCart } = useCartContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const TopPicks = books.filter((book) => book.category === "Top-picks");

  const handleShowAll = () => {
    setShowAll(true);
  };

  const openDrawer = (book) => {
    setSelectedBook(book);
    setQuantity(1); // Reset quantity when opening the drawer
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedBook(null);
  };

  const handleAddToCart = () => {
    if (selectedBook) {
      const itemToAdd = { ...selectedBook, quantity };
      addToCart(itemToAdd);
      closeDrawer(); // Optionally close the drawer after adding to cart
    }
  };

  if (showLoading || loading) {
    return (
      <div style={{ backgroundColor: "#0E0E12" }}>
        <div className="flex justify-between items-center text-white mb-4">
          <h1 className="text-[18px] font-semibold text-[#ECEDF0] ml-2">Top Picks</h1>
          
          
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
      <div className="flex justify-between  items-center text-white mb-4">
        <h1 className="text-[18px] font-semibold text-[#ECEDF0] ml-2">Top Picks</h1>
        <Lottie animationData={topPicks} className="h-[60px]"/>
        
      </div>
      <div className="flex gap-[10px] overflow-x-scroll scrollbar-hide">
        {(showAll ? TopPicks : TopPicks.slice(0, 5)).map((book, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[196px] h-[286px] cursor-pointer"
            onClick={() => openDrawer(book)}
          >
            <img
              src={book.picture}
              alt={book.title}
              className="w-[196px] h-[286px] object-cover"
            />
          </div>
        ))}
        {!showAll && TopPicks.length > 5 && (
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
              {selectedBook ? selectedBook.title : ""}
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
        {selectedBook && (
          <div className="p-4 rounded-lg">
            <img
              src={selectedBook.picture}
              alt={selectedBook.title}
              className="w-full h-[250px] object-contain rounded-lg mb-2"
            />
            <p className="text-lg font-semibold text-gray-200 mb-2">Author: {selectedBook.author}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">{selectedBook.description}</p>
            <Rate disabled allowHalf value={selectedBook.rating} className="text-yellow-300 mb-2" />
            <p className="text-white">Price: {selectedBook.price}</p>
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

export default NowOnScreen;
