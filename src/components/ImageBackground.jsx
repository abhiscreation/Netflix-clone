import React from "react";
import PropTypes from "prop-types";
import "../signup.css";

const ImageBackground = ({ src, children, style, className }) => {
  return (
    <div
      className={`signup-bg-video-wrapper ${className || ''}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

ImageBackground.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ImageBackground;
