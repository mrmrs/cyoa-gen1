import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomInt} from '../lib/random'


const Sketch2 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    return (
      <div className='transitions' style={{ backgroundColor: 'white', backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{ margin: '10%', transition: 'all 1s ease-in', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', opacity: 1, aspectRatio: '100/141', }}>
      {[...Array(96)].map((x,i) =>
        <line 
          key={uuidv4()}
          strokeDasharray={randomInt(50,100)+'% '+randomInt(0,maxLimit*2)+'%'} 
          strokeDashoffset={randomInt(0,200)+'%'} 
          x1={0}
          y1={unit * 4 * i}
          //y2={randomInt(randomInt(0,height/2),height)}
          y2={unit * 4 * i}
          x2={width}
          fill={fill} stroke={colors[randomInt(0,colors.length-1)]} strokeWidth={strokeWidth * 2} 
          className='transitions animation-dash'
      />
      )}
      </svg>
      </div>
  );
};

export default Sketch2
