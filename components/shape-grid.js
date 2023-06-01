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

const ShapeGrid = ({ palette, gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, strokeWidth, cols, rows, fill}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const size = width / cols - strokeWidth * 2
    const fillBool = randomInt(0,100)
    
    

    return (
      <>
        {[...Array(cols)].map((y,j) =>
          <>
            {[...Array(parseInt(height / cols +1 ))].map((x,i) =>
            <g key={uuidv4()} stroke={palette[randomInt(0,palette.length-1)]} strokeWidth={strokeWidth}>
              <circle cx={j * (width / cols) + (width /cols/2) } 
              cy={i * width/cols} 
              r={randomInt(0,parseInt(width/cols/2 - 1))} 
              fill={fillBool > 50? fill : 'url(#Gradient'+randomInt(0,15)+')'}
              strokeWidth={0} 
              />
              <rect x={j * (width / cols) + strokeWidth} y={i * height / rows + strokeWidth * 2} height={height/rows - strokeWidth*2} width={width/cols - strokeWidth * 2} />
            </g>
            )}
          </>
        )}
      </>
  );
};

export default ShapeGrid;
