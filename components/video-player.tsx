"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
}

export function VideoPlayer({ videoUrl, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={`relative rounded-lg overflow-hidden bg-card border border-border ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        onClick={toggleVideo}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play button overlay when paused */}
      {!isPlaying && (
        <button
          onClick={toggleVideo}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
          aria-label="Play video"
        >
          <div className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all group-hover:scale-110">
            <Play className="h-10 w-10 text-white ml-1" fill="white" />
          </div>
        </button>
      )}
      
      {/* Pause button when playing */}
      {isPlaying && (
        <button
          onClick={toggleVideo}
          className="absolute top-4 right-4 p-3 rounded-full bg-black/70 hover:bg-black/90 transition-colors"
          aria-label="Pause video"
        >
          <Pause className="h-6 w-6 text-white" fill="white" />
        </button>
      )}
    </div>
  );
}

