// components/EnchantedMapCover.js
import React, { useEffect, useState } from "react";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = getRandomInt(0, 100);
    const y = getRandomInt(0, 100);
    const r = getRandomInt(1, 3);
    stars.push({ x, y, r });
  }
  return stars;
};

const generateLines = (stars) => {
  const lines = [];
  for (let i = 0; i < stars.length; i += 2) {
    if (stars[i + 1]) {
      lines.push({ x1: stars[i].x, y1: stars[i].y, x2: stars[i + 1].x, y2: stars[i + 1].y });
    }
  }
  return lines;
};

const BookCoverEnchantedMap = () => {
  const [stars, setStars] = useState(generateStars(50));
  const [lines, setLines] = useState(generateLines(stars));
  const [color, setColor] = useState(`hsla(${getRandomInt(30, 50)}, ${getRandomInt(30, 50)}%, ${getRandomInt(20, 40)}%, 1)`);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(`hsla(${getRandomInt(30, 50)}, ${getRandomInt(30, 50)}%, ${getRandomInt(20, 40)}%, 1)`);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {lines.map((line, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: `${line.x1}%`,
            top: `${line.y1}%`,
            width: `${Math.abs(line.x2 - line.x1)}%`,
            height: `${Math.abs(line.y2 - line.y1)}%`,
            borderTop: `1px ${idx % 2 === 0 ? "dashed" : "dotted"} ${color}`,
            transform: `rotate(${Math.atan2(line.y2 - line.y1, line.x2 - line.x1)}rad)`,
            transformOrigin: "top left",
          }}
        />
      ))}
      {stars.map((star, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.r * 2}px`,
            height: `${star.r * 2}px`,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `star-pulse ${getRandomInt(5, 15)}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes star-pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BookCoverEnchantedMap;
