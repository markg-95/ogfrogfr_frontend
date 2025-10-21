import React from 'react';
import bgImage from '../assets/source_zoomed.PNG';
function BackgroundImage(props) {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', // Optional: Adjust as needed
        backgroundRepeat: 'no-repeat', // Optional
        //minHeight: '100', // Optional: Ensure div fills viewport
        minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      {/* Your content here */}
        {props.children}
    </div>
  );
}

export default BackgroundImage;