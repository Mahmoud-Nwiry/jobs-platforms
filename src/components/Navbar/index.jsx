import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Dropdown from '../Dropdown'
import NavAvatar from './Avatar'
import SearchBox from './SearchBox'

const Navbar = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            justifyContent : 'space-between',
            p : '10px',
            boxShadow : '0 1px 6px rgba(0,0,0,.2)'
        }}
    >
        <Box
            sx={{
                display : 'flex',
                gap : '20px'
            }}
        >
            <Typography 
                sx={{
                    color : 'primary.main',
                    fontSize : '20px',
                    fontWeight : 700,
                    fontFamily : 'cursive'
                }} 
            >
                MyWork
            </Typography>
            <Box
                sx={{display : 'flex', gap : '10px'}}        
            >
                <Dropdown text='Find Work' menu={['edit', 'delete', 'add', 'search']} />
                <Dropdown text='My Jobs' menu={['edit', 'delete', 'add', 'search']} />
                <Dropdown text='Reports' menu={['edit', 'delete', 'add', 'search']} />
                <Button sx={{textTransform : 'initial'}}>Messages</Button>
            </Box>
            
        </Box>
        <Box
            sx={{
                display : 'flex',
                gap : '10px'
            }}
        >
            <SearchBox />
            <NavAvatar name="Mahmoud Hamdan" />
        </Box>
    </Box>
  )
}

export default Navbar