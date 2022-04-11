import shortid from "shortid";
import { Initialize, SketchConfig } from "../types";

const initialize: Initialize = (p5) => {
    const data: Array<number> = []
    let n: number = 0
    let i: number = 0
    const swap = (indexA: number, indexB: number): void => {
        const temp = data[indexA]
        data[indexA] = data[indexB]
        data[indexB] = temp
    }
    p5.setup = () => {
        p5.createCanvas(800, 300)
        p5.background(0)
        for(let i=0; i< p5.width; i++) {
            data.push(p5.random(300))
        }
    }

    p5.draw = () => {
        if(data[i] > data[i + 1]) {
            swap(i + 1, i)
        }
        if(n < data.length) {
            i += 1
            if(i > data.length - n -1) {
                i = 0
                n +=1
            }
        } else {
            p5.noLoop()
        }

        data.forEach((value, idx) => {
            // idx === i ? p5.stroke(255, 0, 0) : p5.stroke(255)
            p5.stroke(255)
            p5.line(idx, p5.height, idx, p5.height - value)
        })
    }


}

export const SortingVisualisation: SketchConfig = {
    id: shortid(),
    name: 'Sorting Visualization',
    initialize
}
