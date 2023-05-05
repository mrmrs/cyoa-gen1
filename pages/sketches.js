import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import chroma from 'chroma-js'
import {sample} from 'lodash'
import { randomInt } from '../lib/random'
import Sketch0 from '../components/sketch-0'
import Sketch0a from '../components/sketch-0a'
import Sketch1 from '../components/sketch-1'
import Sketch1a from '../components/sketch-1a'
import Sketch2 from '../components/sketch-2'
import Sketch3 from '../components/sketch-3'
import Sketch4 from '../components/sketch-4'
import Sketch5 from '../components/sketch-5'
import Sketch6 from '../components/sketch-6'
import Sketch7 from '../components/sketch-7'
import Sketch8 from '../components/sketch-8'
import Sketch9 from '../components/sketch-9'
import Sketch10 from '../components/sketch-10'
import Sketch11 from '../components/sketch-11'
import Sketch11a from '../components/sketch-11a'
import Sketch12 from '../components/sketch-12'
import Sketch14 from '../components/sketch-14'
import Sketch15 from '../components/sketch-15'
import Sketch16 from '../components/sketch-16'

const messages = [
"It seems the possibilities are endless...",
"...this system can generate more unique art pieces than there are atoms in the universe",
"There are three primary colors: red, blue, and yellow. All other colors can be created by mixing these three.",
"Colors can affect our emotions and mood, with warm colors like red and orange evoking energy, while cool colors like blue and green promote calmness.",
"The color wheel, invented by Sir Isaac Newton, is a visual representation of the relationships between colors.",
"Complementary colors are those that are opposite each other on the color wheel, such as blue and orange or red and green.",
"Colors can be described by their hue, saturation, and brightness, which are the main components of color theory.",
"Tetrachromacy is a rare condition in which a person has four types of color receptors in their eyes, allowing them to see more colors than the average person.",
"The most common geometric shapes are circles, squares, triangles, and rectangles.",
"Polygons are shapes with straight sides, and the number of sides determines their specific name, such as pentagon (5 sides) or hexagon (6 sides).",
"The golden ratio is a mathematical concept often found in nature and art, where the proportion of two quantities is approximately 1.618.",
"Sacred geometry is the study of geometric shapes and their symbolic meanings in various spiritual and religious contexts.",
"A Mobius strip is a shape with only one surface and one edge, often used as a symbol of infinity.",
"Tessellations are patterns formed by repeating shapes that fit together perfectly without any gaps or overlaps.",
"A fractal is a geometric shape that can be divided into smaller parts, each of which is a reduced-scale copy of the whole.",
"The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, often found in nature and art.",
"Anamorphic art uses geometric shapes and perspective to create illusions that can only be seen from specific viewpoints.",
"The Pantone Color Matching System is a standardized system for identifying and matching colors used in various industries.",
"Color blindness is a condition where a person has difficulty distinguishing certain colors, most commonly red and green.",
"Negative space is the area surrounding the main subject of a design or artwork, often used to create interesting shapes and compositions.",
"The rule of thirds is a compositional principle that divides an image into a 3x3 grid, suggesting that placing subjects along the lines or intersections creates a more balanced and visually appealing composition.",
"The RGB color model is used in electronic displays and represents colors as a combination of red, green, and blue light.",
"The CMYK color model is used in printing and represents colors as a combination of cyan, magenta, yellow, and black ink.",
"Monochromatic color schemes use different shades, tints, and tones of a single color for a harmonious and visually appealing effect.",
"Analogous color schemes use colors that are adjacent to each other on the color wheel, creating a sense of harmony and unity.",
"A trapezoid is a quadrilateral with at least one pair of parallel sides.",
"The study of shapes and their properties is called geometry, a branch of mathematics.",
"A sphere is a three-dimensional shape with all points equidistant from a central point.",
"A cube is a three-dimensional shape with six equal square faces.",
"The Platonic solids are a group of five regular polyhedra, including the tetrahedron, cube, octahedron, dodecahedron, and icosahedron.",
]

