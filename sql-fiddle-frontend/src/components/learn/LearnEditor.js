import { Paper, Typography, Button, Grid, Divider, Chip } from '@mui/material';
import React, { useRef, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useSnapshot, subscribe } from 'valtio';
import { state } from '../../reducer/store';

const LearnEditor = () => {

    const aceEditorRef = useRef();


    const snap = useSnapshot(state, { sync: true });

    const onChange = () => {
        // state.schema = aceEditorRef.current.editor.getValue();
    }

    return (
        <React.Fragment>
            <Paper sx={{ height: '42vh'}}>
                <Typography variant="subtitle1" gutterBottom component="div" m={1}  >Write Query Here..</Typography>
                <AceEditor
                    placeholder="Write Query Here..."
                    mode="mysql"
                    theme={snap.settings.editorTheme}
                    name="schema"
                    ref={aceEditorRef}
                    onBlur={onChange}
                    fontSize={18}
                    showPrintMargin={false}
                    backwards={true}
                    showGutter={true}
                    wrapEnabled
                    highlightActiveLine={true}
                    value={''}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }} />

            </Paper>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6} sx={{float:'right'}}>
                    <Button  sx={{float:'right',mr:1}} startIcon={<PlayArrowIcon />} variant="contained" disableElevation onClick={() => executeQuery()}>Run</Button>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Grid item xs={12}>
                    <Divider>
                        <Chip label='Answer' />
                    </Divider>
                </Grid>
               
            </Grid>
        </React.Fragment>
    )
}

export default LearnEditor;