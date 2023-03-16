import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../../components/AddButton";
import EditButton from "../../components/EditButton";

const ViewProfile = () => {

  const { user } = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        borderRight: "1px solid #ccc",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ p: "20px 30px 0" }}>
        View profile <EditButton />
      </Typography>
      <Box sx={{ p: "20px 30px", borderBottom: "1px solid #ccc" }}>
        <Typography color="primary.main" fontWeight={600}>
          {user?.profile?.name || 'No Work'}
        </Typography>
      </Box>
      <Box
        sx={{
          p: "20px 30px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontWeight={700} fontSize="large">
            $30
          </Typography>
          <Typography fontWeight={500} fontSize="small" color="secondary.600">
            Total Earning
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight={700} fontSize="large">
            1
          </Typography>
          <Typography fontWeight={500} fontSize="small" color="secondary.600">
            Jobs
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: "20px 30px 10px" }}>
        <Typography fontWeight={600}>
          Video Introduction <AddButton />
        </Typography>
      </Box>
      <Box sx={{ p: "20px 30px 10px" }}>
        <Typography fontWeight={600}>
          Hours per week <AddButton />
        </Typography>
      </Box>
      <Box sx={{ p: "20px 30px 10px" }}>
        <Typography fontWeight={600}>
          Languages <AddButton /><EditButton />
        </Typography>
        {
          user?.profile?.languages.length > 0 ? user.profile.languages.map(lang => (
              <Typography display="flex" gap="5px" alignItems="center">
                {lang.name}: <Typography fontSize='small'>{lang.speaking}</Typography>
              </Typography>
          )) : ''
        }
      </Box>
      <Box sx={{ p: "20px 30px 10px" }}>
        <Typography fontWeight={600}>
          Verifications
        </Typography>
        <Typography display="flex" gap="5px" alignItems="center">
          ID: <Typography fontSize='small'>Verified</Typography>
        </Typography>
        <Typography fontWeight={600}>
          Military Veteran <AddButton />
        </Typography>
      </Box>
      <Box sx={{ p: "20px 30px 10px" }}>
        <Typography fontWeight={600}>
          Education <AddButton />
        </Typography>
      </Box>
    </Box>
  );
};

export default ViewProfile;
