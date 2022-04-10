import _P5 from 'p5'

export type P5 = _P5 & {
    reset?: () => void
}

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
