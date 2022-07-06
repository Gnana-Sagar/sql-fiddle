import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function DatabaseSelect() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<Select />}
        >
          <MenuItem value={'postgres'} selected>Postgres</MenuItem>
          <MenuItem value={'mysql'}>MySQL</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}