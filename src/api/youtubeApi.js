// src/api/youtubeApi.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTrendingVideos = async () => {
  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: "programming",
        type: "video",
        maxResults: 9,
        key: API_KEY,
      },
    });

    return response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (error) {
    if (error.response) {
      // API responded with an error
      console.error("YouTube API Error:", JSON.stringify(error.response.data, null, 2));
      alert("API error: " + JSON.stringify(error.response.data, null, 2));
    } else {
      // Network or other error
      console.error("Network/API Error:", error.message);
    }
    return [];
  }
};
