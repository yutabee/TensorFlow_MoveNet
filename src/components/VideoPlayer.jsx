import React, { memo } from 'react'

export const VideoPlayer = memo(({ videoRef, videoSrc }) => {
  return (
      <div className="App">
      <video
        ref={videoRef}
              controls
              muted
              width='300px'
              height='300px'
          >
              <source src={videoSrc}></source>
      </video>
    </div>
  )
})

 