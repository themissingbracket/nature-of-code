import  { BouncingBallWithVector } from './bouncing-ball-with-vector'
import { BouncingBallWithNoVector } from './bouncing-ball-no-vector'
import { LineSketch } from './vector-multiplication'
import { SortingVisualisation } from './sorting-visualisation'
import { SketchConfig } from '../types'


export const Sketches: Array<SketchConfig> = [  SortingVisualisation, BouncingBallWithNoVector, BouncingBallWithVector, LineSketch ].sort(({ name: nameA }, { name: nameB }) => nameA > nameB ? 1 : -1 )
