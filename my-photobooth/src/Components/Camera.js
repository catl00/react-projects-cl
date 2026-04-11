import React, { useState, useEffect } from 'react';
import { FaCamera } from "react-icons/fa";

const Camera = ({ videoRef, isCameraStarted, startCamera, mirrored }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  useEffect(() => {
    if (isCameraActive) {
      videoRef.current.play();
    } else {
        const stream = videoRef.current.srcObject; // stops camera when not active
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    }
  }, [isCameraActive, videoRef]);

  const toggleCamera = () => {
    if (isCameraActive) {
      setIsCameraActive(false); // Turn off the camera
    } else {
      startCamera(); // Start the camera
      setIsCameraActive(true); // Set camera active state
    }
  };


  return (
    <div>
      <div>
        <button onClick={toggleCamera}>
            <FaCamera className='camera-icon'/>
        </button>
      </div>
        <video ref={videoRef} className="video" width="800" height="600" style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}/>
    </div>
  );
};

export default Camera;