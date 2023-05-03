import React, { useState, useEffect } from 'react';
import randomColor from 'random-hex-color'

const getRandomPoint = (radius, angle) => {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x, y };
};

const generateBlob = (radius, numPoints, variation) => {
  const points = [];
  const angleStep = (2 * Math.PI) / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const angle = angleStep * i;
    const pointRadius = radius + Math.random() * variation - variation / 2;
    points.push(getRandomPoint(pointRadius, angle));
  }

  return points;
};

const pathFromPoints = (points) => {
  const [firstPoint, ...restPoints] = points;
  const path = restPoints.map((point, index) => {
    const nextPoint = restPoints[(index + 1) % restPoints.length];
    const xc = (point.x + nextPoint.x) / 2;
    const yc = (point.y + nextPoint.y) / 2;
    return `Q${point.x},${point.y} ${xc},${yc}`;
  });
  return `M${firstPoint.x},${firstPoint.y} ${path.join(' ')} Z`;
};

const OrganicBlob = ({
  radius = 50,
  numPoints = 8,
  variation = 20,
  fillColor = randomColor(),
  animationDuration = 3000,
  ...props
}) => {
  const [blobPath, setBlobPath] = useState('');
  const [alternateBlobPath, setAlternateBlobPath] = useState('');

  useEffect(() => {
    const points = generateBlob(radius, numPoints, variation);
    const path = pathFromPoints(points);
    setBlobPath(path);

    const alternatePoints = generateBlob(radius, numPoints, variation);
    const alternatePath = pathFromPoints(alternatePoints);
    setAlternateBlobPath(alternatePath);
  }, [radius, numPoints, variation]);

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      {...props}
      style={{ overflow: 'visible', display: 'block', background: 'red' }}
    >
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" width={radius * 2} height={radius * 2} />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)">
        <path d={blobPath} fill={randomColor()} />
        <path
          d={alternateBlobPath}
          fill={randomColor()}
          style={{
            animation: `blob-animation ${animationDuration}ms infinite alternate`,
          }}
        />
      </g>
      <style>{`
        @keyframes blob-animation {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
};

export default OrganicBlob;
