import shortid from 'shortid';
import { Initialize, SketchConfig } from '../types'


const initialize: Initialize = (p5): void => {
    p5.setup = () => {
        p5.createCanvas(p5.windowHeight, 360)
    }
    p5.draw = () => {
        p5.background(0);

        const mouse = p5.createVector(p5.mouseX,p5.mouseY);
        const center = p5.createVector(p5.width/2,p5.height/2);
        mouse.sub(center);

        // Multiplying a vector! The vector is now half its original size (multiplied by 0.5).
        mouse.mult(0.5);

        p5.translate(p5.width/2, p5.height/2);
        p5.stroke(255)
        p5.line(0,0,mouse.x,mouse.y);
    }
}


export const LineSketch: SketchConfig = {
    id: shortid(),
    name: 'Vector Multiplication',
    initialize
}
