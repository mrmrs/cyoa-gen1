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

const CirclesFullStack = ({ palette, gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, stroke, strokeWidth, cols, rows, fill}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const size = width / cols - strokeWidth * 2
    const fillBool = randomInt(0,100)
    const strokeWidthMax = randomInt(4,128)
    
    return (
      <g>
            {[...Array(192)].map((x,i) =>
                <circle key={uuidv4()} cx={width/2} cy={height/2} r={width - i * width/64} fill={i%2===0?'url(#Gradient'+randomInt(0,15)+')': 'url(#RadGradient0)'} strokeWidth={randomInt(0,strokeWidthMax)} className='transitions' />
            )}
      </g>
  );
};

export default CirclesFullStack
