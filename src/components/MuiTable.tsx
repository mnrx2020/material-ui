import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material"

const MuiTable = () => {
  return <TableContainer component={Paper} sx={{maxHeight:"300px"}}>
    <Table aria-label='simple-table' stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell align='center'>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map(row=> (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  </TableContainer>
}

export default MuiTable

const tableData = [{
    "id": 1,
    "first_name": "Madlin",
    "last_name": "Norridge",
    "email": "mnorridge0@tmall.com",
    "gender": "Female",
    "ip_address": "33.223.51.191"
  }, {
    "id": 2,
    "first_name": "Kaitlyn",
    "last_name": "Lindblom",
    "email": "klindblom1@japanpost.jp",
    "gender": "Female",
    "ip_address": "56.63.227.252"
  }, {
    "id": 3,
    "first_name": "Nevsa",
    "last_name": "Claxson",
    "email": "nclaxson2@over-blog.com",
    "gender": "Polygender",
    "ip_address": "199.91.246.207"
  }, {
    "id": 4,
    "first_name": "Luise",
    "last_name": "Clancey",
    "email": "lclancey3@oakley.com",
    "gender": "Female",
    "ip_address": "228.102.194.191"
  }, {
    "id": 5,
    "first_name": "Melinda",
    "last_name": "Jelf",
    "email": "mjelf4@home.pl",
    "gender": "Female",
    "ip_address": "176.77.40.138"
  }, {
    "id": 6,
    "first_name": "Rex",
    "last_name": "Linley",
    "email": "rlinley5@skyrock.com",
    "gender": "Male",
    "ip_address": "19.120.225.27"
  }, {
    "id": 7,
    "first_name": "Bette-ann",
    "last_name": "Scard",
    "email": "bscard6@vimeo.com",
    "gender": "Female",
    "ip_address": "107.237.156.201"
  }, {
    "id": 8,
    "first_name": "Shoshanna",
    "last_name": "Cardoe",
    "email": "scardoe7@rakuten.co.jp",
    "gender": "Female",
    "ip_address": "52.227.6.248"
  }, {
    "id": 9,
    "first_name": "Abbey",
    "last_name": "Everest",
    "email": "aeverest8@exblog.jp",
    "gender": "Male",
    "ip_address": "192.97.218.40"
  }, {
    "id": 10,
    "first_name": "Rossy",
    "last_name": "Cowie",
    "email": "rcowie9@trellian.com",
    "gender": "Male",
    "ip_address": "29.37.241.56"
  }]