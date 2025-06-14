import { createTheme } from "@mui/material/styles";
import { breakpoint } from "./breakpoints";
import { components } from "./components";
import { palette } from "./palette";
import { shape } from "./shape";
import { typography } from "./typography";

export const theme = createTheme({
    typography,
    shape,
    breakpoint,
    components,
    palette
});