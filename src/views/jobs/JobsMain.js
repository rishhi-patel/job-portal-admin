import { Table, TableCell, TableHead, TableRow, Typography, TableBody } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router';
import { IconEye } from '@tabler/icons';
import { Link } from 'react-router-dom';

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
        jobPosition: 'Jr. React Developer',
        Industry: 'IT',
        Salary: 'Iei 10000 -  Iei 20000',
        JobLocation: ' US'
    },
    {
        id: 2,
        jobPosition: 'Sr. React Developer',
        Industry: 'IT',
        Salary: 'Iei 10000 -  Iei 20000',
        JobLocation: ' US'
    },
    {
        id: 3,
        jobPosition: 'Sr. React Developer',
        Industry: 'IT',
        Salary: 'Iei 10000 -  Iei 20000',
        JobLocation: ' US'
    },
    {
        id: 4,
        jobPosition: 'Jr. React Developer',
        Industry: 'IT',
        Salary: 'Iei 10000 -  Iei 20000',
        JobLocation: ' US'
    },
    {
        id: 5,
        jobPosition: 'Jr. React Developer',
        Industry: 'IT',
        Salary: 'Iei 10000 -  Iei 20000',
        JobLocation: ' US'
    }
];

const JobsMain = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };
    const handleView = () => {
        // history.push('/app/pages/product/data-view');
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <MainCard title="Jobs" btnText="+ Add Job" btnEvent={() => navigate('/dashboard/jobs/new')}>
            <Box className="plan" style={{ overflowY: 'auto' }}>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No.</TableCell>
                            <TableCell align="center">Job Position</TableCell>
                            <TableCell align="center">Industry</TableCell>
                            <TableCell align="center">Salary </TableCell>
                            <TableCell align="center">Job location </TableCell>
                            <TableCell align="center">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ padding: '10px' }}>
                        {dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((jobData) => (
                            <TableRow key={jobData.id}>
                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    {jobData.id}
                                </TableCell>
                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    {jobData.jobPosition}
                                </TableCell>
                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    {jobData.Industry}
                                </TableCell>
                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    {jobData.Salary}
                                </TableCell>
                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    {jobData.JobLocation}
                                </TableCell>

                                <TableCell align="center" style={{ paddingLeft: 16 }}>
                                    <Link to={'1'}>
                                        <IconEye />
                                    </Link>
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

export default JobsMain;
