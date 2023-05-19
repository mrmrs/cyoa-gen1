import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const Sketch0c = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

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
<svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)', backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', opacity: 1, aspectRatio: '100/141' }}>
      {[...Array(16)].map((x,i) =>
        <circle
          key={i}
          strokeDasharray={randomInt(0,100)+'% '+randomInt(0,maxLimit*2)+'%'} 
          strokeDashoffset={randomInt(-200,200)+'%'} 
          r={width /2.5 - (i+1)*16}
          cx={width/2}
          cy={height/2}
          //y2={randomInt(randomInt(0,height/2),height)}
          fill='transparent'
          stroke="url(#Gradient1)"
          strokeWidth={(i+1) * 1.5}
          //stroke={colors[randomInt(0,colors.length-1)]} strokeWidth={strokeWidth * 4} 
          className='transitions animation-dash1'
          style={{mixBlendMode: 'darken' }}
      />
      )}
      </svg>
      </div>
  );
};

export default Sketch0c
