import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class UsersTable extends Component {

  render() {
    return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users.map(row => {
                return (
                    <TableRow key={row._id}>
                      <TableCell>{row._id}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.first_name}</TableCell>
                      <TableCell>{row.last_name}</TableCell>
                    </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default UsersTable;
