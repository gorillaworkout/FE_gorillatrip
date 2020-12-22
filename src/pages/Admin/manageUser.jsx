import React, { Component } from 'react';
import Header from '../../components/Header'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
class ManageUser extends Component {
    state = { 
        classes:useStyles,
    }
    render() { 
        return ( 
            <>  
                <div>
                    <div>
                        <Header/>
                        <div>
                            {/* <ButtonUi onClick={this.addData}>Add Data</ButtonUi> */}
                            <Paper className={this.state.classes.root}>
                                <TableContainer className={this.state.classes.contianer}>
                                    <Table stickyHeader aria-label='sticky table'>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>No.</TableCell>
                                                <TableCell>ID.</TableCell>
                                                <TableCell style={{width:'200px'}}>Nama Lengkap</TableCell>
                                                <TableCell style={{width:'200px'}}>Username</TableCell>
                                                <TableCell typeof="password">password</TableCell>
                                                <TableCell >Email</TableCell>
                                                <TableCell style={{width:'300'}}>Role</TableCell>
                                                <TableCell style={{width:'300'}}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </div>

                    </div>
                </div>
    
            </>

         );
    }
}
 
export default ManageUser;