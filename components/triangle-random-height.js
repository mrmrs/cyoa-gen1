import React from 'react';
import { randomInt } from '../lib/random'

const Triangle = ({ x,y,size,type='random', ...props }) => {
  const height = Math.sqrt(3) / 2 * size; // calculate height of the equilateral triangle
  const randomHeight = () => randomInt(0,100) > 50? y-height: y+height
  const usedHeight = type==='random'? randomHeight() : height

  // calculate the points for the triangle
  const points = [
    [x, y], 
    [x+size, y],
    [x+size/2,usedHeight]
  ].map(point => point.join(',')).join(' ');

  return (
    <polygon points={points} {...props} />
  );
};

export default Triangle;
