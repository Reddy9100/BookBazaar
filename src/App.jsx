import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeScreen from './components/homescreen/HomeScreen';
import Navbar from './components/Navbar';
import LanguageForm from './components/adminUpload/form';
import Login from './components/login/Login';
import OtpVerify from './components/login/OtpVerify';
import { BooksProvider } from './components/Context/BooksContext'; // Import the BooksProvider
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/homescreen/Cart';

import PaymentSuccess from './components/homescreen/PaymentSuccess';

const App = () => {
  return (
    <Router>
      <BooksProvider>
        <CartProvider>
          <div className='font-sans'>
            <ConditionalNavbar />
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route exact path='/otp' element={<OtpVerify />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/cart' element={<Cart/>}/>
              <Route exact path='/successPayment' element={<PaymentSuccess/>}/>
            </Routes>
          </div>
        </CartProvider>
      </BooksProvider>
    </Router>
  );
};


// Component to conditionally render Navbar based on the current route
const ConditionalNavbar = () => {
  const location = useLocation();

  // Only show Navbar on the HomeScreen
  return location.pathname === '/' || location.pathname === "/cart" ? <Navbar /> : null;
};

export default App;
