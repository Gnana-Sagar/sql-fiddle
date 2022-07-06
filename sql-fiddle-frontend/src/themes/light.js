import {createTheme} from '@mui/material';

export const light = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        button: {
            textTransform: 'none',
            fontWeight: 600,
            color: '#fff !important',
            
        }
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #bec5cb',
                    background: '#fff'
                }
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: '#ebebeb !important',
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                "grid-xs-6": {
                    background: '#fff',
                    borderLeft: '1px solid #ebebeb'

                },
                "grid-xs-10": {
                    background: '#fff',
                    borderLeft: '1px solid #ebebeb',
                },
                "grid-xs-2": {
                    background: '#fff',
                    borderLeft: '1px solid #ebebeb',
                },
                "grid-xs-5": {
                    background: '#fff',
                    borderLeft: '1px solid #ebebeb',
                },
                container: {
                    background: '#fff',
                },
            }
        }
    },
    palette: {
        mode: 'light',
        white: {
            main: '#1976d2'
        }
    },
});
