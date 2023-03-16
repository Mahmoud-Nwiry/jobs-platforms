import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const index = ({
  id,
  title,
  description,
  price,
  location,
  workWay,
  posted,
  skills,
  level,
  onClick
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
        p: "15px 30px",
      }}
    >
      <Typography
        variant="body1"
        component="h3"
        sx={{ 
          fontWeight: 600, 
          color: "primary.700", 
          fontSize: 20,
          mb : 8
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        component='h5'
        sx={{
          color: "secondary.600", 
          fontSize: 14,
          mb : 4
        }}
      >
        {workWay} - {level} - EsBudget:${price} - Posted on {posted}
      </Typography>

      <Typography
        variant="body2"
        component='p'
        sx={{
          color: "secondary.900", 
          fontSize: 16,
          mb : 4
        }}
      >
        {description}
      </Typography>

      <Stack direction='row' spacing={2} my={5}>
        {
          skills.map(skill => <Chip label={skill} color="primary" />)
        }
      </Stack>

      <Typography
        variant="h6"
        component='h6'
        sx={{
          color: "secondary.800", 
          fontSize: 14,
          fontWeight : 600,
          mb : 4,
          display : 'flex',
          alignItems : 'flex-start',
          gap: 2
        }}
      >
        <LocationOnIcon sx={{fontSize : 18}} />
        {location}
      </Typography>
    </Box>
  );
};

export default index;
