import React, { useEffect, useState } from 'react';
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'

const TriangleGrid = ({
  cols,
  rowCount,
  colors,
  stroke,
  strokeWidth,
  strokeDashArray,
  width = 1000,
  height = 1410,
  scale = 0.05,
  baseTriangleSize = 120,
  noiseFactor = 120,
  spacing = 5,
}) => {
  const noise = new Noise(Math.random());
  const columns = Math.ceil(width / (baseTriangleSize + spacing));
  const rows = Math.ceil(height / ((baseTriangleSize * Math.sqrt(3) / 2) + spacing));

  const getTrianglePath = (x, y, size, isUp) => {
    const height = (size * Math.sqrt(3)) / 2;
    if (isUp) {
      const points = [
        [x, y],
        [x + size / 2, y - height],
        [x - size / 2, y - height],
      ];
      return `M${points[0][0]},${points[0][1]} L${points[1][0]},${points[1][1]} L${points[2][0]},${points[2][1]} Z`;
    } else {
      const points = [
        [x, y],
        [x + size / 2, y + height],
        [x - size / 2, y + height],
      ];
      return `M${points[0][0]},${points[0][1]} L${points[1][0]},${points[1][1]} L${points[2][0]},${points[2][1]} Z`;
    }
  };

  const triangles = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const centerX = c * (baseTriangleSize + spacing) + (r % 2 === 1 ? baseTriangleSize / 2 : 0);
      const centerY = r * (baseTriangleSize * Math.sqrt(3) / 2) + spacing;
      const noiseValue = noise.simplex2(centerX * scale, centerY * scale);
      const triangleSize = baseTriangleSize + noiseValue * noiseFactor;

      triangles.push(
        <path
          key={`up-${r}-${c}`}
          d={getTrianglePath(centerX, centerY, triangleSize, true)}
          fill={colors[randomInt(0,colors.length-1)]}
          stroke='rgba(0,0,0,.5)'
          strokeWidth='2'
          //strokeDasharray={strokeDashArray}
          //strokeDashOffset='-200%'
          className='transitions animation-dash'
        />,
      );

      triangles.push(
        <path
          key={`down-${r}-${c}`}
          d={getTrianglePath(centerX, centerY, triangleSize, false)}
          fill="none"
          stroke="black"
          strokeWidth="0.5"
          strokeDasharray={strokeDashArray}
          strokeDashoffset='25%'
          className='transitions animation-dash'
        />,
      );
    }
  }

  return <g>{triangles}</g>;
};

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



const Sketch14 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24), cols, rows,}) => {

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
      <div 
          className='transitions animation-dash'
      style={{ backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
        <TriangleGrid 
          baseTriangleSize={cols * randomInt(2,16)}    
          noiseFactor={randomInt(0,240)}
          spacing={8}
          rowCount={rows}
          colors={colors} strokeWidth={strokeWidth} stroke={stroke} strokeDashArray={strokeDashArray} />
      </svg>
      </div>
  );
};

export default Sketch14;
