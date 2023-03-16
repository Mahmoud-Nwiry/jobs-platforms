import { useState } from "react";
import { Button, Divider, Typography, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { CustomInput } from "../../components/Input";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/user";

const profileInit = {
  name: "",
  price: 0.0,
  bio: "",
  languages: [],
  education: [],
  skills : []
};

const initUser = {
  name: "",
  password: "",
  email: "",
  privacy: false,
  image : "",
  location : "",
  saved : [],
  searched : [],
  profile : {...profileInit}
};

const Signup = () => {
  const [values, setValues] = useState(initUser);

  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handelChange = (element) => {
    const { id, value } = element;
    setValues((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handelPrivacy = () => {
    setValues((prev) => ({ ...prev, privacy: !prev.privacy }));
  };

  const sendData = (e) => {
    e.preventDefault();

    if(values.privacy){
      dispatch(createNewUser(values))
      setValues(initUser);
    }

  }

  return (
    <Box
      minHeight="96vh"
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
            width: "100px",
            borderRadius: 5,
          }}
        />
        <form onSubmit={sendData}>
          <Box sx={{ my: 8 }}>
            <CustomInput
              
              type="text"
              label="name"
              value={values.name}
              placeholder="Enter your name"
              id="name"
              onChange={(e) => handelChange(e.target)}
              required
            />
          </Box>
          <Box sx={{ my: 8 }}>
            <CustomInput
              type="email"
              label="Email"
              value={values.email}
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
              value={values.password}
              placeholder="Enter password"
              id="password"
              onChange={(e) => handelChange(e.target)}
              required
            />
          </Box>
          <Box sx={{ my: 8, display: "flex", alignItems: "center" }}>
            <Checkbox onClick={() => handelPrivacy()} checked={values.privacy} />
            <Typography variant="body1">I Agree to Privacy Policy</Typography>
          </Box>
          <Button disabled={isLoading} variant="contained" type="submit" sx={{ width: "100%" }}>
            Sign up
          </Button>
        </form>
        <Typography
          sx={{
            mt: "20px",
            textAlign: "center",
            color: "secondary",
          }}
        >
          Dont have an account?{" "}
          <Typography
            component={Link}
            to="/login"
            sx={{
              color: "primary.600",
              textDecoration: "none",
            }}
          >
            Login
          </Typography>
        </Typography>
      </Box>
      {Object.keys(user).length > 0? <Navigate to='/' /> : ''}
    </Box>
  );
};

export default Signup;
