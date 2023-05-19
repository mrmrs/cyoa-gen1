import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomInt} from '../lib/random'

const Sketch5 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    return (
      <div className='transitions' style={{ backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)', backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      {[...Array(96)].map((x,i) =>
      <circle 
        key={uuidv4()}
        strokeDasharray={'100% '+randomInt(0,maxLimit)+'%'} 
        strokeDashoffset={randomInt(0,100)+'%'} 
        r={ width  - (unit * 4 * i) - strokeWidth}
        cx={width / 2}
        cy={height / 2}
        fill={fill} stroke={colors[randomInt(0,colors.length -1)]} strokeWidth={strokeWidth * 2} 
        className='transitions animation-dash'
    />
      )}
      </svg>
      </div>
  );
};

export default Sketch5;
