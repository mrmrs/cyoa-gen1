import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomInt} from '../lib/random'

function generateRandomStrokeDashArray() {
  const numSegments = Math.floor(Math.random() * 8) + 2; // Generate a random number of segments between 3 and 7
  const maxValue = 500; // Maximum length for each segment
  const dashArray = [];

  for (let i = 0; i < numSegments; i++) {
    const segmentLength = Math.random() * maxValue;
    dashArray.push(segmentLength.toFixed(2));
  }

  return dashArray.join(', ');
}

function generateRandomPolyline() {
  const canvasWidth = 1000;
  const canvasHeight = 1410;
  const numPoints = Math.floor(Math.random() * randomInt(2,16)) + randomInt(2,16); // Generate a random number of points between 10 and 20
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return points.join(' ');
}

const Sketch8 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

    const boolStroke = randomInt(0,10)
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
    const strokeDashArrayAlt = generateRandomStrokeDashArray()
    const strokeScale = [0,2,4,8,16,32,64,128]


    return (
      <div className='transitions' style={{ backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%',  backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      {[...Array(randomInt(1,16))].map((x,i) =>
      <polyline 
        key={uuidv4()}
        points={generateRandomPolyline()}
        strokeDasharray='100% 100%'
        strokeDashoffset='200%'
        fill={fill} stroke={colors[randomInt(0,colors.length -1)]} 
        strokeWidth={strokeScale[randomInt(0,strokeScale.length-1)]} 
        strokeLinejoin='bevel'
        className='transitions animation-dash'
    />

      )}
      </svg>
      </div>
  );
};

export default Sketch8;
