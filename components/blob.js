import React, { useState, useEffect, useRef } from 'react';

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

const animate = (blobRef, startPoints, endPoints, duration) => {
  const startTime = performance.now();

  const animateFrame = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const currentPoints = startPoints.map((startPoint, index) => {
      const endPoint = endPoints[index];
      const x = startPoint.x + (endPoint.x - startPoint.x) * progress;
      const y = startPoint.y + (endPoint.y - startPoint.y) * progress;

      return { x, y };
    });

    if (blobRef.current) {
      blobRef.current.setAttribute('d', pathFromPoints(currentPoints));
    }

    if (progress < 1) {
      requestAnimationFrame(animateFrame);
    } else {
      // Start a new animation cycle
      const newStartPoints = endPoints;
      const newEndPoints = generateBlob(startPoints[0].x, startPoints.length, startPoints[0].x / 2);
      animate(blobRef, newStartPoints, newEndPoints, duration);
    }
  };

  requestAnimationFrame(animateFrame);
};

const OrganicBlob = ({
  radius = 48,
  numPoints = 16,
  variation = 120,
  fillColor = 'purple',
  animationDuration = 3000,
  ...props
}) => {
  const [blobPath, setBlobPath] = useState('');
  const blobRef = useRef(null);

  useEffect(() => {
    const points = generateBlob(radius, numPoints, variation);
    const path = pathFromPoints(points);
    setBlobPath(path);

    const endPoints = generateBlob(radius, numPoints, variation);
    animate(blobRef, points, endPoints, animationDuration);
  }, [radius, numPoints, variation, animationDuration]);

  return (
    <svg
      width={radius * 2 + variation}
      height={radius * 2 + variation}
      viewBox={`0 0 ${radius * 2 + variation} ${radius * 2 + variation}`}
      {...props}
      style={{ overflow: 'visible' }}
    >
      <path
        ref={blobRef}
        d={blobPath}
        fill={fillColor}
        transform={`translate(${(radius + variation / 2)},${(radius + variation) / 2})`}
      />
    </svg>
  );
};

export default OrganicBlob;
