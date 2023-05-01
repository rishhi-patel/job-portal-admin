import { Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IconEye } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs } from 'store/actions/jobActions';
import { useEffect } from 'react';
import Loading from 'layout/loader/Loading';

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

const JobsMain = ({ getJobList, jobList, loading }) => {
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

    useEffect(() => {
        getJobList();
    }, [getJobList]);

    return (
        <MainCard title="Jobs" btnText="+ Add Job" btnEvent={() => navigate('/dashboard/jobs/new')}>
            {loading ? (
                <Loading />
            ) : (
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
                            {jobList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((jobData, i) => (
                                <TableRow key={jobData._id}>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {i + 1}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {jobData.jobPosition}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {jobData.industry}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        Iei {jobData.minSalary} - Iei {jobData.maxSalary}
                                    </TableCell>
                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        {jobData.jobLocation}
                                    </TableCell>

                                    <TableCell align="center" style={{ paddingLeft: 16 }}>
                                        <Link to={jobData._id}>
                                            <IconEye />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </Box>
            )}
        </MainCard>
    );
};

const mapStateToProps = ({ jobs }) => {
    const { jobList, loading } = jobs;
    return { jobList, loading };
};
const mapDispatchToProps = (dispatch) => ({
    getJobList: () => dispatch(getJobs())
});
export default connect(mapStateToProps, mapDispatchToProps)(JobsMain);
