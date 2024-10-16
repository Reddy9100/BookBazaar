import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BooksProvider } from './components/Context/BooksContext';
import { CartProvider } from './components/Context/CartContext';
import Lottie from 'lottie-react';
import loadingAnimation from "./assets/book.json";

const HomeScreen = lazy(() => import('./components/homescreen/HomeScreen'));
const LanguageForm = lazy(() => import('./components/adminUpload/form'));
const Login = lazy(() => import('./components/login/Login'));
const OtpVerify = lazy(() => import('./components/login/OtpVerify'));
const Cart = lazy(() => import('./components/homescreen/Cart'));
const PaymentSuccess = lazy(() => import('./components/homescreen/PaymentSuccess'));

const App = () => {
  return (
    <Router>
      <BooksProvider>
        <CartProvider>
          <div className='font-sans'>
            <ConditionalNavbar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route exact path='/' element={<LoadWithDelay component={<HomeScreen />} />} />
                <Route exact path='/otp' element={<LoadWithDelay component={<OtpVerify />} />} />
                <Route exact path='/login' element={<LoadWithDelay component={<Login />} />} />
                <Route exact path='/cart' element={<LoadWithDelay component={<Cart />} />} />
                <Route exact path='/successPayment' element={<LoadWithDelay component={<PaymentSuccess />} />} />
              </Routes>
            </Suspense>
          </div>
        </CartProvider>
      </BooksProvider>
    </Router>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname === '/' || location.pathname === "/cart" ? <Navbar /> : null;
};

const LoadWithDelay = ({ component }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [component]);

  return loading ? (
    <Loader />
  ) : (
    component
  );
};

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Lottie 
        animationData={loadingAnimation} 
        width={200} 
        height={200} 
      />
    </div>
  );
};

export default App;
