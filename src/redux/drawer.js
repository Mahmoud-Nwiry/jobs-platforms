import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name : 'drawer',
    initialState : {
        job : {},
        isOpen : false,
    },
    reducers : {
        addJob : (state, action) => {
            state.job = action.payload
        },
        removeJob : (state, action) => {
            state.job = {}
        },
        setOpen : (state, action) => {
            const { payload = false } = action
            state.isOpen = payload
        }
    }
})

export const { addJob, removeJob, setOpen } = drawerSlice.actions

export default drawerSlice.reducer