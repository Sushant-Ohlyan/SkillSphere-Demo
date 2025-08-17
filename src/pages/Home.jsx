import VideoCard from "../components/VideoCard";
import useTrendingVideos from "../hooks/useTrendingVideo";

const Home = () => {
  const videos = useTrendingVideos();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 Trending Videos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
