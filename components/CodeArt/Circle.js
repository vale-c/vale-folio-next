import React from 'react'
import './p5sound_fix'
import 'p5/lib/addons/p5.sound'
import * as p5 from 'p5'

class Circle extends React.Component {
  constructor() {
    super()
    this.myRef = React.createRef()
  }

  Sketch = p => {
    let amp,
      bg,
      canvas,
      fft,
      song,
      volHistory = [],
      selectedColor = 0

    /*
      Waporwave Palettes
      STANDARD: https://www.color-hex.com/color-palette/10221/ 
      PASTEL: https://www.color-hex.com/color-palette/61574
    */
    let colors = [
      p.color('#cbffe6'),
      p.color('#afe9ff'),
      p.color('#bfb9ff'),
      p.color('#ffcfea'),
      p.color('#feffbe'),
      p.color('#ff71ce'),
      p.color('#01cdfe'),
      p.color('#05ffa1'),
      p.color('#b967ff'),
      p.color('#fffb96'),
    ]
    // Loads the music file into p5.js to play on click
    p.preload = () => {
      p.soundFormats('mp3')
      song = p.loadSound('/resources/song.mp3')
    }

    // Initial setup to create canvas and audio analyzers
    p.setup = () => {
      bg = p.loadImage('/images/vaporwave.png')
      canvas = p.createCanvas(637, 835)
      canvas.mouseClicked(p.handleClick)
      canvas.style("z-index: 1")

      amp = new p5.Amplitude()
    }

    p.draw = () => {
      p.background(bg)

      let vol = amp.getLevel()
      volHistory.push(vol)

      p.noFill()
      p.stroke(selectedColor === 0 ? 255 : colors[selectedColor])

      p.translate(320, 250)
      p.beginShape()

      for (let i = 1; i < 600; i++) {
        let r = p.map(volHistory[i], 0, 1, 2, 400)
        let x = r * p.cos(i)
        let y = r * p.sin(i)
        p.vertex(x, y)
      }
      p.endShape()

      if (volHistory.length > 360) {
        volHistory.splice(0, 1)
      }
    }

    p.keyPressed = () => {
      if (p.keyCode === 32) {
        // 32 is the keycode for SPACE_BAR
        selectedColor = Math.floor(Math.random() * colors.length)
      }
      return false // prevent default
    }

    // Toggles song on click
    p.handleClick = () => {
      if (song.isPlaying()) {
        if (song) {
          song.pause()
        }
      } else {
        song.play()
      }
    }
  }
  // React things to make p5.js work properly and not lag when leaving the current page below
  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  componentDidUpdate() {
    this.myP5.remove()
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  componentWillUnmount() {
    this.myP5.remove()
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap lg:flex-nowrap mt-8 w-full justify-center items-center">
          <div
            className="flex justify-center cursor-pointer"
            ref={this.myRef}
          />
          <div className="flex w-full font-bold flex-wrap max-w-sm lg:w-1/2 mb-4 lg:mx-6 lg:justify-start">
            <p className="w-full text-lg md:text-md lg:text-lg font-bold p-4">
              This is a{' '}
              <a
                href="https://en.wikipedia.org/wiki/Vaporwave"
                target="_blank"
                rel="noreferrer"
                className="duration-500"
              >
                <b>vaporwave-inspired</b>
              </a>{' '}
              music visualizer that I built with{' '}
              <a
                href="https://p5js.org/"
                target="_blank"
                rel="noreferrer"
                className="duration-500"
              >
                p5.js
              </a>
              <br />
              <br />
              In case you're wondering, the{' '}
              <a
                href="https://www.youtube.com/watch?v=f_TPN1EDnx4"
                target="_blank"
                rel="noreferrer"
              >
                song
              </a>{' '}
              is Brad Pitt from{' '}
              <a
                className="mb-2 hover:underline"
                href="https://it.wikipedia.org/wiki/M%C3%98"
                target="_blank"
                rel="noreferrer"
              >
                MØ
              </a>
              .
              <br />
              <br />
              <b>Click</b> on the image to <b>start/stop</b> the song.
              <br />
              <br />
              Also, if you hit the <b>spacebar</b> the color of the geometrical
              shape will change with a new vaporwave color!
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Circle