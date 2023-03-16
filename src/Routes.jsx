import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
        </Routes>
    )
}

export default Routing