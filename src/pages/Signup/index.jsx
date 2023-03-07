import { useState } from "react";
import { Button, Divider, Typography, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { CustomInput } from "../../components/Input";

const initUser = {
  username: "",
  password: "",
  email: "",
  privacy: false,
};

const Signup = () => {
  const [user, setUser] = useState(initUser);

  const handelChange = (element) => {
    const { id, value } = element;
    setUser((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handelPrivacy = () => {
    setUser((prev) => ({ ...prev, privacy: !prev.privacy }));
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          boxShadow: "1px 5px 15px rgb(0,0,0,0.2)",
          p: "40px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          color="primary.800"
          component="h2"
          variant="h4"
          textAlign="center"
        >
          Sign up
        </Typography>
        <Divider
          sx={{
            m: "10px auto 35px",
            height: "5px",
            bgcolor: "primary.800",
            border: 0,
            width: "50%",
            borderRadius: 5,
          }}
        />
        <form>
          <Box sx={{ my: 8 }}>
            <CustomInput
              type="text"
              label="Username"
              value={user.username}
              placeholder="Enter your name"
              id="username"
              onChange={(e) => handelChange(e.target)}
              required
            />
          </Box>
          <Box sx={{ my: 8 }}>
            <CustomInput
              type="email"
              label="Email"
              value={user.email}
              placeholder="exampel@any.com"
              id="email"
              onChange={(e) => handelChange(e.target)}
              required
            />
          </Box>
          <Box sx={{ my: 8 }}>
            <CustomInput
              type="password"
              label="Password"
              value={user.password}
              placeholder="Enter password"
              id="password"
              onChange={(e) => handelChange(e.target)}
              required
            />
          </Box>
          <Box
            sx={{ my: 8, display: "flex", alignItems: "center" }}
          >
            <Checkbox
              onClick={() => handelPrivacy()}              
              checked={user.privacy}
            />
            <Typography variant="body1">I Agree to Privacy Policy</Typography>
          </Box>
          <Button variant="contained" sx={{ width: "100%" }}>
            Sign up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
