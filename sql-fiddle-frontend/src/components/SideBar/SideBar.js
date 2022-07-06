import {
  Box,
  FormControl,
  TextField,
  Stack,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  Typography
} from "@mui/material";

import React from "react";

const SideBar = () => {
  return (
    <Box pt={5} pl={2} pr={2}>
      <Box position="fixed" sx={{ width: '14.75%' }}>
        <Stack container
          direction="column"
          justifyContent="center"
          alignItems="center" spacing={2} >
          <FormControl fullWidth>
            <TextField label="Fiddle Title" variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Fiddle Description" variant="outlined" multiline rows={3} />
          </FormControl>
          <Divider />
        </Stack>
      </Box>
    </Box>
  );
};

export default SideBar;