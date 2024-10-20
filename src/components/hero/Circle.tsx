"use client"
import React, { useEffect, useRef } from "react";
import "./Circle.css";
import pop from  "../../app/assets/xoxo.png"; // Use Work.css for the styles

// Define a type for the plot object
interface Plot {
  elm: HTMLDivElement;
  setDimensions: (x: number, y: number) => void;
  position: (x: number, y: number, centered?: boolean) => void;
  setBackground: (col: string) => void;
  rotate: (str: string) => void;
  content: (content: string) => void;
  round: (round: boolean) => void;
}

// Helper function to create a plot
const createPlot = (display: HTMLDivElement): Plot => {
  const elm = document.createElement("div");
  elm.style.position = "absolute";
  display.appendChild(elm);

  return {
    elm,
    setDimensions(x: number, y: number) {
      elm.style.width = `${x}px`;
      elm.style.height = `${y}px`;
    },
    position(x: number, y: number, centered = true) {
      const xoffset = centered ? 40 / 2 : 0; // 40 is the width/height of the plot element
      const yoffset = centered ? 42 / 2 : 0;
      elm.style.left = `${x - xoffset}px`;
      elm.style.top = `${y - yoffset}px`;
    },
    setBackground(col: string) {
      elm.style.background = col;
    },
    rotate(str: string) {
      elm.style.transform = `rotate(${str})`;
    },
    content(content: string) {
      elm.innerHTML = content;
    },
    round(round: boolean) {
      elm.style.borderRadius = round ? "50%/50%" : "";
    },
  };
};

const Circle: React.FC = () => {
  const displayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const display = displayRef.current;
    if (!display) return; // Exit if ref is null

    const message = " EAT CODE REPEAT";
    const plots = message.length;
    const increase = (Math.PI * 2) / plots;
    let angle = -Math.PI;
    const plotcache: Plot[] = [];

    for (let i = 0; i < plots; i++) {
      const plot = createPlot(display);
      plot.content(message.substr(i, 1));
      plot.setDimensions(40, 40);
      plotcache.push(plot);
    }

    const rotate = () => {
      let localAngle = angle;
      for (let i = 0; i < plots; i++) {
        const x = 100 * Math.cos(localAngle) + 200;
        const y = 100 * Math.sin(localAngle) + 200;
        const turnangle = `${
          (Math.atan2(y - 200, x - 200) * 180) / Math.PI + 90
        }deg`;
        plotcache[i].rotate(turnangle);
        plotcache[i].position(x, y);
        localAngle += increase;
      }
      angle += 0.06;
    };

    const intervalId = setInterval(rotate, 1000 / 25);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="display" ref={displayRef}></div>
      <div>
        <img src={pop.src} alt="xoxo" />
      </div>
    </>
  );
};

export default Circle;
