import shortid from 'shortid'
import { Initialize, SketchConfig } from '../types'


const initialize :Initialize = (p5): void => {
    const config = {
        x: 100,
        y: 100,
        xSpeed: 1,
        ySpeed: 3.3,
    }
    p5.setup = () => {
        p5.createCanvas(p5.windowHeight, 360)//.parent(element)
        p5.background(255)
    }
    p5.draw = () => {
        p5.background(0)
        config.x += config.xSpeed
        config.y += config.ySpeed;
        if ((config.x > p5.width) || (config.x < 0)) {
            config.xSpeed *= -1;
          }
          if ((config.y > p5.height) || (config.y < 0)) {
            config.ySpeed *=  -1;
          }
          p5.stroke(255);
          p5.fill(175);
          p5.ellipse(config.x,config.y,16,16);

    }
    p5.reset = () => {
        config.x = 100
        config.y = 100
        config.xSpeed = 1
        config.ySpeed = 3.3
    }
}

export const BouncingBallWithVector: SketchConfig = {
    name: 'Bouncing Ball No Vector 🏀',
    initialize,
    id: shortid()
}
