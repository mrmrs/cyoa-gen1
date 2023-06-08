import React, { useEffect, useState } from 'react';
import { scaleLinear } from 'd3-scale';

const LorenzAttractor = ({ width = 1000, height = 1000, a = 1.4, b = -2.3, c = 2.4, d = -2.1, iterations = 100000 }) => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let x = 0, y = 0;
        const newPoints = [];
        for (let i = 0; i < iterations; i++) {
            const oldX = x;
            x = Math.sin(a * y) - Math.cos(b * oldX);
            y = Math.sin(c * oldX) - Math.cos(d * y);
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

    return (
        <>
            {points.map(([x, y], i) => (
                <circle key={i} cx={scaleX(x)} cy={scaleY(y)} r={1} fill="black" />
            ))}
        </>
    );
};

export default LorenzAttractor;
