import p5 from 'p5'
import shortid from 'shortid'
import { Initialize, SketchConfig } from '../types'



const initialize:Initialize = (p5): void => {
    let location: p5.Vector
    let velocity: p5.Vector
    p5.setup = () => {
        location = p5.createVector(100, 100)
        velocity = p5.createVector(2, 5, 5)

        p5.createCanvas(p5.windowHeight, 360)//.parent(element)
        p5.background(0)
    }
    p5.draw = () => {
        p5.background(0)
        location.add(velocity)
        if ((location.x > p5.width) || (location.x < 0)) {
            velocity.x = velocity.x * -1;
          }
          if ((location.y > p5.height) || (location.y < 0)) {
            velocity.y = velocity.y * -1;
          }
          p5.stroke(255);
          p5.fill(175);
          p5.stroke(0);
          p5.fill(175);
          p5.ellipse(location.x,location.y,16,16);

    }
}

export const BouncingBallWithNoVector: SketchConfig = {
    name: 'Bouncing Ball P5 Vector 🏀 ↗',
    initialize,
    id: shortid()
}
