import { configureStore } from "@reduxjs/toolkit";

// reducers
import jobsReducer from "./jobs";
import userReducer from "./user";
import drawerReduser from './drawer'

export default configureStore({
    reducer : {
        jobs : jobsReducer,
        user : userReducer,
        drawer : drawerReduser
    }
})