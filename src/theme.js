import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette : {
        primary : teal
    },
    spacing : factor => factor * 2,
});