import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'


const EnchantedBookCover2 = () => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const strokeWidth = randomInt(2,32)
    const fill = 'transparent'
    const unit = 4

    return (
      <div style={{ padding: '32px', backgroundColor: 'rgba(128,128,'+randomInt(0,255)+',1)', backgroundImage: 'url(https://mrmrs.github.io/photos/leather2.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'overlay'  }}>
      <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{mixBlendMode: 'overlay', overflow: 'hidden', display: 'block', width: '100%', height: 'auto' }}>
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 1) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 2) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 3) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 4) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 5) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 6) - strokeWidth}
        //cx={unit * 4 * 1}
        //cy={unit * 4 * 1}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 7) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 8) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 9) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 10) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 11) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 12) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 13) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 14) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 15) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      <circle 
        strokeDasharray={'100% '+randomInt(0,60)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width / 2 - (unit * 8 * 16) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={stroke} strokeWidth={strokeWidth} 
        style={{ animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />
      </svg>
      </div>
  );
};

export default EnchantedBookCover2;
