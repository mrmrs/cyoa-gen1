import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'
import { Delaunay } from 'd3-delaunay'
import PoissonDiskSampling from 'poisson-disk-sampling'

const generatePoints = (width, height, minDistance, maxPoints) => {
  const pds = new PoissonDiskSampling({
    shape: [width, height],
    minDistance,
    maxPoints
  });

  return pds.fill();
};

const HatchedCircleDelaunay = ({
  points = [[100, 100], [200, 200], [300, 100], [200, 300]],
  hatchColor = "#000",
  circleColor = "#000",
}) => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const delaunay = Delaunay.from(points);
  const triangles = delaunay.triangles;

  const circleRadius = randomInt(50, 300);
  const circleX = randomInt(circleRadius, 1000 - circleRadius);
  const circleY = randomInt(circleRadius, 1410 - circleRadius);

  return (
    <svg width="1000" height="1410" viewBox="0 0 1000 1410" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch1" patternUnits="userSpaceOnUse" width="32" height="32">
          <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style={{stroke: hatchColor, strokeWidth: 1 }}/>
        </pattern>
        <pattern id="hatch2" patternUnits="userSpaceOnUse" width="16" height="16">
          <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" style={{stroke: hatchColor, strokeWidth: 1 }}/>
        </pattern>
      </defs>

      {Array(triangles.length / 3).fill().map((_, i) => {
        const pointIndices = triangles.slice(i * 3, i * 3 + 3);
        const trianglePoints = pointIndices.map(index => points[index]);
        const [p1, p2, p3] = trianglePoints;
        const hatchPattern = i % 3 === 0 ? "url(#hatch1)" : "url(#hatch2)";
        return (
          <polygon
            key={uuidv4()}
            points={`${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`}
            fill={hatchPattern}
            stroke='black'
            strokeWidth='4'
          />
        );
      })}

      <circle cx={circleX} cy={circleY} r={circleRadius} fill="url(#hatch1)" stroke={circleColor} />
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
        <HatchedCircleDelaunay points={generatePoints(1000,1410,50,10)} hatchColor="#000" circleColor="#000" /> 
      </svg>
      </div>
  );
};

export default Sketch14;
