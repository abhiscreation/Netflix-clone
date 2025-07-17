import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../signup.css";

const GlobalVideo = ({ src, children, playbackRate = 1 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="signup-bg-video-wrapper">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="signup-bg-video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

GlobalVideo.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  playbackRate: PropTypes.number
};

export default GlobalVideo;
