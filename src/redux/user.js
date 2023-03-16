import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        isLoading : false,
        user : {},
        error : null
    },
    reducers : {
        setLoading : (state, action) => {
            const { payload = false } = action;
            state.isLoading = payload
        },
        getUser : (state, action) => {
            state.user = action.payload
        },
        deleteUser : (state, action) => {
            state.user = {}
        },
        updateUser : (state, action) => {
            state.user = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { getUser, deleteUser, updateUser, createUser, setError, setLoading } = userSlice.actions

// ============================================================================================

export const createNewUser = (body) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.post('http://localhost:3000/users', body);
        if (data)
            dispatch(getUser(data))
    }
    catch (err) {
        dispatch(setError(err));
    }
    finally {
        dispatch(setLoading())
    }
}

export const getUserData = (body) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get(`http://localhost:3000/users?email=${body.email}&password=${body.password}`);
        if (data)
            dispatch(getUser(data[0]))
    }
    catch (err) {
        dispatch(setError(err));
    }
    finally {
        dispatch(setLoading())
    }
}

// =======================================================================================================

export default userSlice.reducer