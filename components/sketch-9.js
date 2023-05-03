import React, { useEffect, useState } from 'react';
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

function generateRandomSmoothBezierPath() {
  const canvasWidth = 1000;
  const canvasHeight = 1410;
  const numPoints = Math.floor(Math.random() * 10) + 10; // Generate a random number of points between 10 and 20
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    points.push({ x: x.toFixed(2), y: y.toFixed(2) });
  }

  const pathCommands = points.map((point, index) => {
    const controlPoint1 = points[(index + 1) % points.length];
    const controlPoint2 = points[(index + 2) % points.length];
    return `C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${point.x},${point.y}`;
  });

  return `M${points[0].x},${points[0].y} ${pathCommands.join(' ')}`;
}

function generateRandomBezierPath() {
  const canvasWidth = 1000;
  const canvasHeight = 1410;
  const numPoints = Math.floor(Math.random() * randomInt(2,16)) + randomInt(2,16); // Generate a random number of points between 10 and 20
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    points.push({ x: x.toFixed(2), y: y.toFixed(2) });
  }

  const pathCommands = points.map((point, index) => {
    const controlPoint = points[(index + 1) % points.length];
    return `Q${controlPoint.x},${controlPoint.y} ${point.x},${point.y}`;
  });

  return `M${points[0].x},${points[0].y} ${pathCommands.join(' ')}`;
}

const Sketch9 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

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
    const strokeScale = [0,1,2,3,4,8,12,16,24, 32,48, 64,128]
    const blendModes = ['none', 'overlay', 'multiply', 'darken']


    return (
      <div style={{ transition: 'background-color 1s ease-in', backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{ padding: '48px', transition: 'all 1s ease-in', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      {[...Array(randomInt(1,16))].map((x,i) =>
      <path
        d={generateRandomSmoothBezierPath()}
        strokeDasharray='100% 100% 100% 100%'
        strokeDashoffset='-100%'
        strokeOpacity={randomInt(100,100)+'%'}
        fill={fill} stroke={colors[randomInt(0,colors.length -1)]} 
        strokeWidth={strokeScale[randomInt(0,strokeScale.length-1)]} 
        style={{ mixBlendMode: blendModes[randomInt(0,blendModes.length-1)], transition: 'all .5s ease', animation: 'dash 10s alternate ease-in-out infinite forwards' }}
    />

      )}
      </svg>
      </div>
  );
};

export default Sketch9;
