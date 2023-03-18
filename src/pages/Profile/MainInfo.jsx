import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BoltIcon from "@mui/icons-material/Bolt";
import EditButton from "../../components/EditButton";
import CustomAvatar from "../../components/Avatar";
import { useSelector } from "react-redux";


const MainInfo = () => {

  const { user } = useSelector((state) => state.user);

  return (
    <Box
        sx={{
            p: "40px 50px",
            display: "flex",
            gap: "40px",
        }}
    >
      <CustomAvatar
        name={user?.name  || "U N"}
        sx={{ width: 100, height: 100, fontSize: "2.5rem" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "2rem", fontWeight: 500 }}>
            {user?.name}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: 16,
              mb: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocationOnIcon sx={{ fontSize: 16 }} />
            Gaza, Palestine
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              variant="outlined"
              disabled
              sx={{
                textTransform: "initial",
                borderRadius: 50,
                p: "0 10px 0 5px",
                fontSize: "12px",
                height: "25px",
              }}
            >
              <BoltIcon fontSize="small" />
              Available now
            </Button>
            <Typography>off</Typography>
            <EditButton />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 5 }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", borderRadius: 50 }}
          >
            See Public View
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: 50,
              boxShadow: "none",
            }}
          >
            Profile Setting
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainInfo;
