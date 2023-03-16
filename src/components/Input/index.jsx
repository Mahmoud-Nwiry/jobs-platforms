import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(TextField)(({ theme }) => ({
  minWidth : '300px',
  "& .MuiInputBase-input": {
    padding: theme.spacing(3),
  },

  "& .MuiFormLabel-root" : {
    top: '-10px'
  },
  "& .MuiInputLabel-shrink" : {
    top : 0
  }
}));

export const CustomInput = ({ type, id, placeholder, value, onChange, label, required, ...other }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      label={label}
      required={required}
      {...other}
    />
  );
};
