import React from 'react';
import { Grid } from '@mui/material';
import NavBar from '../header/Header';
import SideBar from '../SideBar/SideBar';
import Editor from './Editor';
import Results from './Results';
const Fiddle = () => {
    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={2} sx={{ height: '100vh', textAlign: 'center' }}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} >
                    <Editor />
                    <Results />
                    <br /><br />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Fiddle;