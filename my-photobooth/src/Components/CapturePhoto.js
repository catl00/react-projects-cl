import React, { useState }  from 'react';

const CapturePhoto = ({takePhoto}) => {
  const [countdown, setCountdown] = useState(0); // State for countdown
  const [isCountingDown, setIsCountingDown] = useState(false); // State to track countdown status

  const startCountdown = () => {
    setCountdown(3); // countdown 3 secs
    setIsCountingDown(true);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          takePhoto(); // takes the photo when countdown to 0
          setIsCountingDown(false);
          return 0; // resets countdown
        }
        return prev -1; // decrease countdown
      });
    }, 1000); // Update every second
  }

  return (
    <div>
      <button onClick={startCountdown} disabled={isCountingDown} className="button" >
        {isCountingDown ? `${countdown}` : 'Start!'}
      </button>
      {/* displays countdown */}
      {isCountingDown && <h2>{countdown}</h2>} 
    </div>

  );  
};

export default CapturePhoto;