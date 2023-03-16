import { Button } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ minWidth: "unset", padding: "5px", borderRadius: 50, marginLeft: "10px" }}
    >
      <AddIcon fontSize="small" />
    </Button>
  );
};

export default AddButton;
