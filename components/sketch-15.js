import React, { useEffect, useState } from 'react';
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'


const Circle = ({ x, y, radius, fill, stroke, strokeWidth, strokeDasharray, ...props }) => {
  return <circle cx={x} cy={y} r={radius} stroke={stroke} strokeWidth={strokeWidth} fill={fill} style={{ transition: 'all 1s ease-in' }}/>;
};

const CircleGridLayer = ({
  colors,
  width,
  height,
  circleRadius,
  horizontalSpacing,
  verticalSpacing,
  noiseSeed,
  scale,
}) => {
  const noise = new Noise(noiseSeed);
  const columns = Math.ceil(width / (circleRadius * 2 + horizontalSpacing));
  const rows = Math.ceil(height / (circleRadius * 2 + verticalSpacing));

  const circles = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const x = c * (circleRadius * 2 + horizontalSpacing) + circleRadius;
      const y = r * (circleRadius * 2 + verticalSpacing) + circleRadius;

      const radius = circleRadius * (randomInt(4,60)/10 + noise.simplex2(x * scale, y * scale));
      const boolFill = randomInt(0,10)

      circles.push(<Circle strokeWidth={1 * noise.simplex2(x*scale,y*scale)} key={`circle-${r}-${c}`} x={x} y={y} radius={radius} stroke={boolFill > 5? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'} fill={boolFill < 5? 'transparent' : colors[randomInt(0,colors.length-1)]}/>);
    }
  }

  return <g>{circles}</g>;
};

const CircleGrid = ({
  colors,
  rows, cols,
  width = 1000,
  height = 1410,
  circleRadius = 30,
  horizontalSpacing = 20,
  verticalSpacing = 10,
  layers = 2,
  noiseSeed = Math.random(),
  scale = 0.01,
}) => {
  const gridLayers = [];

  for (let i = 0; i < layers; i++) {
    const layerNoiseSeed = noiseSeed + i * 100;
    gridLayers.push(
      <CircleGridLayer
        colors={colors}
        key={`layer-${i}`}
        width={width}
        height={height}
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        noiseSeed={layerNoiseSeed}
        circleRadius={rows}
        scale={cols / 4}
      />,
    );
  }

  return <g>{gridLayers}</g>;
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
      <div style={{ transition: 'background-color 1s ease-in', backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{ margin: '10%', transition: 'all 1s ease-in', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'block', width: '100%', height: 'auto', }}>
        <CircleGrid colors={colors} cols={cols} rows={rows} verticalSpacing={randomInt(4,32)} horizontalSpacing={randomInt(4,32)} />
      </svg>
      </div>
  );
};

export default Sketch14;
