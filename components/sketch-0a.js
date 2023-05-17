import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const Sketch0 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 1410 
    const width = 1000

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    return (
      <div style={{ 
	backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', 
	backgroundSize: 'cover', 
	aspectRatio: '100/141', 
	backgroundPosition: 'center center', 
	backgroundBlendMode: 'none', 
	display: 'flex', 
	alignItems: 'center', 
	justifyContent: 'center',  
}}> 
<svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)', backgroundBlendMode: 'none',  mixBlendMode: 'multiply', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', opacity: 1, aspectRatio: '100/141' }}>
      {[...Array(2)].map((x,i) =>
        <rect 
          key={i}
          //strokeDasharray={i === 0? randomInt(0,50)+'% '+randomInt(0,maxLimit*2)+'%' : '0'} 
          //strokeDashoffset={randomInt(0,200)+'%'} 
          width={width}
          y={height * i / 2}
          height={height / 2}
          //y2={randomInt(randomInt(0,height/2),height)}
          fill={colors[randomInt(0,colors.length-1)]} 
          //stroke={i===0?colors[randomInt(0,colors.length-1)] : 'none'} strokeWidth={640} 
          className='transitions animation-dash'
        />
      )}
      </svg>
      </div>
  );
};

export default Sketch0
