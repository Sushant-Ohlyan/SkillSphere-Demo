import YoutubeApiFetch from '../hooks/VideoFetch.jsx'

import React, { useState} from 'react'

const VideoFetch = () => {
    const [videos, setVideos] = useState([]);

    const handleVideoSearch = (query) => {
        YoutubeApiFetch.searchVideos(query)
            .then((results) => {
                setVideos(results);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            });
    };

  return videos; 
}

export default VideoFetch