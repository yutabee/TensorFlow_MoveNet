import React, { useEffect, useRef } from 'react';
import './App.css';


function App() {
  // const videoRef = useRef(null);
  // const canvasRef = useRef(null);

  const videoRef = useRef(null);
  
    useEffect(() => {
        videoRef.current?.play();
    }, []);

    return (
    <div className="App">
      {/*  <Webcamera webcamRef={webcamRef}/>
        <Canvas canvasRef={canvasRef} /> */}
   
        <video controls muted ref={videoRef} height='400' width='400'>
          <source src="IMG_3469.MOV" type="video/mov"></source>
        </video>
    </div>
  );
}

export default App;
