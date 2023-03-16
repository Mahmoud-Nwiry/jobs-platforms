import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const jobsSlice = createSlice({
    name : 'jobs',
    initialState : {
        isLoading : false,
        jobs : [],
        singleJob : {},
        error : null
    },
    reducers : {
        setLoading: (state, action) => {
            const { payload = false } = action;
            state.isLoading = payload;
        },
        getAllData : (state, action) => {
            state.jobs = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
});


export const { getAllData, setLoading, setError } = jobsSlice.actions;

// ===================================================================================

export const getAllJobs = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get('http://localhost:3000/jobs');
        if (data)
            dispatch(getAllData(data))
    }
    catch (err) {
        dispatch(setError(err));
    }
    finally {
        dispatch(setLoading())
    }
}

// ===================================================================================

export default jobsSlice.reducer