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

const LineGridVertical = ({ gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, strokeWidth, cols, rows, strokeDashArray}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    
    

    return (
      <>
          {[...Array(lines)].map((x,i) =>
            <line key={uuidv4()} 
              x1={unit * i + strokeWidth / 2 + xOffset + gap * i} 
              y1={yOffset} 
              x2={unit * i + strokeWidth / 2 + xOffset + gap * i} 
              y2={yOffset + height} 
              stroke='black' strokeWidth={strokeWidth} />
              strokeDasharray={strokeDashArray}
              className='animation-dash'
          )}
        
      </>
  );
};

export default LineGridVertical;
