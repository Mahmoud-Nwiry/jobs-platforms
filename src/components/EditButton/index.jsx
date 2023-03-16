import { Button } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';

const EditButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ minWidth: "unset", padding: "5px", borderRadius: 50, marginLeft: "10px" }}
    >
      <EditIcon fontSize="small" />
    </Button>
  );
};

export default EditButton;
