import React from 'react'
import HomeScreen from './components/homescreen/HomeScreen'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='font-sans'>
      <HomeScreen/>
      <Navbar/>
    </div>
  )
}

export default App