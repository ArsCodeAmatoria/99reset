"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div 
      className={`relative rounded-2xl overflow-hidden bg-card border-2 border-border/50 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        onClick={toggleVideo}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause buttons with AnimatePresence */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            key="play"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={toggleVideo}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
            aria-label="Play video"
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-10 w-10 text-white ml-1" fill="white" />
            </motion.div>
          </motion.button>
        )}
        
        {isPlaying && (
          <motion.button
            key="pause"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={toggleVideo}
            className="absolute top-4 right-4 p-3 rounded-full bg-black/70 hover:bg-black/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Pause video"
          >
            <Pause className="h-6 w-6 text-white" fill="white" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

