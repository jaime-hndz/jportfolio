import PropTypes from 'prop-types';
import { useState } from 'react';

export const BaseSection = ({ children, id }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const colors = {
    home: 'bg-black', // Lo manejaremos de forma especial
    about: "bg-gradient-to-t from-slate-900 from-70%",
    projects: "bg-gradient-to-b from-slate-900 to-gray-900",
    contact: "bg-gradient-to-b from-gray-900 to-zinc-900",
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
            src="/src/resources/background.mp4"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          />
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
  bgcolor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};