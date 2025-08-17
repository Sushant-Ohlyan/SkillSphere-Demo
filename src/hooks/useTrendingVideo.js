import { useEffect, useState } from "react";
import { fetchTrendingVideos } from "../api/youtubeApi";

export default function useTrendingVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchTrendingVideos().then(setVideos);
  }, []);

  return videos;
}
