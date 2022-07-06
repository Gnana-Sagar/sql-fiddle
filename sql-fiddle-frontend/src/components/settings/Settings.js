import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Drawer, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { useSnapshot, subscribe } from 'valtio';
import { state } from '../../reducer/store';


export default function Settings() {

    const snap = useSnapshot(state, { sync: true });

    const [settings, setSettings] = useState(false);

    subscribe(state, () => {
        if (state.openSettings === true) {
            setSettings(true);
        }
    })


    const closeDrawer = () => {
        setSettings(false);
        state.openSettings = false;
    }
    const changeEditorTheme = (event) => {
        localStorage.setItem('editorTheme',event.target.value);
        state.settings.editorTheme = event.target.value;
    }

    const changeOrientation = (event) => {
        localStorage.setItem('orientation',event.target.value);
        state.settings.orientation = event.target.value;
    }
    const list = () => (
        <Box
            role="presentation"
            sx={{ width: '300px', m: 2 }}
        >
            <br /><br />
            <Typography variant='subtitle1'>Editor Orientation</Typography>
            <ToggleButtonGroup color="success" value={snap.settings.orientation}
                exclusive fullWidth onChange={changeOrientation}>
                <ToggleButton value={'row'}>Vertical</ToggleButton>
                <ToggleButton value={'column'}>Horizontal</ToggleButton>
            </ToggleButtonGroup>
            <br /><br />
            <Typography variant='subtitle1'>Editor Theme</Typography>
            <FormControl fullWidth variant="standard">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Editor Theme"
                    value={snap.settings.editorTheme}
                    onChange={changeEditorTheme}
                >
                    {
                        ['monokai','github','tomorrow','xcode', 'textmate' , 'solarized_dark', 'solarized_light', 'terminal'].map(e => (
                            <MenuItem value={e}>{e}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <br /><br />
            <Button fullWidth type="primary" variant="contained" onClick={closeDrawer}>Close</Button>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={settings}
                    onClose={closeDrawer}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}