"use client";
import React, { useState, useEffect } from "react";
const CircleImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Update scroll position on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowScrollButton(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-circle absolute bottom-[30%] z-0 pointer-events-none pixFadeRight"
      style={{
        visibility: "visible",
        animationName: "pixFadeRight",
        transform: `translateY(${scrollPosition * 0.2}px)`, // Scroll-based movement
      }}
    >
      <img src="/circle2.png" alt="circle" className="transform" />
    </div>
  );
};

export default CircleImage;
