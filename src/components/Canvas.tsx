import React, { useEffect, useRef } from 'react'
import P5 from 'p5'

import { useStore } from '../store'
import { Stack } from '@mui/material'
const Canvas: React.FC = () => {
    const { selectedSketch } = useStore()
    const canvasTarget = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<P5 | null>(null)
    useEffect(() => {
        if(!selectedSketch || !canvasTarget.current) return
        canvasRef.current?.remove()
        canvasRef.current = new P5(selectedSketch.initialize, canvasTarget.current)

    }, [selectedSketch])

  return (
      <Stack spacing={2}
        alignItems='center'
        padding='1rem 2.5rem'
      >
          <div ref={canvasTarget} />
      </Stack>
  )
}

export default Canvas
