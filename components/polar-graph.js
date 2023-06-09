import React from 'react';
import { v4 as uuidv4 } from 'uuid'

const PolarGraph = ({
  colors,
  bgColor,
  width = 1000,
  height = 1410,
  radialLines = 12,
  circles = 5,
  radialLineColor = 'black',
  circleLineColor = 'black',
  strokeWidth,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) / 1.5;

  const radialLinesArray = Array.from({ length: radialLines }, (_, i) => {
    const angle = (2 * Math.PI * i) / radialLines;
    const x1 = centerX + radius * Math.cos(angle);
    const y1 = centerY + radius * Math.sin(angle);
    const x2 = centerX - radius * Math.cos(angle);
    const y2 = centerY - radius * Math.sin(angle);
    return `M${x1},${y1} L${x2},${y2}`;
  });

  const circlesArray = Array.from({ length: circles }, (_, i) => {
    const currentRadius = (radius * (i + 1)) / circles;
    return (
      <circle
        key={uuidv4()}
        cx={centerX}
        cy={centerY}
        r={currentRadius}
        fill='transparent'
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
    );
  });

  return (
    <g>
      <path d={radialLinesArray.join(' ')} stroke={bgColor} strokeWidth={strokeWidth} fill="none" />
      {circlesArray}
    </g>
  );
};

export default PolarGraph;
