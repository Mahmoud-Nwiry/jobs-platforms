import { Box, Button } from '@mui/material'
import React from 'react'
import { CustomInput } from '../Input'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 50px"
      gap="2px"
    >
      <CustomInput type="text" placeholder="Search..." />
      <Button size='small' variant="contained" sx={{minWidth : 'unset'}}><SearchIcon /></Button>
    </Box>
  )
}

export default SearchBox