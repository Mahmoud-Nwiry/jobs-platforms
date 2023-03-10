import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 250,
        borderRadius : "20px",
        border: "1px solid",
        borderColor: "#ccc",
        boxShadow : "none"
      }}
    >
      <IconButton type="button" aria-label="search" sx={{padding : 2, ml : 5}}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
