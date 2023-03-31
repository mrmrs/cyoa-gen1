import React, { useEffect, useState } from 'react';

const EnchantedMapCover = () => {
  const [paths, setPaths] = useState([]);
  const [circles, setCircles] = useState([]);
  const [labels, setLabels] = useState([]);
  const [paperTexture, setPaperTexture] = useState('');

  useEffect(() => {
    const newPaths = [];
    const newCircles = [];
    const newLabels = [];

    const numPoints = 5;
    const padding = 50;
    const width = 1000;
    const height = 1400;

    const randomPoint = () => ({
      x: padding + Math.random() * (width - padding * 2),
      y: padding + Math.random() * (height - padding * 2),
    });

    const placeNames = ['Alden', 'Bryston', 'Caventon', 'Darnia', 'Eldwick'];

    for (let i = 0; i < numPoints; i++) {
      const point = randomPoint();
      newCircles.push(point);
      newLabels.push({ ...point, text: placeNames[i] });

      if (i > 0) {
        const controlPoint = randomPoint();
        const d = `M${newCircles[i - 1].x},${newCircles[i - 1].y} Q${controlPoint.x},${controlPoint.y} ${point.x},${point.y}`;
        newPaths.push({ d });
      }
    }

    setPaths(newPaths);
    setCircles(newCircles);
    setLabels(newLabels);

    const textureOptions = [
      '/path/to/texture1.png',
      '/path/to/texture2.png',
      '/path/to/texture3.png',
    ];
    setPaperTexture(textureOptions[Math.floor(Math.random() * textureOptions.length)]);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#f4e9d9', backgroundImage: `url(${paperTexture})` }}>
      <svg width="1000" height="1400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: '100%',}}>
        {paths.map((path, index) => (
          <path
            key={`path-${index}`}
            d={path.d}
            fill="none"
            strokeWidth="2"
            strokeDasharray={Math.random() > 0.5 ? '5,5' : '2,6'}
            stroke="rgba(0, 0, 0, 0.5)"
            style={{ animation: `dash 6s ${index * 1.2}s linear infinite` }}
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
        {labels.map((label, index) => (
          <text
            key={`label-${index}`}
            x={label.x + 8}
            y={label.y + 4}
            fontFamily="serif"
            fontSize="12"
            fill="rgba(0, 0, 0, 0.7)"
          >
            {label.text}
          </text>
        ))}
    </svg>
      <style>{`
        @keyframes star-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes dash {
          0% {
            stroke-dashoffset: 100%;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default EnchantedMapCover;
