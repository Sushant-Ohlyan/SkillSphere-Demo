import axios from "axios";

const API_KEY = "AIzaSyANkobyfVjRe1JgWtET35xHDS_gpVQcS6o"; // replace with your real key

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
