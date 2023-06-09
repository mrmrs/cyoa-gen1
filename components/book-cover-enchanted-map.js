import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const EnchantedBookCover = ({ colors, bgColor, color = 'red', fill = 'transparent', maxLimit = randomInt(50,150), strokeWidth = randomInt(2,16)}) => {

    const height = 1410 
    const width = 1000


    const stroke = 'inherit'
    const unit = 8

    return (
      <div style={{ transition: 'background-color 1s ease-in', backgroundColor: bgColor, }}>
      <div style={{ backgroundColor: 'white', backgroundImage: 'url(https://mrmrs.github.io/photos/book-cover-1.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: 100/141,  }}>
      <svg viewBox={'0 0 '+width+' '+height}  stroke='white' width='1000' height='1410' style={{ padding: '0 48px 0 64px', transition: 'all .5s ease-in', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(220,220,24,0)',  mixBlendMode: 'overlay', overflow: 'visible', display: 'block', boxSizing: 'border-box', width: '100%', height: 'auto' }}>
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 1) - strokeWidth}
        height={height - (unit * 8 * 1) - strokeWidth}
        x={unit * 4 * 1}
        y={unit * 4 * 1}
        fill={fill} stroke={colors[0]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 2) - strokeWidth}
        height={height - (unit * 8 * 2) - strokeWidth}
        x={unit * 4 * 2}
        y={unit * 4 * 2}
        fill={fill} stroke={colors[1]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 3) - strokeWidth}
        height={height - (unit * 8 * 3) - strokeWidth}
        x={unit * 4 * 3}
        y={unit * 4 * 3}
        fill={fill} stroke={colors[2]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 4) - strokeWidth}
        height={height - (unit * 8 * 4) - strokeWidth}
        x={unit * 4 * 4}
        y={unit * 4 * 4}
        fill={fill} stroke={colors[3]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 5) - strokeWidth}
        height={height - (unit * 8 * 5) - strokeWidth}
        x={unit * 4 * 5}
        y={unit * 4 * 5}
        fill={fill} stroke={colors[4]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 6) - strokeWidth}
        height={height - (unit * 8 * 6) - strokeWidth}
        x={unit * 4 * 6}
        y={unit * 4 * 6}
        fill={fill} stroke={colors[5]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 7) - strokeWidth}
        height={height - (unit * 8 * 7) - strokeWidth}
        x={unit * 4 * 7}
        y={unit * 4 * 7}
        fill={fill} stroke={colors[6]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 8) - strokeWidth}
        height={height - (unit * 8 * 8) - strokeWidth}
        x={unit * 4 * 8}
        y={unit * 4 * 8}
        fill={fill} stroke={colors[7]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 9) - strokeWidth}
        height={height - (unit * 8 * 9) - strokeWidth}
        x={unit * 4 * 9}
        y={unit * 4 * 9}
        fill={fill} stroke={colors[8]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 10) - strokeWidth}
        height={height - (unit * 8 * 10) - strokeWidth}
        x={unit * 4 * 10}
        y={unit * 4 * 10}
        fill={fill} stroke={colors[9]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 11) - strokeWidth}
        height={height - (unit * 8 * 11) - strokeWidth}
        x={unit * 4 * 11}
        y={unit * 4 * 11}
        fill={fill} stroke={colors[10]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 12) - strokeWidth}
        height={height - (unit * 8 * 12) - strokeWidth}
        x={unit * 4 * 12}
        y={unit * 4 * 12}
        fill={fill} stroke={colors[11]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 13) - strokeWidth}
        height={height - (unit * 8 * 13) - strokeWidth}
        x={unit * 4 * 13}
        y={unit * 4 * 13}
        fill={fill} stroke={colors[12]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 14) - strokeWidth}
        height={height - (unit * 8 * 14) - strokeWidth}
        x={unit * 4 * 14}
        y={unit * 4 * 14}
        fill={fill} stroke={colors[13]} strokeWidth={strokeWidth} 
          style={{ animation: 'dash 10s alternate ease-in-out infinite' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 15) - strokeWidth}
        height={height - (unit * 8 * 15) - strokeWidth}
        x={unit * 4 * 15}
        y={unit * 4 * 15}
        fill={fill} stroke={colors[14]} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <rect 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        width={width - (unit * 8 * 16) - strokeWidth}
        height={height - (unit * 8 * 16) - strokeWidth}
        x={unit * 4 * 15}
        y={unit * 4 * 15}
        fill={fill} stroke={colors[15]} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      </svg>
      </div>
      </div>
  );
};

export default EnchantedBookCover;
