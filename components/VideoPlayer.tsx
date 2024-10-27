// components/VideoPlayer.tsx

import React from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
  onPlay?: () => void;
  onEnd?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, onPlay, onEnd }) => (
  <video
    autoPlay
    loop
    muted
        playsInline
        
    preload="auto"
    onPlay={onPlay}
    onEnded={onEnd}
    className="h-full w-full object-cover object-top"
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the {title} video tag.
  </video>
);

export default VideoPlayer;
