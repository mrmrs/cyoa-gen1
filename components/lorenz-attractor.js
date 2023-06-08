import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { randomInt } from '../lib/random'

const LorenzAttractor = ({ margin, stroke, strokeWidth, width = 1000, height = 1000, a = 10, b = 28, c = 8/3, dt = 0.01, iterations = 10000 }) => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let x = 1, y = 1, z = 1;
        const newPoints = [];
        for (let i = 0; i < iterations; i++) {
            const dx = a * (y - x);
            const dy = x * (b - z) - y;
            const dz = x * y - c * z;
            x += dt * dx;
            y += dt * dy;
            z += dt * dz;
            newPoints.push([x, y]);
        }
        setPoints(newPoints);
    }, [a, b, c, dt, iterations]);

    const scaleX = scaleLinear()
        .domain([Math.min(...points.map(([x]) => x)), Math.max(...points.map(([x]) => x))])
        .range([margin, width-margin]);

    const scaleY = scaleLinear()
        .domain([Math.min(...points.map(([, y]) => y)), Math.max(...points.map(([, y]) => y))])
        .range([height-margin, margin]);

    const linePath = points
        .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${scaleX(x)},${scaleY(y)}`)
        .join(' ');

    return (
        <path d={linePath} strokeLinecap='round' strokeDasharray={randomInt(0,100) > 50? '0' : '1px 64px'} stroke={stroke} strokeOpacity={randomInt(50,80)+'%'} strokeWidth={strokeWidth} fill='none' />
    );
};

export default LorenzAttractor;
