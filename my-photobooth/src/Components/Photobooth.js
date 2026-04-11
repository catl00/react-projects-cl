import React, { useRef, useState } from 'react';
import Camera from './Camera';
import CapturePhoto from './CapturePhoto';
import Display from './Display';
import capturePhoto from './Mirror';

const Photobooth = () => {
  // refs to access the video and canava elements
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  // manage the captured image URL and camera status
  const [imageURL, setImageURL] = useState('');
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  // mirror preview (CSS) and whether captured image should be mirrored
  const [mirrored, setMirrored] = useState(true);
  const [mirrorCapture, setMirrorCapture] = useState(false);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraStarted(true);
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
    
  };
  // Take the photo
  const takePhoto = () => {
    const dataURL = capturePhoto({ videoRef, canvasRef, mirrorCapture });
    if (dataURL) setImageURL(dataURL);
  };

  // Save the captured photos
  const savePhoto = () => {
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'photo.png';
    link.click();
  };

  return (
    <div className="App-header">
        <div>
            <div>
                <h1>Photobooth</h1>
                <p>Get ready to take your picture! Click on the Camera Icon to turn on/off your camera and click "Take a Pic!"</p>
                <p>Press start to take your photos, you have 3 seconds to pose!</p>
            </div>
            <div>
            <Camera videoRef={videoRef} isCameraStarted={isCameraStarted} startCamera={startCamera} mirrored={mirrored} />
            </div>
            <div>
                <div style={{marginTop: 8, display: 'flex', gap: 12, alignItems: 'center'}}>
                    <button onClick={() => setMirrored(m => !m)} className="button">
                      {mirrored ? 'Unmirror Preview' : 'Mirror Preview'}
                    </button>
                    <label style={{display: 'flex', alignItems: 'center', gap: 8}}>
                      <input type="checkbox" checked={mirrorCapture} onChange={() => setMirrorCapture(m => !m)} />
                      Save mirrored image
                    </label>
                </div>
                <CapturePhoto takePhoto={takePhoto}/>
            </div>
        </div>
        <div>
            <canvas ref = {canvasRef} style={{display: 'none'}}/>
            {imageURL && <Display imageURL={imageURL} savePhoto={savePhoto}/>}
        </div>
    </div>
  );
};

export default Photobooth;