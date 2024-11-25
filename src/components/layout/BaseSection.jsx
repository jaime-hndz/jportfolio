import PropTypes from 'prop-types';
import { useState } from 'react';

export const BaseSection = ({ children, bgcolor, id }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const colors = {
    orange: '', // Lo manejaremos de forma especial
    red: "bg-red-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
  };

  return (
    <div
      className={`${colors[bgcolor]} w-full h-screen flex items-center justify-center relative`}
      id={id}
    >
      {bgcolor === 'orange' && (
        <>
          {!isVideoLoaded && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/src/resources/background.jpg')" }}
            />
          )}

          <video
            className={`absolute top-0 left-0 w-full h-full object-cover ${
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

      {bgcolor !== 'orange' && <div className="absolute top-0 left-0 w-full h-full" />}
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