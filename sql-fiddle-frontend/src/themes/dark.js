import { BorderRight } from '@mui/icons-material';
import { createTheme } from '@mui/material';

export const dark = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        button: {
            textTransform: 'none',
            fontWeight: 600,
            color: '#bec5cb',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body:{
                    background: '#1e1e1e !important'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #555651',
                }
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: '#424242',
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                "grid-xs-6": {
                    background: '#1e1e1e',
                    borderLeft: '1px solid #555651'
                },
                "grid-xs-10": {
                    background: '#1e1e1e',
                    borderLeft: '1px solid #555651'
                },
                "grid-xs-2": {
                    background: '#1e1e1e',
                    borderRight: '1px solid #555651'
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#272727'
        },
        grey: {
            main: '#24303c'
        },
        white: {
            main: '#fff'
        }
    },
});
