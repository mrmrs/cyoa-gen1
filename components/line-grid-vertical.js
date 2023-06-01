import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'


function generateRandomStrokeDashArray() {
  const numSegments = Math.floor(Math.random() * 8) + 2; // Generate a random number of segments between 3 and 7
  const maxValue = 500; // Maximum length for each segment
  const dashArray = [];

  for (let i = 0; i < numSegments; i++) {
    const segmentLength = Math.random() * maxValue;
    dashArray.push(segmentLength.toFixed(2));
  }

  return dashArray.join(', ');
}

const LineGridVertical = ({ gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, palette, bgColor, color, stroke = 'black', strokeWidth, cols, rows,strokeDashArray,animate = false}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const strokeBool = randomInt(0,100)
    

    return (
      <>
          {[...Array(lines)].map((x,i) =>
            <line key={uuidv4()} 
              x1={unit * i + strokeWidth / 2 + xOffset} 
              y1={yOffset} 
              x2={unit * i + strokeWidth / 2 + xOffset} 
              y2={yOffset + height} 
              stroke={strokeBool > 4? stroke : palette[randomInt(0,palette.length-1)]} strokeWidth={strokeWidth} 
              strokeDasharray={animate ? strokeDashArray : 'none'}
              strokeDashoffset={animate? randomInt(0,50)+'%' : 0}
              className='animation-dash'
            />
          )}
        
      </>
  );
};

export default LineGridVertical;
