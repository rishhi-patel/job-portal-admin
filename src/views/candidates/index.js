import { Table, TableCell, TableHead, TableRow, Typography, TableBody } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Container = styled('div')(() => ({
    paddingTop: '1rem'
}));

const StyledTable = styled(Table)(() => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
    },
    '& tbody': {
        '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
    }
}));

const dataList = [
    {
        id: 1,
        userName: 'Jay Patel',
        mobile: '9876543211',
        email: 'johntest@gmail.com',
        status: 'block'
    },
    {
        id: 2,
        userName: 'Mayank tejani',
        mobile: '9126543211',
        email: 'mayanktejani@gmail.com',
        status: 'block'
    },
    {
        id: 3,
        userName: 'Kuldeep Yadav',
        mobile: '9876577777',
        email: 'Kuldeep23@gmail.com',
        status: 'block'
    },
    {
        id: 4,
        userName: 'Divya Sharma',
        mobile: '9872243211',
        email: 'divyasharma34@gmail.com',
        status: 'block'
    },
    {
        id: 5,
        userName: 'Krupa Pandit',
        mobile: '9922771188',
        email: 'krupapandit90@gmail.com',
        status: 'block'
    },
    {
        id: 6,
        userName: 'Harsh Mevani',
        mobile: '6790126733',
        email: 'harshmevani9@gmail.com',
        status: 'block'
    }
];

const Candidates = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };
    // const history = useHistory();
    const handleView = () => {
        // history.push('/app/pages/product/data-view');
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <MainCard title="Candidates">
            <Box className="plan">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <text>Customer Name</text>
                            </TableCell>
                            <TableCell align="center">Mobile</TableCell>
                            <TableCell align="center" width="200px">
                                {' '}
                                Email
                            </TableCell>
                            <TableCell align="center">Block / Unblock </TableCell>
                            <TableCell align="center">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ padding: '10px' }}>
                        {dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((userData) => (
                            <TableRow key={userData.id}>
                                <TableCell align="center">{userData.userName}</TableCell>
                                <TableCell align="center">{userData.mobile}</TableCell>
                                <TableCell align="center">{userData.email}</TableCell>
                                <TableCell align="center" className="-webkit-center">
                                    <div className="switch">
                                        <Switch {...label} />
                                    </div>
                                </TableCell>

                                <TableCell align="center">
                                    <i
                                        className="simple-icon-eye"
                                        onClick={handleView}
                                        onKeyDown={handleView}
                                        aria-hidden="true"
                                        style={{
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            color: '#6fb326'
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>

                {/* <TablePagination
                    sx={{ px: 2 }}
                    page={page}
                    component="div"
                    className="page"
                    rowsPerPage={rowsPerPage}
                    count={dataList.length}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 25]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                    backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                /> */}
            </Box>
        </MainCard>
    );
};

export default Candidates;
