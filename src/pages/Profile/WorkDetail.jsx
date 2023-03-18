import { Box, Chip, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EditButton from '../../components/EditButton'
import BioModal from './modals/Bio'
import PriceModal from './modals/Price'
import SkillsModal from './modals/Skills'
import WorkTitleModal from './modals/Work'

const WorkDetail = () => {

    const { user } = useSelector(state => state.user)

    const [workOpen, setWorkOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);
    const [skillsOpen, setSkillsOpen] = useState(false);

  const handleClickWorkOpen = () => {
    setWorkOpen(true);
  };
  const handleClickPriceOpen = () => {
    setPriceOpen(true);
  };
  const handleClickBioOpen = () => {
    setBioOpen(true);
  };
  const handleClickSkillsOpen = () => {
    setSkillsOpen(true);
  };

  const handleModalClose = () => {
    setWorkOpen(false);
    setPriceOpen(false);
    setBioOpen(false);
    setSkillsOpen(false)
};

  return (
    <Box flex="1">
        <Box sx={{borderBottom : '1px solid #ccc'}}>
            <Box sx={{display : 'flex', justifyContent : 'space-between', padding : '30px'}}>
                <Typography sx={{ fontSize: "1.7rem", fontWeight: 500 }}>{user?.profile?.name || 'No work'} <EditButton onClick={handleClickWorkOpen} /></Typography>
                <Typography sx={{ fontSize: "1.5rem", fontWeight: 500 }}>${user?.profile?.price || '0.00'} <EditButton onClick={handleClickPriceOpen} /></Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent : 'space-between', padding : ' 0 30px 30px', alignItems : 'flex-start'}}>
                <Typography sx={{ fontSize: "1rem", fontWeight: 500, flex : 1 }}>
                {user?.profile?.bio || 'No description'}
                </Typography>
                <EditButton onClick={handleClickBioOpen} />
            </Box>
        </Box>
        <Box>
            <Box sx={{ padding : '30px'}}>
                <Typography sx={{ fontSize: "1.7rem", fontWeight: 500 }}>Skills <EditButton onClick={handleClickSkillsOpen} /></Typography>
                <Box sx={{mt : '20px', display : 'flex', flexWrap : 'wrap', gap: '7px 5px'}}>
                    {
                        user?.profile?.skills?.length > 0 ?
                        user?.profile?.skills?.map(skill => (
                            <Chip label={skill} color="primary" />
                        ))
                        : <Typography>No Skills</Typography>
                    }
                </Box>
            </Box>
        </Box>
        <WorkTitleModal open={workOpen} onClose={handleModalClose} user={user} />
        <PriceModal open={priceOpen} onClose={handleModalClose} user={user} />
        <BioModal open={bioOpen} onClose={handleModalClose} user={user} />
        <SkillsModal open={skillsOpen} onClose={handleModalClose} user={user} />
    </Box>
  )
}

export default WorkDetail