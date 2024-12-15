import PropTypes from 'prop-types';
import { useState } from 'react';

const bg = 'https://github.com/jaime-hndz/jportfolio/raw/refs/heads/main/public/background.mp4'

export const BaseSection = ({ children, id }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const colors = {
    home: 'bg-black',
    about: "bg-gradient-to-b from-black/50 to-slate-900/70 ",
    projects: "bg-gradient-to-b from-slate-900/70 to-slate-900",
    contact: "bg-slate-900",
  };

  return (
    <div
      className={`${colors[id]} w-full h-screen flex items-center justify-center relative`}
      id={id}
    >
      {id === 'home' && (
        <>
          {!isVideoLoaded && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/src/resources/background.jpg')" }}
            />
          )}

          <video
            className={`fixed top-0 left-0 w-full h-full object-cover ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={bg} type="video/mp4" />
          </video>
          <div className='h-screen w-full overflow-hidden bg-black/50 absolute'></div>
        </>
      )}

      {id !== 'home' && <div className="absolute top-0 left-0 w-full h-full" />}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

BaseSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
};