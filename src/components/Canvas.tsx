import React, { useCallback, useEffect, useRef, useState } from 'react'
import { P5 } from '../types'
import p5 from 'p5'

import { useStore } from '../store'
import { IconButton, ButtonGroup, Stack, Typography } from '@mui/material'
import { PlayArrow, Pause, Stop } from '@mui/icons-material'
import { Box } from '@mui/system'
const Canvas: React.FC = () => {
    const { selectedSketch } = useStore()
    const canvasTarget = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<P5 | null>(null)
    const [ isPaused, setIsPaused ] = useState<boolean>(false)

    const reset = useCallback((p5: P5): void => {
        p5.noLoop()
        p5.reset && p5.reset()
        p5.draw()
        if(!isPaused) p5.loop()
    }, [isPaused])

    const playPauseButton = useCallback(() =>setIsPaused(!isPaused),  [isPaused])
    useEffect(() => {
      if(!canvasRef.current) return
      isPaused ? canvasRef.current.noLoop() : canvasRef.current.loop()
    },[isPaused])
    useEffect(() => {
      if(!selectedSketch || !canvasTarget.current) return
      canvasRef.current?.remove()
      canvasRef.current = new p5(selectedSketch.initialize, canvasTarget.current) as P5
  }, [selectedSketch])


    const stopButton = useCallback(() => {
      if (!canvasRef.current) return
      reset(canvasRef.current)
    }, [reset])

    useEffect(() => {
      if(!selectedSketch || !canvasRef.current) return
      if(isPaused) {
        canvasRef.current.noLoop()
      }
    }, [isPaused, selectedSketch])

  return (
      <Stack spacing={2}
        alignItems='center'
        padding='1rem 2.5rem'
      > {
          selectedSketch ? (
            <>
              <Typography variant="h5" component="div" gutterBottom>
                  { selectedSketch.name }
              </Typography>
              <div ref={canvasTarget} />
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <IconButton color='primary' onClick={playPauseButton} disableRipple>
                { isPaused ? <PlayArrow /> : <Pause /> }
              </IconButton>
              <IconButton color='secondary' onClick={stopButton} disableRipple>
                <Stop />
              </IconButton>
            </ButtonGroup>
            </> ):
            <Box>
              <Typography variant="h5" component="div" gutterBottom>
                  Please Select a Sketch to get started
              </Typography>
            </Box>
       }
      </Stack>
  )
}

export default Canvas
