import React from 'react';
import { Divider, Grid } from '@mui/material';
import SchemaEditor from './SchemaEditor';
import QueryEditor from './QueryEditor';
import { useSnapshot } from 'valtio';
import { state } from '../../reducer/store';
import SecondNavBar from '../header/SecondNavBar';

const Editor = (props) => {

    const snap = useSnapshot(state, { sync: true });


    return (
        <React.Fragment>
            <Divider />
            <Grid
                container
                direction={snap.settings.orientation}
                justifyContent="space-between"
                alignItems="stretch"
                spacing={0}
            >
                <Grid item xs={6} className="border-right">
                    <SchemaEditor />
                </Grid>
                <Grid item xs={6}>
                    <QueryEditor />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Editor;