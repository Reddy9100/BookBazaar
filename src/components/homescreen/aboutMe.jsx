import Lottie from 'lottie-react';
import React from 'react';
import hello from "../../assets/hello.json";
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosMailOpen, IoLogoDropbox } from 'react-icons/io';
import { TypeAnimation } from "react-type-animation";

const storedUser = JSON.parse(localStorage.getItem("bookUser"));
const name = storedUser ? storedUser.name : null;

const AboutMe = () => {
  return (
    <div className='flex flex-col bg-custom-dark h-screen items-start'>
      <div className='bg-gradient-to-r from-black to-white shadow-xl w-full h-[180px] flex items-start justify-start'>
        <Link to="/">
          <Lottie animationData={hello} className='h-[180px] w-[150px]' />
        </Link>
        
        <TypeAnimation 
          sequence={[
            `Book Bazzar Welcomes You `, 1000, // Animate greeting, wait 1s
            `Book Bazzar Welcomes You ${name.toUpperCase()}`, 1000, // Animate name, wait 1s
          ]}
          wrapper="span"
          speed={30} 
          style={{ 
            fontSize: '1em',
            width:"120px" ,
            fontWeight: 'bold',
            color: 'white', 
            textShadow: '4px 3px 4px black',
            alignSelf: 'center',
            fontFamily : "cursive",
            marginRight: '30px',

            transition: 'color 1s ease',
          }}
          repeat={Infinity} // Repeat infinitely
        />
      </div>

      <div className='mt-6 w-full px-6'>
        <div className='bg-white p-2 rounded-lg shadow-lg flex items-center'>
          <IoLogoDropbox className='h-[30px] text-spotify-accent text-[30px]' />
          <h1 className='ml-4 text-xl font-semibold text-gray-800'>Your Orders</h1>
        </div>

        <hr className='my-4 border-t-2 border-gray-300' />

        <div className='bg-white p-2 rounded-lg shadow-lg flex items-center'>
          <IoIosMailOpen className='h-[30px] text-spotify-accent text-[30px]' />
          <h1 className='ml-4 text-xl font-semibold text-gray-800'>Email</h1>
        </div>

        <hr className='my-4 border-t-2 border-gray-300' />

        <div className='flex align-bottom justify-center mt-6'>
          <button className='bg-red-500 text-white w-full py-3 rounded-lg flex items-center justify-center font-bold shadow-lg hover:bg-red-600 transition duration-300'>
            <FaSignOutAlt className='mr-2' /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
