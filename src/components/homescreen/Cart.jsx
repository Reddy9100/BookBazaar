import React, { useState, useEffect } from 'react';
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from 'react-icons/fa';
import empty from "../../assets/emptyCart.json";
import Lottie from 'lottie-react';
import { Modal } from 'antd';
import addressAnimation from '../../assets/two.json';
import { Toaster, toast } from 'react-hot-toast';

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [Useraddress, setAddress] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(calculatedTotal);
    }, [cart]);

    const fetchAddress = async (lat, lon) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            if (!response.ok) {
                throw new Error('Failed to fetch address');
            }
            const data = await response.json();
            setAddress(data.display_name);
            
            toast.success('Address fetched successfully!');
            setModalIsOpen(false);
        } catch (error) {
            toast.error('Failed to fetch address');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchAddress(latitude, longitude);
                },
                () => {
                    toast.error('Geolocation access denied');
                }
            );
        } else {
            toast.error('Geolocation is not supported by this browser.');
        }
    };

    console.log(Useraddress)
   const handleBuyNow = async () => {
    setModalIsOpen(true);

    const storedUser = JSON.parse(localStorage.getItem("bookUser"));
    const email = storedUser.email;
    handleFetchLocation();

    setTimeout(async () => {
        const payload = {
            items: cart,
            totalAmount: total,
            Useraddress,
            email
        };

        const makePaymentRequest = async (retryCount = 0) => {
            try {
                const response = await fetch("https://bookbazaarserver.onrender.com/payment", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    if (retryCount < 1) {
                        return makePaymentRequest(retryCount + 1);
                    } else {
                        throw new Error('Failed after retrying');
                    }
                }

                const data = await response.json();
                if (data.success && data.url) {
                    window.location.href = data.url;
                } else {
                    toast.error(data.error || 'An error occurred. Please try again.');
                }
            } catch (error) {
                toast.error(`Payment failed: ${error.message}`);
            }
        };

        await makePaymentRequest();
    }, 6000);
};



    return (
        <>
            <div className="cart-container min-h-[100vh] flex flex-col justify-center items-center overflow-y-auto mx-auto bg-custom-dark shadow-lg p-4">
                <Toaster />
                <div className='flex justify-center items-center w-full mb-4'>
                    <h2 className="text-3xl font-bold text-white">Your Cart</h2>
                </div>
                {cart.length === 0 ? (
                    <>
                        <Lottie animationData={empty} className='h-[150px]' />
                        <p className="text-center text-gray-400">Your cart is empty.</p>
                        <button className='rounded-lg mt-3 p-2 animate-pulse font-bold bg-white text-spotify-accent' onClick={() => navigate("/")}>Shop Now</button>
                    </>
                ) : (
                    <div className="w-full">
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
                                <p className="text-xl font-bold text-blue-500"><span className='flex justify-center items-center'><FaRupeeSign />{total}</span></p>
                            </div>
                        </div>
                        <button onClick={handleBuyNow} className='bg-white mt-4 w-full rounded-lg p-3 text-black font-semibold'>Buy Now</button>
                    </div>
                )}
            </div>
            <Modal open={modalIsOpen} closable={false} footer={null} className='flex justify-center items-center'>
        {isLoading && (
          <Lottie animationData={addressAnimation} style={{ width: 200, height: 300 }} />
        )}
      </Modal>
        </>
    );
};

export default Cart;
