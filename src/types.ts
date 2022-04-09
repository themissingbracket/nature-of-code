import * as P5 from 'p5'


export type Initialize = (p5: P5) => void

export type SketchConfig = {
    id: string
    name: string
    initialize: Initialize
}

export type Store = {
    sketches: Array<SketchConfig>
    selectedSketch: SketchConfig | null
    selectSketch: (id: string) => void
}
