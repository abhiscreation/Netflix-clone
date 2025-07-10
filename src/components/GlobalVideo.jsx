import React from "react";
import PropTypes from "prop-types";
import "../signup.css";


const GlobalVideo = ({ src, children }) => {
  return (
    <div className="signup-bg-video-wrapper">
      <video autoPlay loop muted playsInline className="signup-bg-video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

GlobalVideo.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default GlobalVideo;
