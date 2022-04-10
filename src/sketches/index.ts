import  { BouncingBallWithVector } from './bouncing-ball-with-vector'
import { BouncingBallWithNoVector } from './bouncing-ball-no-vector'
import { LineSketch } from './vector-multiplication'
import { SketchConfig } from '../types'


export const Sketches: Array<SketchConfig> = [  BouncingBallWithNoVector, BouncingBallWithVector, LineSketch ].sort(({ name: nameA }, { name: nameB }) => nameA > nameB ? 1 : -1 )
