import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomAvatar from "../../components/Avatar";


const ProfileSide = (props) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        pb : '40px'
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: "20px", pb: '30px' }}>
        <CustomAvatar name={props?.name} sx={{ width: 100, height: 100, fontSize: "2.5rem" }} />
      </Box>
      <Typography
        variant="h5"
        component={Link}
        to="/profile"
        sx={{ 
            textDecoration: "underline",
            color : "primary.main",
            textAlign : 'center',
            display : 'block',
            mb : '10px'
         }}
      >
        {props?.name}
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        sx={{ 
            color : "secondary.700",
            textAlign : 'center'
         }}
      >
        {props?.work}
      </Typography>
    </Box>
  );
};

export default ProfileSide;
