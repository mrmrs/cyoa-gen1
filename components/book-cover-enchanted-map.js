import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const EnchantedBookCover = ({ fill = 'transparent', }) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const strokeWidth = randomInt(2,16)
    const unit = 6

    return (
      <div style={{ transition: 'background-color 1s ease-in', padding: '32px', backgroundColor: 'rgba(128,128,'+randomInt(0,255)+',1)', backgroundImage: 'url(https://mrmrs.github.io/photos/leather2.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'overlay'  }}>
      <svg viewBox={'0 0 '+width+' '+height}  stroke='white' width='1000' height='1410' style={{ transition: 'all 1s ease-in', mixBlendMode: 'overlay', overflow: 'visible', display: 'block', width: '100%', height: 'auto' }}>
        <rect 
          strokeDasharray={'100% '+randomInt(0,60)+'%'} 
          strokeDashoffset={randomInt(0,100)+'%'} 
          width={width - strokeWidth}
          height={height - strokeWidth}
          x='0'
          y='0'
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
      />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 1) - strokeWidth}
        height={height - (unit * 8 * 1) - strokeWidth}
        x={unit * 4 * 1}
        y={unit * 4 * 1}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 2) - strokeWidth}
        height={height - (unit * 8 * 2) - strokeWidth}
        x={unit * 4 * 2}
        y={unit * 4 * 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 3) - strokeWidth}
        height={height - (unit * 8 * 3) - strokeWidth}
        x={unit * 4 * 3}
        y={unit * 4 * 3}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 4) - strokeWidth}
        height={height - (unit * 8 * 4) - strokeWidth}
        x={unit * 4 * 4}
        y={unit * 4 * 4}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 5) - strokeWidth}
        height={height - (unit * 8 * 5) - strokeWidth}
        x={unit * 4 * 5}
        y={unit * 4 * 5}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,200)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 6) - strokeWidth}
        height={height - (unit * 8 * 6) - strokeWidth}
        x={unit * 4 * 6}
        y={unit * 4 * 6}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 7) - strokeWidth}
        height={height - (unit * 8 * 7) - strokeWidth}
        x={unit * 4 * 7}
        y={unit * 4 * 7}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 8) - strokeWidth}
        height={height - (unit * 8 * 8) - strokeWidth}
        x={unit * 4 * 8}
        y={unit * 4 * 8}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 9) - strokeWidth}
        height={height - (unit * 8 * 9) - strokeWidth}
        x={unit * 4 * 9}
        y={unit * 4 * 9}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
          style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 10) - strokeWidth}
        height={height - (unit * 8 * 10) - strokeWidth}
        x={unit * 4 * 10}
        y={unit * 4 * 10}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 11) - strokeWidth}
        height={height - (unit * 8 * 11) - strokeWidth}
        x={unit * 4 * 11}
        y={unit * 4 * 11}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 12) - strokeWidth}
        height={height - (unit * 8 * 12) - strokeWidth}
        x={unit * 4 * 12}
        y={unit * 4 * 12}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 13) - strokeWidth}
        height={height - (unit * 8 * 13) - strokeWidth}
        x={unit * 4 * 13}
        y={unit * 4 * 13}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 14) - strokeWidth}
        height={height - (unit * 8 * 14) - strokeWidth}
        x={unit * 4 * 14}
        y={unit * 4 * 14}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 15) - strokeWidth}
        height={height - (unit * 8 * 15) - strokeWidth}
        x={unit * 4 * 15}
        y={unit * 4 * 15}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ fill: fill, stroke: stroke, strokeWidth: strokeWidth, animation: 'dash 10s alternate ease-in-out alternate-reverse infinite', transition: 'stroke-width .5s ease' }}
    />
      </svg>
      </div>
  );
};

export default EnchantedBookCover;
