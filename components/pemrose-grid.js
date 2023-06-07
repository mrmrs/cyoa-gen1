import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'


const ShapeGrid = ({ palette, gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, strokeWidth, cols, rows, fill}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const size = width / cols - strokeWidth * 2
    const fillBool = randomInt(0,100)

    return (
      <>
        {[...Array(cols)].map((y,j) =>
          <g key={uuidv4()}>
            {[...Array(parseInt(height / cols +1 ))].map((x,i) =>
            <g key={uuidv4()} stroke={ fillBool > 95? palette[randomInt(0,palette.length-1)] : palette[0]} strokeWidth={strokeWidth}>
              <circle cx={j * (width / cols) + (width /cols/2) } 
              cy={i * width/cols} 
              r={randomInt(0,parseInt(width/cols/2 - 1))} 
              fill={fillBool > 70? fill : 'url(#Gradient'+randomInt(0,15)+')'}
              strokeWidth={fillBool > 50? 1 : 0}
              style={{ filter: fillBool < 90? 'none' : randomInt(0,100) > 50? 'url(#displacementFilter)' : 'none' }}
              />
              <rect x={j * (width / cols) + strokeWidth} y={i * height / rows + strokeWidth * 2} height={height/rows - strokeWidth*2} width={width/cols - strokeWidth * 2} strokeWidth={1} fill='transparent' style={{ zIndex: -9999}}/>
            </g>
            )}
          </g>
        )}
      </>
  );
};

export default ShapeGrid;
