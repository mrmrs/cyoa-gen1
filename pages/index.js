import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import chroma from 'chroma-js'
import {sample} from 'lodash'
import PoissonDiskSampling from 'poisson-disk-sampling'
import { randomInt } from '../lib/random'
import LineGridVertical from '../components/line-grid-vertical'
import LineGridHorizontal from '../components/line-grid-horizontal'
import ShapeGrid from '../components/shape-grid'
import RectGrid from '../components/rect-grid'
import EquilateralTriangle from '../components/equilateral-triangle'

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

const Button = ({...props}) => {
  return (
    <button className='button'  {...props}>
      {props.children}
    </button>
  )
}

function generateCoordinates(xMin, xMax, yMin, yMax, length) {
  const coordinates = Array.from({length}, () => {
    const x1 = xMin + Math.random() * (xMax - xMin);
    const y1 = yMin + Math.random() * (yMax - yMin);
    const x2 = xMin + Math.random() * (xMax - xMin);
    const y2 = yMin + Math.random() * (yMax - yMin);
    return { x1, y1, x2, y2 };
  });

  return coordinates;
}
function generateGeometricPalette() {
  const palette = [];
  
  // Generate random hue for the initial color
  const initialHue = Math.floor(Math.random() * 360);
  
  for (let i = 0; i < 16; i++) {
    // Generate random hue and saturation variations
    const hueVariation = Math.random() * 180;
    const saturationVariation = Math.random() * 70;
    const lightnessVariation = Math.random() * 60;
    
    // Calculate hue, saturation, and lightness values
    const hue = (initialHue + hueVariation + 180) % 360;
    const saturation = 30 + saturationVariation;
    const lightness = 30 + lightnessVariation;
    
    // Convert HSL to hexadecimal color code
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    // Push the color to the palette
    palette.push(color);
  }
  
  return palette;
}
const introMessage = "Click or tap anywhere to continue..."
const introMessage2 = "...keep clicking"

const messages = [
"A color is generated",
"Another color is generated creating a gradient",
"We can add a line",
"or a bunch of lines",
"we can add a line",
"or a bunch of lines",
"or a shape",
"or a bunch of shapes",
"we can generate grids",
"we can randomize coordinates and cluster them in different ways",
]

