// src/components/ScrollVideoSection.tsx
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import throttle from "lodash.throttle";

interface ScrollVideoSectionProps {
  videoSrc: string;
}

const ScrollVideoSection: React.FC<ScrollVideoSectionProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false); // Track if the video section is active (in view)

  // Update video’s currentTime based on scroll
  const handleScroll = useCallback(() => {
    if (!videoRef.current || !containerRef.current || !isActive) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how much of the container has been scrolled
    const scrollProgress =
      (windowHeight - rect.top) / (windowHeight + containerRef.current.offsetHeight);
    const clampedScroll = Math.min(Math.max(scrollProgress, 0), 1);

    const currentTime = clampedScroll * duration;

    // Avoid setting currentTime if video is not ready
    if (!isNaN(currentTime)) {
      videoRef.current.currentTime = currentTime;
    }
  }, [duration, isActive]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Set the duration state once the video metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(videoEl.duration);
    };

    videoEl.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100); // Adjust throttle delay as needed
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    // Initial call to set the video time based on initial scroll
    throttledHandleScroll();
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [handleScroll]);

  // Intersection Observer to activate scroll control when section is in view
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0, // Trigger when any part is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the top of the section aligns with the top of the viewport
          if (entry.boundingClientRect.top === 0) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        } else {
          setIsActive(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex justify-center items-center"
      style={{ height: "300vh" }} // Adjust based on video length and desired scroll sensitivity
    >
      {/* 
        Height of 150vh is adjusted based on your preference.
        It should provide enough scroll space to scrub through the video.
      */}

      {/* Sticky Container for Video */}
      <div
        className="sticky top-0 flex justify-center items-center w-full h-screen bg-transparent"
        style={{ maxWidth: "100vw", overflow: "hidden" }}
      >
        {/* Aspect Ratio Wrapper */}
        <div
          className="relative"
          style={{
            width: "100%", // Make the video take the full width of the container
            height: "100%", // Make the video take the full height of the container
            maxWidth: "100%", // Ensure it doesn't exceed the viewport width
            maxHeight: "100%", // Ensure it doesn't exceed the viewport height
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            style={{
              objectFit: "cover", // Cover the container without maintaining aspect ratio
            }}
            playsInline
            preload="metadata"
            muted // Ensure the video is muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
