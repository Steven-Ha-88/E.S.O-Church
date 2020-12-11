import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => (
  // calling onVideoSelect function from App with an argument. without an argument the function will still be called but with no argument to invoke it with.
  <div
    onClick={() => onVideoSelect(video)}
    style={{
      margin: "2px",
      cursor: "pointer",
      display: "flex",
      flexFlow: "row nowrap",
    }}>
    <img
      alt={video.snippet.title}
      className='ui image'
      style={{ cursor: "pointer" }}
      src={video.snippet.thumbnails.medium.url}
    />
    {/* <div className='content'>
      <div className=''>{video.snippet.title}</div>
    </div> */}
  </div>
);

export default VideoItem;
