import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const Sketch5 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    const strokeDashArrays = [
     '20,20', 
     '30,30', 
     '40,40', 
     '60,60', 
     '80,80', 
     '100,100', 
     '200,200', 
     '100,20', 
     '100,40', 
     '200,40', 
     '200,20', 
     '100,20,60,40', 
     '1000,1000', 
     '1000,500', 
     '2000,500', 
     '2000,500,1000,500,500,500,250,500', 
    ]

  const strokeDashArray = strokeDashArrays[randomInt(0,strokeDashArrays.length-1)]

    return (
      <div className='transitions' style={{ backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%',  backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      {[...Array(96)].map((x,i) =>
      <circle 
        key={i}
        strokeDasharray={strokeDashArray} 
        strokeDashoffset={randomInt(-100,0)+'%'} 
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
