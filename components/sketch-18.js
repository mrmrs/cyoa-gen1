import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3'
import { geoOrthographic, geoPath } from 'd3-geo'
import { Noise } from 'noisejs'
import randomColor from 'random-hex-color'
import { randomInt} from '../lib/random'


const Sphere = ({ colors, radius = 250, precision = 2 }) => {
  const ref = useRef();

  const initialColor = colors[randomInt(0,colors.length-1)]

  useEffect(() => {
    const svg = d3.select(ref.current);
    const projection = geoOrthographic()
      .scale(radius)
      .translate([radius + 1, radius + 1])
      .precision(precision);

    svg.selectAll("*").remove(); // Clear previous render

    svg.append("path")
      .datum({type: "Sphere"})
      .attr("class", "sphere")
      .attr("stroke", initialColor)
      .attr("fill", "none")
      .attr("stroke-width", "1")
      .attr("d", geoPath(projection));

    svg.append("path")
      .datum(d3.geoGraticule())
      .attr("class", "graticule")
      .attr("fill", "none")
      .attr("stroke", initialColor)
      .attr("stroke-width", "1")
      .attr("d", geoPath(projection));

    svg.append("path")
      .datum(d3.geoGraticule().outline())
      .attr("class", "graticuleOutline")
      .attr("stroke", initialColor)
      .attr("fill", "none")
      .attr("stroke-width", "1")
      .attr("d", geoPath(projection));

  }, [radius, precision]);

  return (
    <svg ref={ref} width={radius * 2 + 2} height={radius * 2 + 2} />
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
    const strokeScale = [64,128,256,512,1024]

    return (
      <div style={{ transition: 'background-color 1s ease-in', backgroundImage: 'url(https://mrmrs.github.io/photos/paper-3.jpg)', backgroundSize: 'cover', aspectRatio: '100/141', width: '100%', backgroundPosition: 'center center', backgroundBlendMode: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}> <svg viewBox={'0 0 '+width+' '+height} stroke='white' width='1000' height='1410' style={{ margin: '10%', transition: 'all 1s ease-in', backgroundColor: 'rgba(250,250,24,0)',backgroundBlendMode: 'none',  mixBlendMode: 'darken', overflow: 'hidden', display: 'flex', width: '100%', height: 'auto', }}>
      <Sphere precision={10} radius={96} colors={colors} />
      <Sphere precision={10} radius={256} colors={colors} />
      </svg>
      </div>
  );
};

export default Sketch14;
