import React, { useState, useEffect } from 'react';
import './PhotoFrame.css';

const PhotoFrame = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('./assets/profile.jpg');

  useEffect(() => {
    console.log('PhotoFrame mounted');
    
    const imagePaths = [
      './assets/profile.jpg',
      '/assets/profile.png', 
    ];
    
    const testImage = new Image();
    testImage.onload = () => {
      console.log('Found working image:', imagePaths[0]);
      setImageSrc(imagePaths[0]);
    };
    testImage.onerror = () => {
      console.log('Testing alternative images...');
      // Try next image if first fails
      imagePaths.slice(1).forEach((path, index) => {
        const img = new Image();
        img.onload = () => {
          console.log('Found working image:', path);
          setImageSrc(path);
        };
        img.src = path;
      });
    };
    testImage.src = imagePaths[0];
  }, []);

  const handleImageError = () => {
    console.error('Image failed to load:', imageSrc);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', imageSrc);
  };

  return (
    <div className="cute-photo-container">
      {/* Decorative elements */}
      <div className="decoration decoration-1">✨</div>
      <div className="decoration decoration-2">🌸</div>
      <div className="decoration decoration-3">💫</div>
      <div className="decoration decoration-4">🎀</div>
      
      {/* Main photo frame */}
      <div 
        className={`photo-frame ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Frame border with gradient */}
        <div className="frame-border">
          {/* Inner decorative border */}
          <div className="inner-border">
            {/* Photo container */}
            <div className="photo-container">
              {!imageError ? (
                <img 
                  src={imageSrc}
                  alt="Nawra Danisha" 
                  className="profile-photo"
                  loading="lazy"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              ) : (
                <div className="photo-fallback">
                  <div className="fallback-icon">📸</div>
                  <div className="fallback-text">Nawra</div>
                  <div className="fallback-subtitle">Photo not found</div>
                </div>
              )}
              
              {/* Overlay effects */}
              <div className="photo-overlay">
                <div className="sparkle sparkle-1">✨</div>
                <div className="sparkle sparkle-2">⭐</div>
                <div className="sparkle sparkle-3">💝</div>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="corner-decoration corner-tl">🌺</div>
            <div className="corner-decoration corner-tr">🦋</div>
            <div className="corner-decoration corner-bl">🌿</div>
            <div className="corner-decoration corner-br">🌸</div>
          </div>
        </div>
        
        {/* Name tag */}
        <div className="name-tag">
          <div className="name-text">Nawra Danisha</div>
          <div className="title-text">Psychology Student</div>
        </div>
      </div>
      
      {/* Floating hearts */}
      <div className="floating-heart heart-1">💝</div>
      <div className="floating-heart heart-2">💖</div>
      <div className="floating-heart heart-3">💕</div>
    </div>
  );
};

export default PhotoFrame;