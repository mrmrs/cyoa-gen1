import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import chroma from 'chroma-js'
import {sample} from 'lodash'
import PoissonDiskSampling from 'poisson-disk-sampling'
import { randomInt } from '../lib/random'


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

const messages = [
"Click or tap anywhere to continue...",
"A color appears",
"automatically generating colors is one of the quickest and easiest ways to start dabbling with generative design",
"you can generate two colors to create a gradient",
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
  const gridUnits = [2, 4, 8, 16, 24, 32, 48, 64, 128]
  const strokeWidthArray = [0,1,2,3,6,8,16,32,64,128]
  const [generatedDesignCount, setGeneratedDesignCount] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  const [gridUnit, setGridUnit] = useState(gridUnits[randomInt(0,gridUnits.length-1)])
  const [rows, setRows] = useState(parseInt(Number(1920) / Number(gridUnit)))
  const [cols, setCols] = useState(parseInt(Number(2560) / Number(gridUnit)))
  const [symmetrical, setSymmetrical] = useState(false)
  const [cellWidth, setCellWidth] = useState(1000/cols)
  const [cellHeight, setCellHeight] = useState(1400/rows)

  const [baseColor, setBaseColor] = useState(randomColor())
  const [bgColor, setBgColor] = useState('black')
  const [textColor, setTextColor] = useState('white')
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,400))
  const [strokeWidth, setStrokeWidth] = useState(sample([4,4,4,4,6,6,6,6,6,8,8,16,64]))
  const [colorsInt, setColorsInt] = useState(randomInt(0,100))
  const [mode, setMode] = useState(sample(['lab', 'lch']))
  const [palette, setPalette] = useState( generateGeometricPalette())
  const [coords, setCoords] = useState(undefined)

  const regenerateClick = () => {
     
    const newCount = generatedDesignCount +1
    setGeneratedDesignCount(newCount)
    if (generatedDesignCount === 1) {
      setCoords(generateCoordinates(0,width,0,height,512))
    }
    if (newCount === 1 || newCount % 3 === 0) {
      setMessageIndex((messageIndex + 1 ) % messages.length)
    }
    const newBgColor = palette[randomInt(0,palette.length-1)]
    setBgColor(newBgColor)
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,400))
    setStrokeWidth(sample([4,4,4,4,6,8,8,8,8,16,64]))
    setTextColor(chroma.contrast(newBgColor, '#ffffff') > 4 ? 'white' : 'black' )

    //grid
    setGridUnit(gridUnits[randomInt(0,gridUnits.length-1)])
    setRows(parseInt(Number(1920) / Number(gridUnit)))
    setCols(parseInt(Number(2560) / Number(gridUnit)))
    setBaseColor(randomColor())
    setColorsInt(randomInt(1,100))
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


  const actions = [
    <button key={uuidv4()} onClick={regenerateMonochrome} children='Generate Monochrome Palette' />,
    <button key={uuidv4()} onClick={regenerateColor} children='Generate Palette' />,
    <button key={uuidv4()} onClick={regenerateRandomColors} children='Random Colors Palette' />,
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
 <header style={{
     padding: '16px',
     fontFamily: 'monospace',
     display: 'flex',
     alignItems: 'center',
     zIndex: 9,

 }}>
   <kbd style={{ padding: '16px', color: 'white', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0,  }}>{generatedDesignCount}</kbd> 

   <p className='' style={{ lineHeight: 1.5, fontFamily: 'georgia', fontSize: '32px', margin: 0, flexGrow: 1, padding: '16px', color: textColor, maxWidth: '80ch' }}><span style={{ background: 'black', color: 'white'}}>{messages[messageIndex] + ' ' + width + 'x' + height}</span></p>


   </header>
    <svg height='0' width='0'>
      <defs>
        <linearGradient id='Gradient0' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[0]}  />
          <stop offset='100%' stopColor={palette[1]}  />
        </linearGradient>
        <linearGradient id='Gradient1' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[2]}  />
          <stop offset='100%' stopColor={palette[3]} />
        </linearGradient>
        <linearGradient id='Gradient2' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[4]}  />
          <stop offset='100%' stopColor={palette[5]}  />
        </linearGradient>
        <linearGradient id='Gradient3' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[6]}  />
          <stop offset='100%' stopColor={palette[7]}  />
        </linearGradient>
        <linearGradient id='Gradient4' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[8]}  />
          <stop offset='100%' stopColor={palette[9]}  />
        </linearGradient>
        <linearGradient id='Gradient5' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[10]}  />
          <stop offset='100%' stopColor={palette[11]}  />
        </linearGradient>
        <linearGradient id='Gradient6' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[12]}  />
          <stop offset='100%' stopColor={palette[13]}  />
        </linearGradient>
        <linearGradient id='Gradient7' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[14]}  />
          <stop offset='100%' stopColor={palette[15]}  />
        </linearGradient>
        <linearGradient id='Gradient8' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[1]}  />
          <stop offset='100%' stopColor={palette[8]}  />
        </linearGradient>
        <linearGradient id='Gradient9' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[2]}  />
          <stop offset='100%' stopColor={palette[9]}  />
        </linearGradient>
        <linearGradient id='Gradient10' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[3]}  />
          <stop offset='100%' stopColor={palette[10]}  />
        </linearGradient>
        <linearGradient id='Gradient11' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[4]}  />
          <stop offset='100%' stopColor={palette[11]}  />
        </linearGradient>
        <linearGradient id='Gradient12' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[5]}  />
          <stop offset='100%' stopColor={palette[12]}  />
        </linearGradient>
        <linearGradient id='Gradient13' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[6]}  />
          <stop offset='100%' stopColor={palette[13]}  />
        </linearGradient>
        <linearGradient id='Gradient14' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[7]}  />
          <stop offset='100%' stopColor={palette[14]}  />
        </linearGradient>
        <linearGradient id='Gradient15' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[8]}  />
          <stop offset='100%' stopColor={palette[15]}  />
        </linearGradient>
        <linearGradient id='Gradient16' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[randomInt(0,15)]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
      </defs>
    </svg>    
    <svg id='canvas' height={height} viewBox={'0 0 '+width+ ' '+height} width={width} style={{ transition: 'all 1s ease-in', zIndex: -9, background: bgColor, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, minHeight: '100%', minWidth: '100%', height: height+'px', width: width+'px' }}>
      <rect style={{ transition: 'all 1s ease-in', x:0,  y: 0, height: height, width: width, 
          fill: 'url(#Gradient'+randomInt(0,16)+')'
      }} />
      {[...Array(rows)].map((x,i) =>
        <line 
          key={uuidv4()}
          x1='0' x2={width}  
          y1={Number(i) * Number(gridUnit)} 
          y2={Number(i) * Number(gridUnit)} 
          stroke={palette[0]}
          className='transitions'
        />
      )}
      {[...Array(cols)].map((x,i) =>
        <line 
        key={uuidv4()}
        x1={i * gridUnit} x2={i * gridUnit}  
        y1={0}
        y2={height} 
        stroke={palette[0]}
        className='transitions'
        />
      )}
    <g style={{display: 'block'}}>
      <rect x={0} y={0} height={16} width={width/16} style={{ fill: palette[0] }} />
      <rect x={width / 16} y={0} height={16} width={width/16} style={{ fill: palette[1] }} />
      <rect x={width / 16 * 2} y={0} height={16} width={width/16} style={{ fill: palette[2] }} />
      <rect x={width / 16 * 3} y={0} height={16} width={width/16} style={{ fill: palette[3] }} />
      <rect x={width / 16 * 4} y={0} height={16} width={width/16} style={{ fill: palette[4] }} />
      <rect x={width / 16 * 5} y={0} height={16} width={width/16} style={{ fill: palette[5] }} />
      <rect x={width / 16 * 6} y={0} height={16} width={width/16} style={{ fill: palette[6] }} />
      <rect x={width / 16 * 7} y={0} height={16} width={width/16} style={{ fill: palette[7] }} />
      <rect x={width / 16 * 8} y={0} height={16} width={width/16} style={{ fill: palette[8] }} />
      <rect x={width / 16 * 9} y={0} height={16} width={width/16} style={{ fill: palette[9] }} />
      <rect x={width / 16 * 10} y={0} height={16} width={width/16} style={{ fill: palette[10] }} />
      <rect x={width / 16 * 11} y={0} height={16} width={width/16} style={{ fill: palette[11] }} />
      <rect x={width / 16 * 12} y={0} height={16} width={width/16} style={{ fill: palette[12] }} />
      <rect x={width / 16 * 13} y={0} height={16} width={width/16} style={{ fill: palette[13] }} />
      <rect x={width / 16 * 14} y={0} height={16} width={width/16} style={{ fill: palette[14] }} />
      <rect x={width / 16 * 15} y={0} height={16} width={width/16} style={{ fill: palette[15] }} />
    </g>
      {(generatedDesignCount > 1 && generatedDesignCount < 24) &&
        <>
          {[...Array(generatedDesignCount)].map((x,i) =>
            <line 
        key={uuidv4()}
            x1={coords[i].x1} y1={coords[i].y1} x2={coords[i].x2} y2={coords[i].y2} stroke={palette[palette.length % i+1]} strokeWidth={strokeWidth} 
            className='transitions' />
           )}
        </>
      }
      {(generatedDesignCount > 4 && generatedDesignCount < 24) &&
        <>
          {[...Array(generatedDesignCount - 4)].map((x,i) =>
            <circle 
        key={uuidv4()}
            cx={coords[i].x1} cy={coords[i].y1} r={randomInt(0,128)} stroke={palette[palette.length % i+1]} strokeWidth={strokeWidthArray[randomInt(0,strokeWidthArray.length-1)]} 
          //fill={'url(#Gradient'+randomInt(0,16)+')'}
          fill='transparent'
            className='transitions' />
           )}
        </>
      }
      {(generatedDesignCount > 8 && generatedDesignCount < 24) &&
        <>
          {[...Array(generatedDesignCount - 8)].map((x,i) =>
            <rect 
        key={uuidv4()}
            x={coords[i+8].x1} y={coords[i+8].y1} width={randomInt(0,128)} height={randomInt(0,128)} stroke={palette[palette.length % i+1]} strokeWidth={strokeWidthArray[randomInt(0,strokeWidthArray.length-1)]} 
          //fill={'url(#Gradient'+randomInt(0,16)+')'}
          fill='transparent'
            className='transitions' />
           )}
        </>
      }
    </svg>
    <footer style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'transparent', padding: '16px', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      {generatedDesignCount % 8 === 0 &&
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
