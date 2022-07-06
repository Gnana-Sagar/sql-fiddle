import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip, Divider, Grid } from '@mui/material';


import { useSnapshot, subscribe } from 'valtio';
import { state } from '../../reducer/store';


const Results = () => {

  const snap = useSnapshot(state, { sync: true });
  const [result, setResult] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  React.useEffect(() => {
    getResults();
  }, [])

  const getResults = () => {
    const unsubscribe = subscribe(state, () => {
      setResult(state.results);
      if (state.results.length > 0) {
        setColumns(Object.keys(state.results[0]));
      }
    })
  }
  return (
    <React.Fragment>
      {result.length > 0 &&
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <TableContainer m={1} sx={{ display: 'block' }}>
              <br /><br />
              <Divider > <Chip label="Results" color="default" /></Divider>
              <br />
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {
                      Object.keys(result[0]).map((value) => (
                        <TableCell align="center">{value}</TableCell>
                      ))
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    result.map((row) => (
                      <TableRow
                        key={row}
                      > {
                          columns.map(v => (
                            <TableCell align="center">{row[v]}</TableCell>
                          ))
                        }
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid >
      }
    </React.Fragment>
  );
}

export default Results;