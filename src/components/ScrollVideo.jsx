"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it only runs on the client
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    video.pause();

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const total = rect.height;

      const scrollProgress = Math.min(Math.max(visible / total, 0), 1);

      video.currentTime = scrollProgress * video.duration;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-black"
      data-aos="fade-up"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/scroll-video.mp4"
        className="w-full h-full object-cover"
        muted={muted}
        preload="auto"
        loop
      />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-5 right-5 bg-white dark:bg-gray-800 text-primary dark:text-secondary p-3 rounded-full shadow-lg focus:outline-none"
      >
        {muted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </div>
  );
};

export default ScrollVideo;
