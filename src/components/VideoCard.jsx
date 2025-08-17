import React from "react";

const VideoCard = ({ video }) => {
  if (!video) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "8px" }}>
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <a href={video.url} target="_blank" rel="noreferrer">
        Watch
      </a>
      <button style={{ marginLeft: "10px" }}>Watch Later</button>
    </div>
  );
};

export default VideoCard;
