import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomInt} from '../lib/random'

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function generateRandomShape() {
  const canvasWidth = 1000;
  const canvasHeight = 1400;
  const shapes = [
    {
      type: 'rect',
      width: getRandom(100, 500),
      height: getRandom(100, 500),
    },
    {
      type: 'circle',
      radius: getRandom(50, 250),
    },
    {
      type: 'triangle',
    },
  ];

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  switch (randomShape.type) {
    case 'rect':
      const x = getRandom(-0.4 * randomShape.width, canvasWidth - 0.6 * randomShape.width);
      const y = getRandom(-0.4 * randomShape.height, canvasHeight - 0.6 * randomShape.height);
      const w = randomShape.width;
      const h = randomShape.height;
      return `M${x},${y} L${x + w},${y} L${x + w},${y + h} L${x},${y + h} Z`;
    case 'circle':
      const cx = getRandom(0.6 * randomShape.radius, canvasWidth - 0.6 * randomShape.radius);
      const cy = getRandom(0.6 * randomShape.radius, canvasHeight - 0.6 * randomShape.radius);
      const r = randomShape.radius;
      return `M${cx},${cy - r} A${r},${r} 0 1,0 ${cx},${cy + r} A${r},${r} 0 1,0 ${cx},${cy - r}`;
    case 'triangle':
      const x1 = getRandom(-0.4 * canvasWidth, canvasWidth - 0.6 * canvasWidth);
      const y1 = getRandom(-0.4 * canvasHeight, canvasHeight - 0.6 * canvasHeight);
      const x2 = getRandom(-0.4 * canvasWidth, canvasWidth - 0.6 * canvasWidth);
      const y2 = getRandom(-0.4 * canvasHeight, canvasHeight - 0.6 * canvasHeight);
      const x3 = getRandom(-0.4 * canvasWidth, canvasWidth - 0.6 * canvasWidth);
      const y3 = getRandom(-0.4 * canvasHeight, canvasHeight - 0.6 * canvasHeight);
      return `M${x1},${y1} L${x2},${y2} L${x3},${y3} Z`;
  }
}
function generateSquigglyLinePath() {
  const canvasWidth = 1000;
  const canvasHeight = 1400;
  const numPoints = 10;
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const edge = Math.floor(Math.random() * 4);
    let x, y;

    switch (edge) {
      case 0: // top edge
        x = getRandom(0, canvasWidth);
        y = 0;
        break;
      case 1: // right edge
        x = canvasWidth;
        y = getRandom(0, canvasHeight);
        break;
      case 2: // bottom edge
        x = getRandom(0, canvasWidth);
        y = canvasHeight;
        break;
      case 3: // left edge
        x = 0;
        y = getRandom(0, canvasHeight);
        break;
    }

    points.push({ x: x.toFixed(2), y: y.toFixed(2) });
  }

  const pathCommands = points.map((point, index) => {
    const controlPoint1 = points[(index + 1) % points.length];
    const controlPoint2 = points[(index + 2) % points.length];
    return `C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${point.x},${point.y}`;
  });

  return `M${points[0].x},${points[0].y} ${pathCommands.join(' ')} Z`;
}

function generateRandomStrokeDashArray() {
  const numSegments = Math.floor(Math.random() * 2) + 2; // Generate a random number of segments between 3 and 7
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
  const numPoints = Math.floor(Math.random() * 2) + 2; // Generate a random number of points between 10 and 20
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
    const strokeScale = [0,1,2,3,4,8,12,16,24, 32,48, 64,128,256,512,1024]
    const blendModes = ['none', ] //'overlay', 'multiply', 'darken']


    return (
      <div className='transitions' style={{  backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> 
      <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      {[...Array(randomInt(1,16))].map((x,i) =>
      <path
        key={uuidv4()}
        d={generateRandomShape()}
        //strokeDasharray='100% 100% 100% 100%'
        //strokeDashoffset='-100%'
        //strokeOpacity={randomInt(100,100)+'%'}
        stroke={fill} 
        fill={colors[randomInt(0,colors.length -1)]} 
        strokeWidth={strokeScale[randomInt(0,strokeScale.length-1)]} 
        className='transitions animation-dash'
        style={{ mixBlendMode: blendModes[randomInt(0,blendModes.length-1)]}}
    />
      )}
      {[...Array(randomInt(1,16))].map((x,i) =>
      <path
        key={uuidv4()}
        d={generateRandomSmoothBezierPath()}
        strokeDasharray='100% 100% 100% 100%'
        strokeDashoffset='-100%'
        strokeOpacity={randomInt(100,100)+'%'}
        fill={fill} stroke={colors[randomInt(0,colors.length -1)]} 
        strokeWidth={strokeScale[randomInt(0,strokeScale.length-1)]} 
        className='transitions animation-dash'
        style={{ mixBlendMode: blendModes[randomInt(0,blendModes.length-1)], }}
    />
      )}

      <path
        d={generateSquigglyLinePath()}
        //strokeDasharray='100% 100% 100% 100%'
        //strokeDashoffset='-100%'
        strokeOpacity={randomInt(100,100)+'%'}
        fill={fill} stroke={colors[randomInt(0,colors.length -1)]} 
        strokeWidth='16'
        className='transitions animation-dash'
        style={{ display: 'none', mixBlendMode: blendModes[randomInt(0,blendModes.length-1)] }}
    />

      </svg>
      </div>
  );
};

export default Sketch9;
