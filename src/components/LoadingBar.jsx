import React from "react";

const LoadingBar = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '4px',
    zIndex: 9999,
    pointerEvents: 'none',
  }}>
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        background: 'linear-gradient(90deg, #fff 0%, #e50914 100%)',
        width: '0%',
        animation: 'loading-bar-grow 1.2s linear forwards',
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: '-4px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 0 12px 4px #fff',
          animation: 'loading-dot-move 1.2s linear forwards',
        }} />
      </div>
    </div>
    <style>{`
      @keyframes loading-bar-grow {
        0% { width: 0%; }
        100% { width: 100%; }
      }
      @keyframes loading-dot-move {
        0% { left: 0; }
        100% { left: calc(100vw - 12px); }
      }
    `}</style>
  </div>
);

export default LoadingBar; 