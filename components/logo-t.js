import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

const Logo1 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const height = 128
    const width = 128

    const stroke = 'inherit'
    const fill = 'transparent'
    const unit = 4

    return (
      <div style={{ 
	backgroundSize: 'cover', 
	aspectRatio: '1', 
	backgroundPosition: 'center center', 
	backgroundBlendMode: 'none', 
	display: 'flex', 
	alignItems: 'center', 
	justifyContent: 'center',  
}}> 
<svg viewBox={'0 0 '+width+' '+height} stroke='white' width={width} height={height} className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,1)', backgroundBlendMode: 'none',  mixBlendMode: 'multiply', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', opacity: 1, aspectRatio: '1' }}>
      {[...Array(1)].map((x,i) =>
        <circle cx='64' cy='64' r={48} fill='black' />
      )}
      </svg>
      </div>
  );
};

export default Logo1
