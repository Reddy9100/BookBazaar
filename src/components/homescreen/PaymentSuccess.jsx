import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import payement from "../../assets/three.json";
import successSound from "../../assets/paytm.mp3";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(successSound);
    audio.play();

    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className='flex h-screen justify-center items-center'>
      <Link to="/successPayment">
        <Lottie animationData={payement} width={200} height={300} />
      </Link>
    </div>
  );
};

export default PaymentSuccess;
