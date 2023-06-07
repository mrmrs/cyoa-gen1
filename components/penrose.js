import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomInt } from '../lib/random'

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

const split = (points, index) => {
  if (index % 2 === 0) {
    const [p1, p2, p3] = points;
    const p4 = {
      x: p2.x + (p3.x - p2.x) / GOLDEN_RATIO,
      y: p2.y + (p3.y - p2.y) / GOLDEN_RATIO,
    };
    return [[p1, p2, p4], [p4, p3, p1]];
  } else {
    const [p1, p2, p3] = points;
    const p4 = {
      x: p1.x + (p2.x - p1.x) / GOLDEN_RATIO,
      y: p1.y + (p2.y - p1.y) / GOLDEN_RATIO,
    };
    return [[p1, p4, p3], [p4, p2, p3]];
  }
};

const generatePenroseTiling = (points, depth) => {
  if (depth === 0) {
    return [points];
  }
  const [sub1, sub2] = split(points, depth);
  return generatePenroseTiling(sub1, depth - 1).concat(
    generatePenroseTiling(sub2, depth - 1)
  );
};

const Penrose = ({ colors, width, height, depth, initialPoints, strokeWidth = 1 }) => {
  const polygons = generatePenroseTiling(initialPoints, depth);
  return (
    <g>
      {polygons.map((points, i) => (
        <polygon
          key={uuidv4()}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill={colors[randomInt(0,colors.length-1)]}
          stroke='black'
          strokeWidth={strokeWidth}
        />
      ))}
    </g>
  );
};

export default Penrose;
