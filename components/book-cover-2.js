import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'


const EnchantedBookCover2 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    return (
      <div style={{ transition: 'background-color 1s ease-in', backgroundColor: bgColor, backgroundImage: 'url(https://mrmrs.github.io/photos/leather2.jpg)', backgroundSize: '110%', backgroundPosition: 'center center', backgroundBlendMode: 'none'  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{padding: '48px', transition: 'all 1s ease-in', backgroundColor: 'rgba(250,250,24,.95)',backgroundBlendMode: 'darken',  mixBlendMode: 'overlay', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 1) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[0]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 2) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[1]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 3) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[2]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 4) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[3]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 5) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[4]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 6) - strokeWidth}
        //cx={unit * 4 * 1}
        //cy={unit * 4 * 1}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[5]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 7) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[6]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 8) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[7]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 9) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[8]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 10) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[9]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 11) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[10]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 12) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[11]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 13) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[12]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 14) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[13]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 15) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[14]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 16) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[15]} strokeWidth={strokeWidth} 
        style={{ transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      </svg>
      </div>
  );
};

export default EnchantedBookCover2;
