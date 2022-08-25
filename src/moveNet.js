// import * as poseDetection from '@tensorflow-models/pose-detection';
// // import * as tf from '@tensorflow/tfjs-core';
// // Register one of the TF.js backends.
// import '@tensorflow/tfjs-backend-webgl';
// // import '@tensorflow/tfjs-backend-wasm';
// import { drawKeypoints, drawSkeleton } from './utilities';
// // import { Canvas } from './components/Canvas';
// // import { Webcamera } from './components/Webcam';

 


//   const runMovenet = async () => {
//     const model = await poseDetection.SupportedModels.MoveNet;
//     const detector = await poseDetection.createDetector(model);
//     // Set Interval
//     setInterval(() => {
//       detect(detector)
//     }, 100)
//   };

//   const detect = async (detector) => {
//     if (typeof videoRef.current !== 'undefined' && videoRef.current !== null && videoRef.current.video.readyState === 4) {
//       // Get Video Properties
//       const video = videoRef.current.video;
//       const videoWidth = videoRef.current.video.videoWidth;
//       const videoHeight = videoRef.current.video.videoHeight;

//       // Set Video Width
//       videoRef.current.video.width = videoWidth;
//       videoRef.current.video.height = videoHeight;
//       // const pose = await net.estimateSinglePose(video);

//       let poses = await detector.estimatePoses(video);
//       // console.log(poses[0].keypoints);

//       let right_shoulder = poses[0].keypoints[6];
//       let right_elbow = poses[0].keypoints[8];
//       let right_wrist = poses[0].keypoints[10];
//       // console.log(poses[0].keypoints.length);

//       drawCanvas(poses[0], video, videoWidth, videoHeight, canvasRef);
//       calculateAngle(right_shoulder, right_elbow, right_wrist, canvasRef);
//     }
//   }
    
//   const calculateAngle = (A, B, C, canvas) => {
//     let a = [A.x - B.x, A.y - B.y];
//     let b = [A.x - C.x, A.y - C.y];
//     // console.log(A, B);
//     let distA = Math.abs(Math.sqrt(a[0] * a[0] + a[1] * a[1]));
//     let distB = Math.abs(Math.sqrt((b[0] * b[0]) + (b[1] * b[1])));
//     // console.log(distA, distB);
//     let angle = Math.acos(((a[0] * b[0]) + (a[1] * b[1])) / (distA * distB))
//     // angle = radians_to_degrees(angle)

//     const ctx = canvas.current.getContext('2d');
//     ctx.font = "30px Arial";
//     ctx.fillText(angle * 100, 10, 50);
//     // console.log(angle);
//   }

//   const drawCanvas = (poses, video, videoWidth, videoHeight, canvas) => {
//     const ctx = canvas.current.getContext('2d');
//     canvas.current.width = videoWidth;
//     canvas.current.height = videoHeight;

//     drawKeypoints(poses.keypoints, 0.5, ctx);
//     drawSkeleton(poses.keypoints, 0.5, ctx);
//   }

//   runMovenet();
