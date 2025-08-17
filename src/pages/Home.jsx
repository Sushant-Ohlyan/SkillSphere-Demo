import VideoCard from "../components/VideoCard";
import useTrendingVideos from "../hooks/useTrendingVideo";

const Home = () => {
  const videos = useTrendingVideos();

  return (
    <div>
      <h1>Trending Videos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
