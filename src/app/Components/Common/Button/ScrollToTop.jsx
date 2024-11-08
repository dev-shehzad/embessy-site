"use client";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
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
  const scrollToTop = () => {
    const scrollDuration = 800; // Set the scroll duration in milliseconds
    const startTime = performance.now();
    const startPosition = window.scrollY;
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const scrollFraction = Math.min(elapsedTime / scrollDuration, 1);
      const scrollPosition = startPosition * (1 - scrollFraction);

      window.scrollTo(0, scrollPosition);

      if (scrollFraction < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${showScrollButton ? "show" : "hide"}`}
      aria-label="Scroll to Top"
    >
      <FaChevronUp size={24} /> {/* Using React Icon */}
    </button>
  );
};

export default ScrollToTop;
