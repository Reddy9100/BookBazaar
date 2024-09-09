import React, { useRef } from 'react';
import netflix from '../../assets/netflix.svg';
import hotstar from '../../assets/hotstar.svg';
import prime from '../../assets/prime.svg';
import aha from '../../assets/aha.svg';
import sony from '../../assets/sony.svg';
import voot from '../../assets/voot.svg';
import mxplayer from '../../assets/mxplayer.svg';
import zee from '../../assets/zee.svg';
import { useNavigate } from 'react-router-dom';

const PlatformApp = () => {
  const navigate = useNavigate();
  const gridSectionRef = useRef(null);

  const handleNavigation = (platform) => {
    switch (platform) {
      case 'netflix':
        navigate('/ottNetflix');
        break;
      case 'hotstar':
        navigate('/ottHotstar');
        break;
      case 'prime':
        navigate('/ottPrime');
        break;
      case 'aha':
        navigate('/ottAha');
        break;
      case 'sony':
        navigate('/ottSony');
        break;
      case 'voot':
        navigate('/ottVoot');
        break;
      case 'mxplayer':
        navigate('/ottMxplayer');
        break;
      case 'zee':
        navigate('/ottZee');
        break;
      default:
        console.log('No route defined for this platform');
        break;
    }

    // Scroll to the grid section after navigating
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#0E0E12] p-4'>
      <h1 className='text-[#ECEDF0] font-semibold text-[18px] mb-4'>Platform Apps</h1>
      
      {/* Grid Section */}
      <div
        ref={gridSectionRef}
        className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]'
      >
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('netflix')}
        >
          <img src={netflix} alt='netflix' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('hotstar')}
        >
          <img src={hotstar} alt='hotstar' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('prime')}
        >
          <img src={prime} alt='prime' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('aha')}
        >
          <img src={aha} alt='aha' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('sony')}
        >
          <img src={sony} alt='sony' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('voot')}
        >
          <img src={voot} alt='voot' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('mxplayer')}
        >
          <img src={mxplayer} alt='mxplayer' className='h-[18px] w-[69px]' />
        </div>
        <div
          className='bg-[#222227] flex items-center justify-center p-4'
          onClick={() => handleNavigation('zee')}
        >
          <img src={zee} alt='zee' className='h-[22px] w-[22px]' />
        </div>
        <div className='bg-[#222227] flex items-center justify-center p-4'>
          <p className='text-[10px] font-semibold text-[#A9ADB9]'>View More</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformApp;
