import React, { useEffect, useRef } from 'react';
import { randomInt } from '../lib/random'

const RandomGrid = ({
  bgColor,
  colors = ['black', 'red'],
  width = 1000,
  height = 1400,
  cols,
  rows,
  symmetrical,
  cellWidth,
  cellHeight,
  strokeWidth = 1,
  strokeDashoffset = '100%',
  strokeDasharray = '100% 100%',
}) => {
  const groupRef = useRef(null);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateGrid = () => {
    const columns = cols || getRandom(2, 32);
    const row = rows || getRandom(2, 32);
    const isSymmetrical = symmetrical !== undefined ? symmetrical : Math.random() < 0.9;
    const columnWidth = cellWidth || (width - strokeWidth) / columns;
    const rowHeight = isSymmetrical ? columnWidth : cellHeight || height / row;

    let grid = '';

    for (let i = 0; i <= columns; i++) {
      grid += `M${i * columnWidth},0 L${i * columnWidth},${height} `;
    }

    for (let i = 0; i <= row; i++) {
      grid += `M0,${i * rowHeight} L${width},${i * rowHeight} `;
    }

    return grid;
  };

  useEffect(() => {
    const gridPath = generateGrid();
    const pathElem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElem.setAttributeNS(null, 'd', gridPath);
    pathElem.setAttributeNS(null, 'fill', 'none');
    pathElem.setAttributeNS(null, 'stroke', bgColor);
    pathElem.setAttributeNS(null, 'stroke-width', strokeWidth);
    pathElem.setAttributeNS(null, 'stroke-dashoffset', strokeDashoffset);
    pathElem.setAttributeNS(null, 'stroke-dasharray', strokeDasharray);
    pathElem.setAttributeNS(null, 'style', 'color: inherit; transition: all 1s ease;animation: dash 10s alternate ease-in-out infinite forwards; ');
    
    // Clear the group's children before appending a new path element
    while (groupRef.current.firstChild) {
      groupRef.current.removeChild(groupRef.current.firstChild);
    }

    groupRef.current.appendChild(pathElem);
  }, [width, height, cols, rows, symmetrical, cellWidth, cellHeight]);

  return <g ref={groupRef} />;
}

export default RandomGrid;
