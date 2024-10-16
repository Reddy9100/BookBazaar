import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App.jsx';
import 'antd/dist/reset.css';
import './index.css';



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </StrictMode>
);
