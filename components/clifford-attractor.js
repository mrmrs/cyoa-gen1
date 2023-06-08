import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { randomInt } from '../lib/random'

const CliffordAttractor = ({ strokeWidth, stroke, colors, width = 1000, height = 1000, a = -1.4, b = 1.6, c = 1.0, d = 0.7, iterations = 100000 }) => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let x = 0, y = 0;
        const newPoints = [];
        for (let i = 0; i < iterations; i++) {
            const oldX = x;
            x = Math.sin(a * y) + c * Math.cos(a * oldX);
            y = Math.sin(b * oldX) + d * Math.cos(b * y);
            newPoints.push([x, y]);
        }
        setPoints(newPoints);
    }, [a, b, c, d, iterations]);

    const scaleX = scaleLinear()
        .domain([Math.min(...points.map(([x]) => x)), Math.max(...points.map(([x]) => x))])
        .range([0, width]);

    const scaleY = scaleLinear()
        .domain([Math.min(...points.map(([, y]) => y)), Math.max(...points.map(([, y]) => y))])
        .range([height, 0]);

    // Create the quadratic Bézier curve path
    const linePath = points
        .map(([x, y], i, arr) => {
            if (i === 0) return `M ${scaleX(x)},${scaleY(y)}`;
            if (i < arr.length - 1) {
                const [nx, ny] = arr[i + 1];
                // 'Q' for the first curve, 'T' for subsequent curves
                return `${i === 1 ? 'q' : 'T'} ${scaleX(nx)},${scaleY(ny)} ${scaleX(nx)},${scaleY(ny)}`;
            }
            return '';
        })
        .join(' ');

    return (
      <path d={linePath} strokeOpacity='100%' strokeWidth={strokeWidth} stroke={stroke} fill="none" />
    );
};

export default CliffordAttractor;
