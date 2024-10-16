import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Toaster, toast } from 'react-hot-toast';
import { Modal } from 'antd';
import Lottie from 'lottie-react';
import addressAnimation from '../../assets/two.json';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [address, setAddress] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);

    
    const locationFetchTimeout = setTimeout(() => {
      handleFetchLocation();
    }, 4000);

    return () => clearTimeout(locationFetchTimeout); 
  }, []);

  const fetchAddress = async (lat, lon) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    const response = await fetch('https://bookbazaarserver.onrender.com/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentMethodId: paymentMethod.id,
        amount: totalAmount,
        address,
      }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success('Payment successful!');
      navigate("/successPayment")
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="bg-custom-dark text-orange-500 mx-auto p-6 border h-screen flex flex-col justify-center items-center shadow-md">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Items</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in cart</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center border-b border-gray-200 pb-2">
                  <img src={item.picture} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <ul className="flex-grow">
                    <li className="block font-medium">{item.name}</li>
                    <li className="text-white font-bold">Price: ₹{item.price}</li>
                    <li className="text-white font-bold">Quantity: {item.quantity}</li>
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold  mb-1">Total Amount:</label>
          <input type="text" value={`₹${totalAmount}`} readOnly className="w-full border border-gray-300 rounded-md p-2" />
          <label className="block text-white font-bold  mb-1">Address:</label>
          <input type="text" value={address} contentEditable={true} className="w-full border border-gray-300 rounded-md p-2" />
          
        </div>
        <div className="mb-4 text-white">
          <CardElement
            options={{
              style: {
                base: {
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontWeight: '500',
                  lineHeight: '24px',
                  '::placeholder': {
                    color: 'white',
                  },
                },
                invalid: {
                  color: '#1ED760',
                  iconColor: '#1ED760',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Pay Now
        </button>
      </form>

      <Modal open={modalIsOpen} closable={false} footer={null} className='flex justify-center items-center'>
        {isLoading && (
          <Lottie animationData={addressAnimation} style={{ width: 200, height: 300 }} />
        )}
      </Modal>
    </div>
  );
};

export default PaymentForm;
