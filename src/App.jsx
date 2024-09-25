import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/homescreen/HomeScreen';
import Navbar from './components/Navbar';
import LanguageForm from './components/adminUpload/form';



const App = () => {
  return (
    <Router>
      <div className='font-sans'>
        {/* You can place the Navbar here if it's common across pages */}
        
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<LanguageForm/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
