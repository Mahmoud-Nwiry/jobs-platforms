import { teal, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette : {
        primary : teal,
        secondary : grey
    },
    spacing : factor => factor * 2,
});