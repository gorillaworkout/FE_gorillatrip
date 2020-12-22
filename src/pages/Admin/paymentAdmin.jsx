import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Header from '../../components/Header'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
class paymentAdmin extends Component {
    state = { 
        classes:useStyles,
     }
    render() { 
        return ( 
            <>
                <div>
                    <Header/>
                    <div className='px-5 mt-3'>
                    <Paper className={this.state.classes.root}>
                <TableContainer className={this.state.classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                          <TableCell>No.</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell style={{width:'200px'}}>Gambar</TableCell>
                          <TableCell>Tanggal Pembayaran</TableCell>
                          <TableCell style={{width:'300px'}}>Action</TableCell>
                         
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {this.renderTable()} */}
                    </TableBody>
                    </Table>
                </TableContainer>
              </Paper>
                    </div>
                </div>
            </>

         );
    }
}
 
export default paymentAdmin;