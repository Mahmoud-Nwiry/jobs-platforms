import { useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomInput } from "../../components/Input";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/user";

const initUser = {
  password: "",
  email: "",
};

const Login = () => {
  const [values, setValues] = useState(initUser);

  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handelChange = (element) => {
    const { id, value } = element;
    setValues((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const sendData = (e) => {
    e.preventDefault();

    console.log('yes');
    dispatch(getUserData(values))
    
  }

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {Object.keys(user).length > 0? <Navigate to='/' /> : ''}
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
          Login
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
          <Button variant="contained" disabled={isLoading} type="submit" sx={{ width: "100%" }}>
            Login
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
            to="/signup"
            sx={{
              color : 'primary.600', 
              textDecoration : 'none'
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
