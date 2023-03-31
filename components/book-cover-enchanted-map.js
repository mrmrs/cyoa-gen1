import React, { useEffect, useState } from 'react';

const EnchantedMapCover = () => {
  const [lines, setLines] = useState([]);
  const [circles, setCircles] = useState([]);
  const [paperTexture, setPaperTexture] = useState('');

  useEffect(() => {
    const newLines = [];
    const newCircles = [];

    const numPoints = 16;
    const padding = 50;
    const width = 500;
    const height = 700;

    const randomPoint = () => ({
      x: padding + Math.random() * (width - padding * 2),
      y: padding + Math.random() * (height - padding * 2),
    });

    for (let i = 0; i < numPoints; i++) {
      const point = randomPoint();
      newCircles.push(point);

      if (i > 0) {
        newLines.push({ p1: newCircles[i - 1], p2: point });
      }
    }

    setLines(newLines);
    setCircles(newCircles);

    const textureOptions = [
      '/path/to/texture1.png',
      '/path/to/texture2.png',
      '/path/to/texture3.png',
    ];
    setPaperTexture(textureOptions[Math.floor(Math.random() * textureOptions.length)]);
  }, []);

  return (
    <div style={{ position: 'relative', backgroundColor: '#f4e9d9', backgroundImage: `url(${paperTexture})` }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 500 700'>
        {lines.map((line, index) => (
          <line
            key={`line-${index}`}
            x1={line.p1.x}
            y1={line.p1.y}
            x2={line.p2.x}
            y2={line.p2.y}
            strokeWidth="2"
            strokeDasharray={Math.random() > 0.5 ? '5,5' : '2,6'}
            stroke="rgba(0, 0, 0, 0.5)"
          />
        ))}
        {circles.map((circle, index) => (
          <circle
            key={`circle-${index}`}
            cx={circle.x}
            cy={circle.y}
            r="5"
            fill="rgba(0, 0, 0, 0.5)"
            style={{ animation: `star-pulse 3s ${Math.random() * 3}s infinite` }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes star-pulse {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EnchantedMapCover;
