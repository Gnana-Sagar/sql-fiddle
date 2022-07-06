import { Paper, Typography } from '@mui/material';
import React, { useRef } from 'react';

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
import { useSnapshot } from 'valtio';
import { state } from '../../reducer/store';

const QueryEditor = () => {

    const aceEditorRef = useRef();

    const snap = useSnapshot(state, { sync: true });

    const onChange = () => {
        state.query = aceEditorRef.current.editor.getValue();

    }

    return (
        <Paper className='full-height no-border' sx={{height: (84/(state.settings.orientation === 'column' ? 2:1))+'vh'}} >
            <Typography variant="subtitle1" gutterBottom component="div" m={1}  >Query SQL</Typography>
            <AceEditor
                placeholder="SELECT"
                mode="mysql"
                ref={aceEditorRef}
                theme={snap.settings.editorTheme}
                name="query"
                onBlur={onChange}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={snap.query}
                wrapEnabled
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
        </Paper>
    )
}

export default QueryEditor;