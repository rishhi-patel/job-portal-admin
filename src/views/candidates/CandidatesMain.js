import { Table, TableCell, TableHead, TableRow, TableBody, TablePagination } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IconEye } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCandidates } from 'store/actions/userActions';
import Loading from 'layout/loader/Loading';

const StyledTable = styled(Table)(() => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
    },
    '& tbody': {
        '& tr': { '& td': { paddingLeft: 0 } }
    }
}));

const CandidatesMain = ({ getCandidateList, candidates, loading }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        getCandidateList();
    }, [getCandidateList]);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <MainCard title="Candidates">
            {loading ? (
                <Loading />
            ) : (
                <Box className="plan" style={{ overflowY: 'auto' }}>
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">No.</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Mobile</TableCell>
                                <TableCell align="center">Email</TableCell>

                                <TableCell align="center">View</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ padding: '10px' }}>
                            {candidates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((userData, i) => (
                                <TableRow key={userData._id}>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {i + 1}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {userData.firstName}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {userData.phoneNumber1 ? userData.phoneNumber1 : userData.phoneNumber2}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {userData.email}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        <Link to={userData._id}>
                                            <IconEye />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>

                    <TablePagination
                        sx={{ px: 2 }}
                        page={page}
                        component="div"
                        className="page"
                        rowsPerPage={rowsPerPage}
                        count={candidates.length}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                    />
                </Box>
            )}
        </MainCard>
    );
};

const mapStateToProps = ({ user }) => {
    const { candidates, loading } = user;
    return { candidates, loading };
};
const mapDispatchToProps = (dispatch) => ({
    getCandidateList: () => dispatch(getCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesMain);
