import React, { Suspense, useEffect } from 'react';
import { Box, Grid, ThemeProvider } from "@mui/material";
import './App.css';
import { dark } from './themes/dark';
import { light } from './themes/light';
import { useSnapshot, } from 'valtio';
import { state } from './reducer/store';
import CssBaseline from '@mui/material/CssBaseline';
import Learn from './components/learn/Learn';
import Fiddle from './components/QueryEditor/Fiddle';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/header/Header';

const App = (props) => {

  const snap = useSnapshot(state, { sync: true });

  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return 'changes no saved';
    });
    window.addEventListener("unload", (ev) => {
      ev.preventDefault();
      return 'changes no saved';
    });
  })

  return (
    <ThemeProvider theme={snap.theme == 'dark' ? dark : light}>
      <CssBaseline />
      <Box>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Fiddle />} />
            <Route exact path="/fiddle" element={<Fiddle />} />
          </Routes>
        </Suspense>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {/* <MenuFooter /> */}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
