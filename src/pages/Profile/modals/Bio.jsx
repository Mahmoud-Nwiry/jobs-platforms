import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize, Typography } from "@mui/material";
import { updateUserData } from "../../../redux/user";
import { useDispatch } from "react-redux";

export default function BioModal({ open, onClose, user }) {

  const dispatch = useDispatch();

  const [value, setValue] = useState(user?.profile?.bio);

  const handelValue = (e) => {
    setValue(e.target.value);
  };

  const sendData = () => {

    const data = {...user ,profile : {...user.profile ,  bio : value}}

      dispatch(updateUserData(data))

  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDialog-paper": {
            padding: "10px 15px 15px 10px",
            minWidth: "750px",
          },
        }}
      >
        <DialogTitle variant="h5" fontWeight="600" mb={10}>
          Overview
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" color="#000" mb={4}>
              Use this space to show clients you have skills and experiance
              they'ar looking for.
            </Typography>
            <ul style={{ padding: "10px 20px", color: "#000" }}>
              <li>Descripe your skills</li>
              <li>Highlight projects</li>
              <li>keep it short and make sure</li>
            </ul>
          </DialogContentText>
          <TextareaAutosize
            style={{
              width: "100%",
              resize: "vertical",
              padding: "10px",
              lineHeight: "1.5",
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
              letterSpacing : '0.00938em',
              outline: "none",
            }}
            minRows={10}
            value={value}
            onChange={handelValue}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              textTransform: "capitalize",
              boxShadow: "none",
              borderRadius: "50px",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={sendData}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: "none",
              borderRadius: "50px",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
