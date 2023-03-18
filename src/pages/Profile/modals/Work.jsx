import React, { useState } from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box,
    Typography
 } from '@mui/material'
import { CustomInput } from '../../../components/Input';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/user';

export default function WorkTitleModal({open, onClose, user}) {

    const dispatch = useDispatch();
  
    const [ value, setValue ] = useState(user?.profile?.name)

    const handelValue = (e) => {
        setValue(e.target.value)
    }

    const sendData = () => {


        const data = {...user ,profile : {...user.profile ,  name : value}}

        dispatch(updateUserData(data))
    }

  return (
    <Box>
      <Dialog open={open} onClose={onClose} sx={{'& .MuiDialog-paper' : {padding : '10px 15px 15px 10px'}}}>
        <DialogTitle variant='h5' fontWeight='600' mb={10}>Edit your title</DialogTitle>
        <DialogContent sx={{mb : 20}}>
          <DialogContentText>
            <Typography variant='body1' color="#000" mb={4}>Your title</Typography>
            Enter a single sentance description of your professional skills/experience (e.g Expert Web Designer with Ajax experience)
          </DialogContentText>
          <CustomInput
            autoFocus
            margin="normal"
            id="title"
            type="text"
            value={value}
            onChange={handelValue}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{textTransform : 'capitalize', boxShadow : 'none', borderRadius : '50px'}}>Cancel</Button>
          <Button onClick={sendData} variant='contained' sx={{textTransform : 'capitalize', boxShadow : 'none', borderRadius : '50px'}}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}