import React, { useEffect, useState } from 'react';
import RandomGrid from './random-grid'
import { Noise } from 'noisejs'
import { randomInt} from '../lib/random'

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const RandomTopography = ({ width = 1000, height = 1410, contourLevels = 10 }) => {
  const noise = new Noise(Math.random());
  const scale = .1;

  const getContourPath = (level) => {
    const stepX = contourLevels;
    const stepY = contourLevels;

    let path = '';

    for (let y = 0; y <= height; y += stepY) {
      for (let x = 0; x <= width; x += stepX) {
        const elevation = noise.perlin2(x * scale, y * scale);
        if (Math.abs(elevation - level) < 0.01) {
          path += `M${x},${y} L${x + stepX},${y} L${x + stepX},${y + stepY} L${x},${y + stepY} Z`;
        }
      }
    }

    return path;
  };

  const contours = Array.from({ length: contourLevels, stroke: 'black', strokeWidth: '1' }, (_, i) => {
    const level = (i + 1) / (contourLevels + 1);
    const path = getContourPath(level);
    return (
      <path key={i} d={path} fill="none" stroke="currentColor" strokeWidth={1} />
    );
  });

  return <g style={{color: 'inherit'}}>{contours}</g>;
};

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

const Sketch13 = ({ colors, bgColor, color = 'red', maxLimit = randomInt(50,150), strokeWidth = randomInt(4,24)}) => {

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
    const contourScale = [32,64,128,256,384]
    const blendModes = ['darken', ] //'overlay', 'multiply', 'darken']


    return (
      <div className='transitions' style={{ backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'darken', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> 
      <svg 
      viewBox={'0 0 '+width+' '+height} 
      width='1000' height='1410' 
      //className='m2 m3-m m4-l'
      stroke='white' 
      className='transitions'
      style={{ 
        margin: '10%',
        backgroundColor: 'rgba(250,250,24,0)',
        backgroundBlendMode: 'none',  
        mixBlendMode: 'darken', 
        overflow: 'hidden', 
        display: 'block', 
        width: '100%', 
        height: 'auto', 
        aspectRatio: '100/141',
        color: colors[randomInt(0,colors.length-1)]
      }}>
        <RandomTopography contourLevels={contourScale[randomInt(0,contourScale.length-1)]} />
      </svg>
      </div>
  );
};

export default Sketch13;
