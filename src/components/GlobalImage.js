import React from 'react';
import PropTypes from 'prop-types';
import './GlobalImage.css';

const GlobalImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  onClick,
  asBackground = false,
  children,
}) => {
  if (asBackground) {
    return (
      <div
        className={`global-image-bg ${className || ''}`}
        style={{
          backgroundImage: `url(${src})`,
          ...style,
        }}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`global-image ${className || ''}`}
      style={style}
      onClick={onClick}
      loading="lazy"
    />
  );
};

GlobalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  asBackground: PropTypes.bool,
  children: PropTypes.node,
};

export default GlobalImage;
