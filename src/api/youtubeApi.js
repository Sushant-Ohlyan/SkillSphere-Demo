import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export const fetchTrendingVideos = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=programming&type=video&maxResults=9&type=video&key=${API_KEY}`
  );

  return response.data.items.map((item) => ({
    id: item.id.videoId, // always use videoId for uniqueness
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  }));
};
