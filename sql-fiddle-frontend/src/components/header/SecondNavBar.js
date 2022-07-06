import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import CachedIcon from '@mui/icons-material/Cached';
import ShareIcon from '@mui/icons-material/Share';
import { Stack, Divider, Grid, FormControlLabel, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { executeQueryAPI } from '../../service/EditorService';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSnapshot } from 'valtio';
import { state } from '../../reducer/store';
import Settings from '../settings/Settings';

const SecondNavBar = () => {

    const snap = useSnapshot(state, { sync: true });

    const executeQuery = () => {
        if (!(state.schema == "" && state.query == "")) {
            executeQueryAPI({ 'schema': state.schema, 'query': state.query }).then((res) => {
                state.results = res.data;
            })
        }
    }

    const toggleDialog = () => {
        state.openSettings = true;
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{pl:'10px', pr: '20px'}}
        >
            <Grid item xs={4}>
                <FormControl  variant="standard" sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel  id="demo-simple-select-label">Database</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Database">
                        <MenuItem key="postgres" value={'postgres'}>Postgres</MenuItem>
                        <MenuItem value={'mysql'} key="mysql">MySQL</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={8}>
                <Stack direction="row" spacing={4}   justifyContent="flex-end">
                    <Button startIcon={<PlayArrowIcon />} color="white" disableElevation onClick={() => executeQuery()}>Run</Button>
                    <Button startIcon={<SaveIcon />} color="white" disableElevation>Save</Button>
                    <Button startIcon={<CachedIcon />} color="white" disableElevation>Load Example</Button>
                    <Button startIcon={<ShareIcon />} color="white" disableElevation>Share</Button>
                    <Button endIcon={<SettingsIcon />} color="white" disableElevation onClick={() => toggleDialog(true)}>Settings</Button>
                </Stack>
            </Grid>
            <Settings />
        </Grid>
    );
};
export default SecondNavBar;
