import React, { useCallback, useState } from 'react'
import { AppBar as MuiAppBar, Button, Container, Menu, MenuItem, Toolbar } from '@mui/material'
import { useStore } from '../store'
const AppBar: React.FC = () => {
    const [ anchorElement, setAnchorElement ] = useState<HTMLElement | null>(null)
    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorElement(e.currentTarget), [])
    const handleClose = () => setAnchorElement(null)

    const { sketches, selectSketch } = useStore()
    const onMenuItemClick = (id: string) => {
        selectSketch(id)
        handleClose()
    }
  return (
    <MuiAppBar  position='static'>
        <Toolbar>
        <Button variant="text" onClick={onClick} color='inherit'>
            Sketches
        </Button>
        <Container maxWidth='xl'>
            <Menu open={Boolean(anchorElement)} onClose={handleClose} anchorEl={anchorElement}>
                {
                    sketches.map(({ id, name }) => (
                        <MenuItem key={id} onClick={() => onMenuItemClick(id)}>
                            { name }
                        </MenuItem>
                    ))
                }

            </Menu>
        </Container>
        </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
