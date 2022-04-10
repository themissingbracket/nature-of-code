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
    useEffect(() => {
        if(!selectedSketch || !canvasTarget.current) return
        canvasRef.current?.remove()
        canvasRef.current = new p5(selectedSketch.initialize, canvasTarget.current) as P5




    }, [selectedSketch])

    const playPauseButton = useCallback(() =>setIsPaused(!isPaused),  [isPaused])
    useEffect(() => {
      if(!canvasRef.current) return
      isPaused ? canvasRef.current.noLoop() : canvasRef.current.loop()
    },[isPaused])
    const stopButton = useCallback(() => {
      if (!canvasRef.current) return

      const { reset = () => {
          // Void function
      } } = canvasRef.current

      reset.call(canvasRef.current)
    }, [])

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
              <IconButton color='primary' onClick={playPauseButton}>
                { isPaused ? <Pause /> : <PlayArrow /> }
              </IconButton>
              <IconButton color='primary' onClick={stopButton}>
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
