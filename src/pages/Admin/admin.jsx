import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header'

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

function Admin(props){
    const classes = useStyles();
    return (
        <>
    
        <Header/> 
        <div className='px-5'>
              {/* <ButtonUi onClick={toggle} className='my-3' >
                  Add Data
              </ButtonUi> */}
              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                          <TableCell>No.</TableCell>
                          <TableCell>Nama Trip</TableCell>
                          <TableCell style={{width:'200px'}}>Gambar</TableCell>
                          <TableCell>Tanggal mulai</TableCell>
                          <TableCell>Tanggal berakhir</TableCell>
                          <TableCell>Harga</TableCell>
                          <TableCell style={{width:'300px'}}>Description</TableCell>
                          <TableCell style={{width:'300px'}}>Validation</TableCell>
                          <TableCell >action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {renderTable()} */}
                    </TableBody>
                    </Table>
                </TableContainer>
              </Paper>
          </div>

        </>
    )
}


export default Admin