export default function Home() {
  const size = useWindowSize()
  const height = size.height
  const width = size.width
  const gridUnits = [8, 16, 24, 32, 48, 64, 128, 256]
  const gapUnits = [2,4,8, 16, 24, 32, 48, 64, 128]
  const strokeWidthArray = [0,1,2,3,6,8,16,32,64,128,256]
  const linesArray = [2,3,4,8,12,16,32]
  const [generatedDesignCount, setGeneratedDesignCount] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [gap, setGap] = useState(gapUnits[randomInt(0,gapUnits.length-1)])
  const [lines, setLines] = useState(linesArray[randomInt(0,linesArray.length-1)])
  const [rowsMax, setRowsMax] = useState(32)
  const [colsMax, setColsMax] = useState(32)

  const [gridUnit, setGridUnit] = useState(gridUnits[randomInt(0,gridUnits.length-1)])
  const [rows, setRows] = useState(randomInt(3,rowsMax))
  const [cols, setCols] = useState(randomInt(3,colsMax))
  const [symmetrical, setSymmetrical] = useState(false)
  const [cellWidth, setCellWidth] = useState(1000/cols)
  const [cellHeight, setCellHeight] = useState(1400/rows)

  const [baseColor, setBaseColor] = useState(randomColor())
  const [bgColor, setBgColor] = useState('black')
  const [textColor, setTextColor] = useState('white')
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,400))
  const [strokeWidth, setStrokeWidth] = useState(sample([0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,4,4,4,4,6,6,6,6,6,8,8,16,32,64,96,128]))
  const [colorsInt, setColorsInt] = useState(randomInt(0,100))
  const [mode, setMode] = useState(sample(['lab', 'lch']))
  const [palette, setPalette] = useState( generateGeometricPalette())
  const [coords, setCoords] = useState(undefined)
  const [density, setDensity] = useState(2)
  const [strokeDashArray, setStrokeDashArray] = useState(generateRandomStrokeDashArray())
  const [gradient,setGradient] = useState('url(#Gradient'+randomInt(0,15)+')')
  const [gradient2,setGradient2] = useState('url(#Gradient'+randomInt(0,15)+')')

  const regenerateClick = () => {
    
    const newCount = generatedDesignCount +1
    setGridUnit(gridUnits[randomInt(0,gridUnits.length-1)])
    setGeneratedDesignCount(newCount)
    setCols(randomInt(2,32))
    setRows(randomInt(2,32))
    if (generatedDesignCount === 1) {
      setCoords(generateCoordinates(0,width,0,height,512))
    }
    if (newCount % 3 === 0 && newCount !== 1) {
      setMessageIndex((messageIndex + 1 ) % messages.length)
    }
    const newBgColor = palette[randomInt(0,palette.length-1)]
    setBgColor(newBgColor)
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,400))
    setStrokeWidth(sample([4,4,4,4,6,8,8,8,8,16,64]))
    setTextColor(chroma.contrast(newBgColor, '#ffffff') > 4 ? 'white' : 'black' )
    setStrokeDashArray(generateRandomStrokeDashArray())

    //setSeed(Math.random());
    //setBaseFrequency(Math.random());
    //setNumOctaves(Math.floor(Math.random() * 10));


    //grid
    setLines(linesArray[randomInt(0,linesArray.length-1)])
    setBaseColor(randomColor())
    setColorsInt(randomInt(1,100))
    setGradient('url(#Gradient'+randomInt(0,15)+')')
    const newPalette = sample([
      chroma.scale([randomColor(), randomColor()]).mode(mode).colors(16),
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(16),
      chroma.scale([chroma(baseColor).darken(4), baseColor, chroma(baseColor).brighten(4)]).mode(mode).colors(16),
      //chroma.scale([chroma(baseColor).brighten(4), baseColor, chroma(baseColor).darken(4)]).mode(mode).colors(16),
      //chroma.scale(['#ff4f4f', baseColor, '#644fff']).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(208,100%,10%,1)'), chroma('hsla(216,100%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(208,60%,10%,1)'), chroma('hsla(216,60%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(290,100%,10%,1)'), chroma('hsla(320,100%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(260,60%,10%,1)'), chroma('hsla(290,60%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([ '#FF4F4F', '#FF7A4F', '#7FFF4F', '#4FD8FF', '#644FFF' ]).mode(mode).colors(16),
      generateGeometricPalette(),
      [ '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FFCC33', '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#732E6C', '#363958', '#5E2D79', '#4B0082', '#2E0854', '#FF9933'  ],
      [ '#E63946', '#F1C453', '#A8DADC', '#457B9D', '#1D3557', '#FFB6B9', '#CB997E', '#6D6875', '#2A9D8F', '#E9C46A', '#F4A261', '#5EAAA8', '#DD6E42', '#4F5D75', '#9A8C98', '#C08497', ],
      [ "#FCFAEE", "#FFFBF0", "#FEF8E6", "#FFEDD3", "#F9E0C7", "#F0D4BB", "#E2C8B0", "#D7BCA5", "#CAB09A", "#BDA48F", "#AF997F", "#A18E6F", "#927F5B", "#836F47", "#745F33", "#654E1F" ], // midsommar
      [ "#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40" ],
      [ "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722" ],
      [ "#FF5252", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#00BCD4", "#009688", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF5722", "#795548", "#607D8B", "#9E9E9E" ]

    ])
    setMode(sample(['lch', 'lab']))
    //setPalette(
    //  colorsInt > 94?
    //  [
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //  ] : [
    //    newPalette[0],
    //    newPalette[1],
    //    newPalette[2],
    //    newPalette[3],
    //    newPalette[4],
    //    newPalette[5],
    //    newPalette[6],
    //    newPalette[7],
    //    newPalette[8],
    //    newPalette[9],
    //    newPalette[10],
    //    newPalette[11],
    //    newPalette[12],
    //    newPalette[13],
    //    newPalette[14],
    //    newPalette[15],
    //  ]
    //)
  }

  const regenerateColor = () => {
    setPalette(generateGeometricPalette())
  }
  const regenerateRandomColors = () => {
    setPalette(
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(16),
    )
  }
  const regenerateMonochrome = () => {
      setPalette(chroma.scale([chroma(baseColor).darken(4), baseColor, chroma(baseColor).brighten(4)]).mode(mode).colors(16))
  }
  const regenerateCoordinates = () => {
      setCoords(generateCoordinates(0,width,0,height,512))
  }

  const actions = [
    <Button key={uuidv4()} onClick={regenerateMonochrome}>Monochrome Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateColor}>Geometric Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateRandomColors}>Random Palette</Button>,
  ]


  return (
    <>
      <Head>
        <title>A Journey Through Generative Space</title>
        <meta name="description" content="Generated by Components AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='theme-color' content={palette[15]} />
      </Head>
      <main style={{ position: 'relative', width: '100%', height: '100%', }} onClick={(e) => regenerateClick()}>
    {generatedDesignCount < 1 &&
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>{introMessage}</p>
      </div>
    }
 
    {generatedDesignCount === 1 &&
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>{introMessage2}</p>
      </div>
    }
    {generatedDesignCount > 0 &&
    <svg id='canvas' height={height} viewBox={'0 0 '+width+ ' '+height} width={width} style={{ transition: 'all 1s ease-in', zIndex: -9, background: generatedDesignCount < 1? 'white': bgColor, minHeight: '100%', minWidth: '100%', mixBlendMode: 'multiply' }}>
      {generatedDesignCount > 1 &&
        <rect 
        x={0}
        y={0}
        height='100%'
        width='100%'
        style={{ 
          transition: 'all 1s ease-in', 
          height: height, 
          width: width, 
          fill: gradient
        }} />
      }
      {generatedDesignCount > 3 && generatedDesignCount < 8 &&
        <>
        <circle 
        r={width / 6}
        cx={width / 2}
        cy={height / 2}
        style={{ transition: 'all 1s ease-in', x:0,  y: 0, height: height, width: width, 
            fill: gradient,
            stroke: 'rgba(0,0,0,.05)',
        }} />
        
        </>
      }
      {generatedDesignCount > 7 && generatedDesignCount < 12 &&
        <>
        <rect 
        x={width/3}
        y={(height - (width/3)) /2}
        width={width / 3}
        height={width / 3}
        rx={generatedDesignCount > 9? randomInt(1,32) : 0}
        style={{ 
            transition: 'all 1s ease-in', 
            fill: gradient,
            stroke: 'rgba(0,0,0,.05)',
        }} />
        
        </>
      }
      {generatedDesignCount > 11 && generatedDesignCount < 16 &&
        <EquilateralTriangle canvasWidth={width} canvasHeight={height} size={width/3} fill={gradient} 
        stroke='rgba(0,0,0,.05)'
          />
      }
      {generatedDesignCount === 16 &&
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
      }
      {generatedDesignCount === 17 &&
          <>
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+16} x2={width/2+16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-16} x2={width/2-16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          </>
      }
      {generatedDesignCount === 18 &&
          <>
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+16} x2={width/2+16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-16} x2={width/2-16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+32} x2={width/2+32} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-32} x2={width/2-32} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          </>
      }
      {(generatedDesignCount > 18 && generatedDesignCount < 23) &&
          <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} animate={generatedDesignCount > 20? true : false} width={width} height={height} strokeDashArray={generatedDesignCount > 12? strokeDashArray : 'none'} />
      }
      {generatedDesignCount > 22 && generatedDesignCount < 27 &&
          <>
          <LineGridHorizontal lines={rows * density} strokeWidth={1} palette={palette} cols={cols} rows={rows} width={width} height={height} yOffset={0} animate={generatedDesignCount > 24? true : false} strokeDashArray={strokeDashArray} />
          </>
      }
      {generatedDesignCount > 25 && generatedDesignCount < 40 &&
          <>
          <LineGridVertical lines={cols * 4} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} strokeDashArray={strokeDashArray} />
          <LineGridHorizontal lines={cols * 4} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} yOffset={0} strokeDashArray={strokeDashArray} />
          </>
      }


      {generatedDesignCount > 39 && generatedDesignCount < 45  &&
          <RectGrid palette={palette} cols={cols} rows={rows} width={width} height={height} strokeWidth={strokeWidth} 
            fill={generatedDesignCount % 4 === 0 ? gradient : palette[randomInt(0,15)]}
          />
      }
      {generatedDesignCount > 44 && generatedDesignCount < 10000  &&
          <ShapeGrid palette={palette} cols={cols} rows={rows} width={width} height={height} strokeWidth={strokeWidth} 
            fill={generatedDesignCount % 3 === 0 ? gradient : palette[randomInt(0,15)]}
          />
      }
    </svg>
    }
    {generatedDesignCount > 0 &&
    <svg height='0' width='0' style={{ height: 0, width: 0, display: 'block'}}>
      <defs>
        <linearGradient id='Gradient0' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[0]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient1' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[1]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]} />
        </linearGradient>
        <linearGradient id='Gradient2' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[2]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient3' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[3]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient4' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[4]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient5' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[5]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient6' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[6]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient7' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[7]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient8' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[8]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient9' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[9]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient10' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[10]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient11' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[11]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient12' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[12]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient13' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[13]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient14' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[14]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient15' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[15]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient16' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[randomInt(0,15)]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
      </defs>
    </svg>    
    }
   <kbd style={{ padding: '16px', color: 'white', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, right: 0,  }}>{generatedDesignCount}</kbd> 
    <footer style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'transparent', padding: '16px', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      {generatedDesignCount % 8 === 0 && generatedDesignCount !== 0 &&
        <>
          {actions[randomInt(0,actions.length-1)]}
          {actions[randomInt(0,actions.length-1)]}
        </>
      }
    </footer>
      </main>
    </>
  )
}



// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
