import { Box, Button, Chip, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PsychologyIcon from '@mui/icons-material/Psychology';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useSelector } from "react-redux";


const JobDetails = () => {
  const { job } = useSelector((state) => state.drawer);

  return (
    <Box>
      <Navbar />
      <Box my={24}>
        <Container>
          <Typography variant="h4" mb="10px">
            Job details
          </Typography>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <Box sx={{ flex: 1, borderRight: "1px solid #ccc" }}>
              <Box p={10} borderBottom="1px solid #ccc">
                <Typography variant="h6" mb={10}>
                  {job?.title}
                </Typography>
                <Typography variant="body1" color="primary">
                  {job.field}
                </Typography>
                <Typography variant="body2" color="secondary.600" mb={6}>
                  Posted on 21 hours ago
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.900"
                  mb={6}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <PinDropIcon
                    fontSize="small"
                    sx={{
                      color: "blue",
                    }}
                  />{" "}
                  {job.location}
                </Typography>
              </Box>
              <Box p={10} borderBottom="1px solid #ccc">
                <Typography variant="body2" lineHeight="1.6" fontSize="1rem">
                  {job.description}
                </Typography>
              </Box>
              <Box
                p={10}
                pb={20}
                borderBottom="1px solid #ccc"
                display="flex"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  gap="10px"
                  width={"220px"}
                  justifyContent="flex-start"
                >
                  <LocalOfferIcon />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      ${job.price}
                    </Typography>
                    <Typography variant="body2" color="secondary.600">
                      {job.work_way}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  gap="10px"
                  width={"220px"}
                  justifyContent="center"
                >
                  <PsychologyIcon />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {job.freelancer_level}
                    </Typography>
                    <Typography variant="body2" color="secondary.600">
                      I'm looking for freelancer with lowest rates
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  gap="10px"
                  width={"220px"}
                  justifyContent="flex-end"
                >
                  <DescriptionOutlinedIcon />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      Contract-to-hire
                    </Typography>
                    <Typography variant="body2" color="secondary.600">
                      This job has the potential to turn into a full time role
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                p={10}
                borderBottom="1px solid #ccc"
                display="flex"
                alignItems="flex-end"
                gap="5px"
              >
                <Typography variant="body1" lineHeight="1.6" fontSize="1rem">
                  Project Type :
                </Typography>
                <Typography
                  variant="body2"
                  lineHeight="1.6"
                  color="secondary.700"
                  fontSize="0.9rem"
                >
                  {job.project_type}
                </Typography>
              </Box>
              <Box p={10}>
                <Typography variant="h6">Skills</Typography>
                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "7px 5px",
                  }}
                >
                  {job?.skills?.length > 0 ? (
                    job?.skills?.map((skill) => (
                      <Chip label={skill} color="primary" />
                    ))
                  ) : (
                    <Typography>No Skills Needed</Typography>
                  )}
                </Box>
              </Box>
            </Box>
            {/* ------------ */}
            <Box>
              <Box sx={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 50,
                    boxShadow: "none",
                    display: "block",
                    mb: "10px",
                    p: "5px 60px",
                    width: "100%",
                  }}
                >
                  <Typography>Apply Now</Typography>
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 50,
                    display: "block",
                    p: "5px 60px",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" /> Save Job
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ padding: "20px" }}>
                <Typography variant="body1">About the client</Typography>
                <Typography variant="body1">Payment method verified</Typography>
                <Typography variant="body1">Nigeria</Typography>
                <Typography variant="body1">3 jobs</Typography>
                <Typography variant="body1">
                  Engineering & Architecture
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default JobDetails;
