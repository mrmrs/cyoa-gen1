import React, { useEffect, useState } from 'react';
import { randomInt} from '../lib/random'

function generateRandomStrokeDashArray() {
  const numSegments = Math.floor(Math.random() * 8) + 2; // Generate a random number of segments between 3 and 7
  const maxValue = 128; // Maximum length for each segment
  const dashArray = [];

  for (let i = 0; i < numSegments; i++) {
    const segmentLength = Math.random() * maxValue;
    dashArray.push(segmentLength.toFixed(2));
  }

  return dashArray.join(', ');
}

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
  <svg 
    viewBox={'0 0 '+width+' '+height} 
    width={width} height={height} 
    className='transitions'
    style={{ 
      backgroundColor: 'rgba(250,250,24,0)', 
      backgroundBlendMode: 'none',  
      //mixBlendMode: 'multiply', 
      overflow: 'hidden', 
      display: 'block', 
      width: '100%', 
      height: 'auto', 
      opacity: 1, aspectRatio: '1' 
    }}>
        <circle cx='64' cy='64' r={56} fill='transparent' strokeWidth={4} stroke={bgColor} strokeDasharray={generateRandomStrokeDashArray()} strokeDashoffset='100%' className='transitions animation-dash' />
        <circle cx='64' cy='64' r={48} fill={bgColor} strokeWidth={0} className='transitions' />
      </svg>
      </div>
  );
};

export default Logo1
