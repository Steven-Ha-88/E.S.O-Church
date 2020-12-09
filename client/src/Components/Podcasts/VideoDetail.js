import React from "react";
import "./styles.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log("LOLOL", video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column nowrap",
      }}>
      <button className='latest-button'>LATEST</button>
      <div className='ui embed'>
        <iframe
          allowFullScreen='allowFullScreen'
          title='video player'
          src={videoSrc}
        />
      </div>
      <div className='ui segment'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <a href='https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw'>
          Click here to view all of our podcasts!
        </a>
      </div>
    </div>
  );
};

export default VideoDetail;
