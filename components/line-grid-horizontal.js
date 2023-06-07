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

const LineGridHorizontal = ({ gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, palette, bgColor, color, stroke = 'black', strokeDashArray, strokeWidth, strokeDashOffset = randomInt(0,50)+'%', cols, rows,}) => {
    const unit = (height - yOffset - yOffset - strokeWidth) / (lines -1) 
    const strokeBool = randomInt(0,100)

    return (
      <>
          {[...Array(lines)].map((x,i) =>
            <line key={uuidv4()} 
              y1={unit * i + strokeWidth / 2 + yOffset} 
              x1={xOffset} 
              y2={unit * i + strokeWidth / 2 + yOffset} 
              x2={width - xOffset} 
              stroke={strokeBool > 50? stroke : palette[randomInt(0,palette.length-1)]} strokeWidth={strokeWidth} 
              strokeDasharray={strokeDashArray}
              strokeDashoffset={randomInt(0,50)+'%'}
              className='animation-dash'
            />
          )}
        
      </>
  );
};

export default LineGridHorizontal;
