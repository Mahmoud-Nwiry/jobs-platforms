import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MainInfo from "./MainInfo";
import ViewProfile from "./ViewProfile";
import WorkDetail from "./WorkDetail";

const Profile = () => {

  const { user } = useSelector((state) => state.user);
  return (
    <Box>
      {Object.keys(user).length === 0 ? <Navigate to='/login' /> : ""}
      <Navbar />
      <Box my={24}>
        <Container>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <MainInfo />
            <Box sx={{
                display : 'flex',
            }}>
                <ViewProfile />
                <WorkDetail />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
