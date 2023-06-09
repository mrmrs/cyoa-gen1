import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'
import EquilateralTriangle from '../components/equilateral-triangle'


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
    const shapeInt = randomInt(0,100)
    
   
    return (
      <>
        {[...Array(parseInt(cols))].map((y,j) =>
          <g key={uuidv4()}>
            {[...Array(parseInt(rows+2))].map((x,i) =>
            <g key={uuidv4()} stroke={ fillBool > 95? palette[randomInt(0,palette.length-1)] : palette[0]} strokeWidth={strokeWidth}>
              <rect x={j * (width / cols) + strokeWidth} y={i * height / rows + strokeWidth * 2} height={height/rows - strokeWidth*2} width={width/cols - strokeWidth * 2} strokeWidth={1} fill='transparent' style={{ zIndex: -9999}}/>
              <circle cx={j * (width / cols) + (width /cols/2) } 
                cy={i * height/rows + strokeWidth * 2 - height/rows/2} 
                r={randomInt(0,parseInt(width/cols/2 - 1))} 
                fill={fillBool > 70? fill : 'url(#Gradient'+randomInt(0,15)+')'}
                strokeWidth={fillBool > 98? strokeWidth : fillBool> 50? 0: 1}
                style={{ filter: fillBool < 90? 'none' : randomInt(0,100) > 50? 'url(#displacementFilter)' : 'url(#blurMe)' }}
              />
              <EquilateralTriangle canvasWidth={j * (width / cols) * 2 + (width / cols)} canvasHeight={i * height / rows * 2 + (height/rows)} size={size} fill={fillBool < 40? palette[randomInt(0,palette.length-1)] : 'url(#Gradient'+randomInt(0,15)+')'} stroke='black' strokeWidth={2} style={{ display: randomInt(0,100) > 30 ? 'none': 'block' }}/>
            </g>
            )}
          </g>
        )}
      </>
  );
};

export default ShapeGrid;
