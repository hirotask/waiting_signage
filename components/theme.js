import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

/* BREAKPOINTS */
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

/* SPACING */
const spacing = 8;

/* FONT FAMILY */
const fontFamily = [
    'Poppins',
    '"Helvetica Neue"',
    'Arial',
    'Noto Sans JP',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#F4F4F4',
            light: '#FFFFFF',
            dark: '#C1C1C1',
        },
        secondary: {
            main: '#FFC107',
            light: '#FFF350',
            dark: '#C79100',
        },
    },
    spacing: spacing,
    breakpoints: {
        values: {
            xl,
            lg,
            md,
            sm,
            xs,
        },
    },
    typography: {
        fontFamily: fontFamily.join(','),
    },
});

export default theme;