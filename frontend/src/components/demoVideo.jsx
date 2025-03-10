import React from 'react'
import '../demoVideo.css';
import demoVideo from '../assets/demoVideo.mp4'; // Import the video file

function DemoVideo() {
  return (
    <div className="demoVideo-container"> {/* Added a container div for potential styling */}
        <video src={demoVideo} className="demo-video" muted controls loop playsInline autoPlay> </video>
    </div>
  )
}

export default DemoVideo