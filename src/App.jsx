import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BooksProvider } from './components/Context/BooksContext';
import { CartProvider } from './components/Context/CartContext';
import Lottie from 'lottie-react';
import loadingAnimation from "./assets/book.json";
import AboutMe from './components/homescreen/aboutMe';
import Orders from './components/homescreen/Orders';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './Footer';

const HomeScreen = lazy(() => import('./components/homescreen/HomeScreen'));
const Login = lazy(() => import('./components/login/Login'));
const OtpVerify = lazy(() => import('./components/login/OtpVerify'));
const Cart = lazy(() => import('./components/homescreen/Cart'));
const Search = lazy(() => import('./components/homescreen/Search'));
const PaymentSuccess = lazy(() => import('./components/homescreen/PaymentSuccess'));

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const shouldHideComponents = ['/login', '/otp'].includes(location.pathname) || location.pathname === '*';

  return (
    <div className='font-sans'>
      {!shouldHideComponents && <Navbar />}
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/otp' element={<OtpVerify />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<ProtectedRoute><AboutMe /></ProtectedRoute>} />
            <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path='/search' element={<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path='/successPayment' element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
      {!shouldHideComponents && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <BooksProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </BooksProvider>
);

const Loader = () => (
  <div className='flex justify-center items-center h-screen'>
    <Lottie 
      animationData={loadingAnimation} 
      width={200} 
      height={200} 
    />
  </div>
);

export default WrappedApp;
