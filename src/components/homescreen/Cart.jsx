import React from 'react';
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { IoMdCart, IoMdCloseCircleOutline, IoMdRemove, IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaRupeeSign } from 'react-icons/fa';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();

    // Calculate total price
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <div className="cart-container min-h-[100vh] flex flex-col justify-center items-center overflow-y-auto mx-auto bg-main shadow-lg p-4">
                <div className='flex justify-center items-center w-full mb-4'>
                    <h2 className="text-3xl font-bold text-white">Your Cart</h2>
                    
                </div>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-400">Your cart is empty.</p>
                ) : (
                    
                    <div className="w-full">
                        {/* <button 
                        onClick={clearCart} 
                        className="bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-red-700 flex items-center"
                    >
                        <IoMdCloseCircleOutline className="mr-2" />Empty
                    </button> */}
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            <ul className="flex space-x-4">
                                {cart.map((item) => (
                                    <li key={item._id} className="flex flex-col justify-between bg-gray-700 rounded-lg p-4 transition-shadow hover:shadow-lg w-[200px] flex-shrink-0">
                                        <img 
                                            src={item.picture} 
                                            alt={item.title} 
                                            className='w-full h-[150px] object-cover rounded-md mb-2'
                                        />
                                        <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                                        <p className="text-gray-300">Price: {item.price}</p>
                                        <p className="text-gray-300">Quantity: {item.quantity}</p>
                                        <button 
                                            onClick={() => removeFromCart(item._id)} 
                                            className="mt-2 text-white bg-main p-2 rounded-md hover:bg-opacity-80 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-between items-center mt-6">
                            <div className="bg-gray-800 rounded-lg p-4 w-full flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white">Total:</h3>
                                <p className="text-xl font-bold text-blue-500"><span className='flex justify-center items-center'><FaRupeeSign/>{total}</span></p>
                            </div>
                        </div>
                        <Link 
                            to="/checkout" 
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 inline-block w-full text-center transition duration-200 hover:bg-blue-700"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
