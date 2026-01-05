"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
  totalItems?: number;
}

export function ScrollStackItem({ children, index = 0, totalItems = 1 }: ScrollStackItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much the card has scrolled up
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms based on scroll progress
  const scale = 1 - (scrollProgress * 0.03 * (totalItems - index - 1));
  const translateY = scrollProgress * -10 * (totalItems - index - 1);

  return (
    <div
      ref={itemRef}
      className="sticky w-full transition-transform duration-100"
      style={{
        top: "340px",
        transform: `scale(${Math.max(0.95, scale)}) translateY(${translateY}px)`,
        zIndex: index + 1,
      }}
    >
      {children}
    </div>
  );
}

interface ScrollStackProps {
  children: ReactNode;
}

export default function ScrollStack({ children }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-col gap-6">
        {childrenArray.map((child, index) => {
          if (React.isValidElement<ScrollStackItemProps>(child) && child.type === ScrollStackItem) {
            return React.cloneElement(child, {
              key: index,
              index,
              totalItems,
            });
          }
          return (
            <ScrollStackItem key={index} index={index} totalItems={totalItems}>
              {child}
            </ScrollStackItem>
          );
        })}
      </div>
    </div>
  );
}
