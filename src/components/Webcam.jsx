import React from 'react';
import Webcam from 'react-webcam';

export const Webcamera = ({webcamRef}) => {
  return (
    <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480
          }} />
  )
}
