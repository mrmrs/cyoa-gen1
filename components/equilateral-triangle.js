import React from 'react';

const EquilateralTriangle = ({ canvasWidth, canvasHeight, size, ...props }) => {
  const height = Math.sqrt(3) / 2 * size; // calculate height of the equilateral triangle

  // calculate the points for the triangle
  const points = [
    [canvasWidth / 2, canvasHeight / 2 - height / 2], 
    [canvasWidth / 2 - size / 2, canvasHeight / 2 + height / 2],
    [canvasWidth / 2 + size / 2, canvasHeight / 2 + height / 2]
  ].map(point => point.join(',')).join(' ');

  return (
    <polygon points={points} {...props} />
  );
};

export default EquilateralTriangle;
