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

const RandomRect = ({ palette, gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, strokeWidth, cols, rows, fill}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const size = width / cols - strokeWidth * 2
    const fillBool = randomInt(0,100)
    
    

    return (
      <>
            {[...Array(randomInt(128,256))].map((x,i) =>
            <g key={uuidv4()} stroke={ fillBool > 95? palette[0] : 'black'} strokeWidth={strokeWidth}
               transform={"rotate("+randomInt(-180,180)+" "+randomInt(-180,180)+" "+randomInt(0,100)+") translate("+randomInt(-180,180)+" "+randomInt(-180,180)+") skewX("+randomInt(-180,180)+") skewY("+randomInt(-180,180)+") skewX("+randomInt(-180,180)+")"}>
              <rect x={randomInt(-width,width)} y={randomInt(-height,height)} height={randomInt(0,randomInt(height /8, height/4))} width={randomInt(0,randomInt(width/8,width/4))} strokeWidth={strokeWidth} fill={palette[randomInt(0,palette.length-1)]} />
            </g>
            )}
      </>
  );
};

export default RandomRect
