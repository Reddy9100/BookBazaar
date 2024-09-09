import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/homescreen/HomeScreen';
import Navbar from './components/Navbar';
import OTTHomeScreen from './components/streamingScreen/HomeScreen';
import NetflixComponent from './components/streamingScreen/netflix';
import HotstarComponent from './components/streamingScreen/Hotstar';
import PrimevideoComponent from './components/streamingScreen/Prime';



const App = () => {
  return (
    <Router>
      <div className='font-sans'>
        {/* You can place the Navbar here if it's common across pages */}
        
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/OttHome' element={<OTTHomeScreen />} />
          <Route exact path='/ottNetflix' element={<NetflixComponent/>}/>
          <Route exact path='/OttHotstar' element={<HotstarComponent/>}/>
          <Route exact path='/ottPrime' element={<PrimevideoComponent/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