export default function Home() {
  const [generatedDesignCount, setGeneratedDesignCount] = useState(0)
  const [messageIndex, setMessageIndex] = useState(-1)

  const [rows, setRows] = useState(randomInt(2,16))
  const [cols, setCols] = useState(randomInt(2,16))
  const [symmetrical, setSymmetrical] = useState(false)
  const [cellWidth, setCellWidth] = useState(1000/cols)
  const [cellHeight, setCellHeight] = useState(1400/rows)

  // Book 1 & 2
  const [bgColor, setBgColor] = useState('hsla('+randomInt(0,360)+'deg, '+randomInt(60,100)+'%, '+randomInt(50,98)+'%, 1)')
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,400))
  const [strokeWidth, setStrokeWidth] = useState(sample([4,4,4,4,6,6,6,6,6,8,8,16,64]))
  const [colorsInt, setColorsInt] = useState(randomInt(0,100))
  const [mode, setMode] = useState(sample(['lab', 'lch']))
  const [palette, setPalette] = useState(
    [
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
      bgColor,
    ]
  )

  const regenerateClick = () => {
    const newCount = generatedDesignCount +1
    setGeneratedDesignCount(newCount)

    if (newCount % 10 === 0 || newCount === 1) {
      setMessageIndex((messageIndex + 1 ) % messages.length)
    }

    setBgColor('hsla('+randomInt(0,360)+'deg, '+randomInt(60,100)+'%, '+randomInt(50,98)+'%, 1)')
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,400))
    setStrokeWidth(sample([4,4,4,4,6,8,8,8,8,16,64]))

    //grid
    setRows(randomInt(1,32))
    setCols(randomInt(1,32))
    const baseColor = randomColor()
    setColorsInt(randomInt(1,100))
    const newPalette = sample([
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(32),
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(32),
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(32),
      chroma.scale([randomColor(), baseColor, randomColor(), randomColor()]).mode(mode).colors(16),
      chroma.scale([chroma(baseColor).darken(4), baseColor, chroma(baseColor).brighten(4)]).mode(mode).colors(16),
      chroma.scale([chroma(baseColor).brighten(4), baseColor, chroma(baseColor).darken(4)]).mode(mode).colors(16),
      chroma.scale(['#ff4f4f', baseColor, '#644fff']).mode(mode).colors(16),
      chroma.scale([chroma('hsla(208,100%,10%,1)'), chroma('hsla(216,100%,90%,1)')]).mode(mode).colors(16),
      chroma.scale([chroma('hsla(208,60%,10%,1)'), chroma('hsla(216,60%,90%,1)')]).mode(mode).colors(16),
      chroma.scale([chroma('hsla(290,100%,10%,1)'), chroma('hsla(320,100%,90%,1)')]).mode(mode).colors(16),
      chroma.scale([chroma('hsla(260,60%,10%,1)'), chroma('hsla(290,60%,90%,1)')]).mode(mode).colors(16),
      chroma.scale([ '#FF4F4F', '#FF7A4F', '#7FFF4F', '#4FD8FF', '#644FFF' ]).mode(mode).colors(16),
      [ '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FFCC33', '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#732E6C', '#363958', '#5E2D79', '#4B0082', '#2E0854', '#FF9933'  ],
  [ '#E63946', '#F1C453', '#A8DADC', '#457B9D', '#1D3557', '#FFB6B9', '#CB997E', '#6D6875', '#2A9D8F', '#E9C46A', '#F4A261', '#5EAAA8', '#DD6E42', '#4F5D75', '#9A8C98', '#C08497', ],
    ])
    setMode(sample(['lch', 'lab']))
    setPalette(
      colorsInt > 94?
      [
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
        baseColor,
      ] : [
        newPalette[0],
        newPalette[1],
        newPalette[2],
        newPalette[3],
        newPalette[4],
        newPalette[5],
        newPalette[6],
        newPalette[7],
        newPalette[8],
        newPalette[9],
        newPalette[10],
        newPalette[11],
        newPalette[12],
        newPalette[13],
        newPalette[14],
        newPalette[15],
      ]
    )
  }

  return (
    <>
      <Head>
        <title>Generative Choose Your Own Adventure</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: 'relative' }}>
 {messageIndex >= 0 && <header style={{
     position: 'fixed',
     right: 0,
     left: 0,
     top: 0,
     fontSize: '16px',
     margin: 0,
     fontFamily: 'monospace',
     color: 'black',
     background: 'white',
     display: 'flex',
     alignItems: 'center',
     borderBottom: '1px solid black',
     zIndex: 999,

 }}>
   <kbd style={{ padding: '16px',height: '64px', width: '96px', color: 'white', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{generatedDesignCount}</kbd> 
   <p style={{ textAlign: 'right', flexGrow: 1, paddingRight: '16px', whiteSpace: 'nowrap', marginLeft: '4rem',  }}>{messages[messageIndex]}</p>
   </header>}
          
<section className='cols-2 cols-4-m cols-4-l' style={{ marginBottom: '4rem', marginTop: '5rem', display: 'grid', padding: '0 1rem', gap: '1rem' }} onClick={(e) => regenerateClick()}>
      <Sketch0 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch0a strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch1 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch2 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch3 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch4 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch5 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
     <Sketch6 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch7 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch8 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch9 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch10 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette}/>
      <Sketch11 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
      <Sketch11a strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
      <Sketch12 strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
      <Sketch14  strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
      <Sketch15  strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
      <Sketch16  strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} colors={palette} rows={rows} cols={cols} /> 
    </section>
      </main>
    </>
  )
}
