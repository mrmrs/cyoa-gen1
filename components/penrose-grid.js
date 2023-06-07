import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'
import Penrose from '../components/penrose'


const PenroseGrid = ({ palette, gap = 16, width = 64, height = 64, lines = 16, xOffset = 0, yOffset = 0, colors, bgColor, color, strokeWidth, cols, rows, fill}) => {
    const unit = (width - strokeWidth) / (lines -1) 
    const size = width / cols - strokeWidth * 2
    const fillBool = randomInt(0,100)

    return (
      <>
        {[...Array(cols)].map((y,j) =>
          <g key={uuidv4()}>
            {[...Array(parseInt(height / cols +1 ))].map((x,i) =>
            <g key={uuidv4()} stroke={ fillBool > 95? palette[randomInt(0,palette.length-1)] : fill} strokeWidth={strokeWidth}>
              <Penrose colors={palette} strokeWidth={strokeWidth} height={height/rows-strokeWidth*2} width={width/cols-strokeWidth*2} depth={randomInt(1,3)} initialPoints={[
                 {
                   x: j*(width/cols),
                   y: i*height/rows,
                 },
                 {
                   x: j*(width/cols)+width/cols,
                   y: i*height/rows,
                 },
                 {
                   x: j*(width/cols)+width/cols,
                   y: i*height/rows+height/rows
                 },
              ]}/>
              <Penrose strokeWidth={strokeWidth} colors={palette} height={height/rows-strokeWidth*2} width={width/cols-strokeWidth*2} depth={randomInt(1,3)} initialPoints={[
                 {
                   x: j*(width/cols),
                   y: i*height/rows,
                 },
                 {
                   x: j*(width/cols),
                   y: i*height/rows+height/rows,
                 },
                 {
                   x: j*(width/cols)+width/cols,
                   y: i*height/rows+height/rows
                 },
              ]}/>
            </g>
            )}
          </g>
        )}
      </>
  );
};

export default PenroseGrid;
