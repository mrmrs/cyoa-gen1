import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { Delaunay } from 'd3-delaunay';
import { randomInt} from '../lib/random'

const CubeGrid = ({
  gridSize = 10,
  cubeSize = 50,
  rotationRange = [0, 360],
  strokeColor = "#000",
}) => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRotation = () => {
    return randomInt(...rotationRange);
  };

  const cubes = Array(gridSize).fill().map((_, i) => 
    Array(gridSize).fill().map((_, j) => {
      const x = i * cubeSize * 2;
      const y = j * cubeSize * 2;
      const rotation = getRotation();

      return { x, y, rotation };
    })
  ).flat();

  return (
    <svg width="1000" height="1410" viewBox="0 0 1000 1410" xmlns="http://www.w3.org/2000/svg">
      {cubes.map((cube, i) => (
        <g key={uuidv4()} transform={`translate(${cube.x},${cube.y}) rotate(${cube.rotation})`}>
          <rect x={-cubeSize/2} y={-cubeSize/2} width={cubeSize} height={cubeSize} fill="transparent" stroke={strokeColor} />
          <polygon points={`0,${-cubeSize/2} ${cubeSize/2},0 0,${cubeSize/2}`} fill="transparent" stroke={strokeColor} />
          <polygon points={`-${cubeSize/2},0 0,-${cubeSize/2} 0,${cubeSize/2}`} fill="transparent" stroke={strokeColor} />
        </g>
      ))}
    </svg>
  );
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
      <div className='transitions' style={{  backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' className='transitions' style={{ margin: '10%', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
      <CubeGrid colors={colors} />
      </svg>
      </div>
  );
};

export default Sketch14;
