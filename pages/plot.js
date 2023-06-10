import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import chroma from 'chroma-js'
import {sample, sampleSize} from 'lodash'
import { randomInt } from '../lib/random'
import LineGridVertical from '../components/line-grid-vertical'
import LineGridHorizontal from '../components/line-grid-horizontal'
import ShapeGrid from '../components/shape-grid'
import RectGrid from '../components/rect-grid'
import EquilateralTriangle from '../components/equilateral-triangle'
import Circles from '../components/circles'
import CirclesFullStack from '../components/circle-full-stack'
import PolarGraph from '../components/polar-graph'
import Penrose from '../components/penrose'
import PenroseGrid from '../components/penrose-grid'
import CliffordAttractor from '../components/clifford-attractor'
import LorenzAttractor from '../components/lorenz-attractor'
import DeJongAttractor from '../components/dejong-attractor'
import Triangle from '../components/triangle-random-height'

const Button = ({...props}) => {
  return (
    <button className='button'  {...props}>
      {props.children}
    </button>
  )
}


// Need messages to inform user how to proceed and also this 
// allows us to get the window width and height
const introMessage = "Click or tap anywhere to continue..."
const introMessage2 = "...keep clicking"

const SVGScales = [
  0,1,2,3,4,5,8,16,24,32,48,64,128,256,512,1024,2048,4096,9192
]

export default function Home() {
  const size = useWindowSize()
  const height = size.height
  const width = size.width
  const gridUnits = [8, 16, 24, 32, 48, 64, 128, 256]
  const gapUnits = [2,4,8, 16, 24, 32, 48, 64, 128]
  const strokeWidthArray = [0,1,2,3,6,8,16,32,64,128,256]
  const linesArray = [2,3,4,8,12,16,32]
  const marginArray = [0,0,0,0,0,32,64,128,128,128,128,128]
  const [margin, setMargin] = useState(sample(marginArray))
  const [randomInteger, setRandomInteger] = useState(randomInt(1,100))
  const [octaves, setOctaves] = useState(randomInt(1,10))
  const [scale, setScale] = useState(sample(SVGScales))
  const [baseFrequency, setBaseFrequency] = useState(randomInt(0,randomInt(10,randomInt(20,10000))) / 100000)
  const [randomBigInt, setRandomBigInt] = useState(randomInt(1,512))
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
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,400))
  const [strokeWidth, setStrokeWidth] = useState(1)
  const [colorsInt, setColorsInt] = useState(randomInt(0,100))
  const [mode, setMode] = useState(sample(['lab', 'lch']))
  const [palette, setPalette] = useState(['#000000'])
  const [coords, setCoords] = useState(undefined)
  const [density, setDensity] = useState(8)
  const [channelY,setChannelY] = useState(sample(['R','G','B', 'A']))
  const [channelX,setChannelX] = useState(sample(['R','G','B', 'A']))
  const [turbType,setTurbType] = useState(sample(['fractalNoise','turbulence']))

  const regenerateClick = () => {
    
    const newCount = generatedDesignCount +1
    setRandomBigInt(randomInt(128,512))
    setMargin(sample(marginArray))
    setChannelX(sample(['R','G','B']))
    setChannelY(sample(['R','G','B']))
    setTurbType(sample(['fractalNoise', 'turbulence']))
    setOctaves(randomInt(1,8))
    setScale(sample(SVGScales))
    setBaseFrequency(randomInt(0,randomInt(10,randomInt(20,10000))) / 100000)
    setGridUnit(gridUnits[randomInt(0,gridUnits.length-1)])
    setGeneratedDesignCount(newCount)
    setCols(randomInt(2,32))
    setRows(randomInt(2,32))
    const newBgColor = palette[randomInt(0,palette.length-1)]
    setBgColor(newBgColor)
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,400))
    setStrokeWidth(1)

    //setSeed(Math.random());
    //setBaseFrequency(Math.random());
    //setNumOctaves(Math.floor(Math.random() * 10));


    //grid
    setLines(linesArray[randomInt(0,linesArray.length-1)])
    setBaseColor(randomColor())
    setColorsInt(randomInt(1,100))
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

  }

  const actions = sampleSize([
    <Button key={uuidv4()} onClick={regenerateMonochrome}>Monochrome Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateColor}>Geometric Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateRandomColors}>Random Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateCoordinates}>New Coordinates</Button>,
  ], 2);

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
    <svg id='canvas' height={height} viewBox={'0 0 '+width+ ' '+height} width={width} style={{ transition: 'all 1s ease-in', zIndex: -9, background: 'white', minHeight: '100%', minWidth: '100%',}}>
        <g stroke='black' strokeWidth={1} fill='white'>

      {generatedDesignCount > 1 &&
        <>
        <CliffordAttractor margin={margin} strokeWidth={.5} stroke='rgba(0,0,255,.1)' colors={palette} height={height} width={width} a={randomInt(-300,300) / 100} b={randomInt(-300,300) / 100} c={randomInt(-300,300) / 100} iterations={randomInt(10000,20000)} />
          <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} animate={generatedDesignCount % 9 === 0? true : false} width={width} height={height} xOffset={margin} yOffset={margin} />
        </>
      }
      {generatedDesignCount > 1 &&
          <LineGridHorizontal lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} animate={generatedDesignCount % 9 === 0? true : false} width={width} height={height} xOffset={margin} yOffset={margin} />
      }
      {generatedDesignCount % 5 === 0 &&
          <>
            {[...Array(cols)].map((x,i) =>
              <g key={uuidv4()}>
                {[...Array(rows+1)].map((y,j) =>
                  <Triangle 
                  type='static' 
                  key={uuidv4()} 
                  x={i * (width-margin*2)/cols + margin} 
                  size={(width-margin*2-strokeWidth*cols)/cols} 
                  y={j * (height-margin*2)/rows+margin} 
                  height={height} 
                  strokeWidth={1} stroke='black'
                  />
                )}
              </g>
            )}
          </>
      }
      {generatedDesignCount % 3 === 0 &&
          <>
            {[...Array(cols)].map((x,i) =>
              <g key={uuidv4()}>
                {[...Array(rows+1)].map((y,j) =>
                  <circle key={uuidv4()} cx={randomInt(margin,width-margin)}  cy={randomInt(margin,height-margin)} r={randomInt(1,width/rows)} />
                )}
              </g>
            )}
          </>
      }
      {generatedDesignCount % 4 === 0 &&
          <>
            {[...Array(randomBigInt)].map((x,i) =>
              <rect key={uuidv4()} x={randomInt(margin,width-margin)}  y={randomInt(margin,height-margin)} 
                height={randomInt(1,width/rows)} 
                width={randomInt(1,width/cols)} 
              />
            )}
          </>
      }
      </g>
    </svg>
    }
   <kbd style={{ padding: '16px', color: 'white', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, right: 0,  }}>{generatedDesignCount}</kbd> 
    <footer style={{  position: 'absolute', bottom: 0, left: 0, right: 0, background: 'transparent', padding: '16px', justifyContent: 'center', gap: '2rem', display: 'none' }}>
      {generatedDesignCount % 6 === 0 && generatedDesignCount !== 0 && actions}
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
