import React, { useEffect, useRef} from 'react';
import './App.css';

import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
// import * as tf from '@tensorflow/tfjs-core';
import { VideoPlayer } from './components/VideoPlayer';
// import { useVideoLoading } from './hooks/useVideoLoading';
import { CircularProgress } from '@mui/material';
import { drawKeypoints , drawSkeleton } from "./utilities";


function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  // const {loading,videoSrc} = useVideoLoading();
  const loading = false;

  //detectの作成
  const detect = async ( detector ) => {
    if (typeof videoRef.current !== 'undefined' && videoRef.current !== null ) {
      const video = videoRef.current;
      let poses = await detector.estimatePoses(video);

      // console.log(poses[0].keypoints);
      // console.log(video);

      const videoWidth = video.width;
      const videoHeight = video.height;

      let right_shoulder = poses[0].keypoints[6];
      let right_elbow = poses[0].keypoints[8];
      let right_wrist = poses[0].keypoints[10];

      drawCanvas(poses[0], video, videoWidth, videoHeight, canvasRef);
      calculateAngle(right_shoulder, right_elbow, right_wrist, canvasRef);
    }
  }

  const calculateAngle = (A, B, C, canvas) => {
    let a = [A.x - B.x, A.y - B.y];
    let b = [A.x - C.x, A.y - C.y];
    // console.log(A, B);
    let distA = Math.abs(Math.sqrt(a[0] * a[0] + a[1] * a[1]));
    let distB = Math.abs(Math.sqrt((b[0] * b[0]) + (b[1] * b[1])));
    // console.log(distA, distB);
    let angle = Math.acos(((a[0] * b[0]) + (a[1] * b[1])) / (distA * distB))
    // angle = radians_to_degrees(angle)

    const ctx = canvas.current.getContext('2d');
    ctx.font = "20px Arial";
    ctx.fillText(angle * 100, 10, 50);
    // console.log(angle);
  }

  //movenet読み込み
  const runMovenet = async () => {
    const model =  poseDetection.SupportedModels.MoveNet;
    const detector = await poseDetection.createDetector(model);
    setInterval(() => {
      detect(detector);
    }, 100)
  };

  const drawCanvas = (poses, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    // console.log(video);
    console.log(poses.keypoints);
  
    drawKeypoints(poses.keypoints, 0.5, ctx);
    drawSkeleton(poses.keypoints, 0.5, ctx);

  }

  useEffect(() => {
    runMovenet();
  // eslint-disable-next-line
  }, []);
  
  return (
  <>
      {
        loading ? (
          <div>
          <CircularProgress />
          <p>Now Loading...</p>
          </div>
        ): (
        // <VideoPlayer
        //       videoRef={videoRef}
        //       videoSrc={videoSrc}
        //   />
          <div>
              <VideoPlayer
                videoRef={ videoRef }
                videoSrc={'img_3327.mp4'}
              />
              <canvas
                ref={canvasRef}
              >キャンバスが読み込めていません</canvas>  
          </div>
      )
    }
  </>  
  );
}

export default App;
