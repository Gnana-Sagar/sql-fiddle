import React, { useState } from "react";
import LearnSideBar from "./LearnSideBar";

import { Grid, Typography } from "@mui/material";
import LearnEditor from "./LearnEditor";

const Learn = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ height: '100vh !imporant' }}
        >
            <Grid item xs={2}   sx={{borderRight: '1px solid #ebebeb',height: '100vh !imporant' }}>
                <LearnSideBar />
            </Grid>
            <Grid item xs={5} sx={{borderRight: '1px solid #ebebeb',height: '100vh !imporant' }}>
            <Typography variant="subtitle1" gutterBottom component="div" m={1}  >Question</Typography>

            </Grid>
            <Grid item xs={5}>
                <LearnEditor />
            </Grid>
        </Grid>

    )
}

export default Learn;