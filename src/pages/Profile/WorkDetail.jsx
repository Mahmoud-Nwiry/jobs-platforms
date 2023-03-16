import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import EditButton from '../../components/EditButton'

const WorkDetail = () => {

    const { user } = useSelector(state => state.user)

  return (
    <Box flex="1">
        <Box sx={{borderBottom : '1px solid #ccc'}}>
            <Box sx={{display : 'flex', justifyContent : 'space-between', padding : '30px'}}>
                <Typography sx={{ fontSize: "1.7rem", fontWeight: 500 }}>{user?.profile?.name || 'No work'} <EditButton /></Typography>
                <Typography sx={{ fontSize: "1.5rem", fontWeight: 500 }}>${user?.profile?.price || '0.00'} <EditButton /></Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent : 'space-between', padding : ' 0 30px 30px', alignItems : 'flex-start'}}>
                <Typography sx={{ fontSize: "1rem", fontWeight: 500, flex : 1 }}>
                {user?.profile?.bio || 'No description'}
                </Typography>
                <EditButton />
            </Box>
        </Box>
        <Box>
            <Box sx={{ padding : '30px'}}>
                <Typography sx={{ fontSize: "1.7rem", fontWeight: 500 }}>Skills <EditButton /></Typography>
                <Box sx={{mt : '20px', display : 'flex', flexWrap : 'wrap', gap: '7px 5px'}}>
                    {
                        user?.profile?.skills.length > 0 ?
                        user?.profile?.skills.map(skill => (
                            <Chip label={skill} color="primary" />
                        ))
                        : <Typography>No Skills</Typography>
                    }
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default WorkDetail