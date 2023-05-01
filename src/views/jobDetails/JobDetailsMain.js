// IMPORTS
import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import JobDetailsForm from './JobDetailsForm';
import { getJobById, updateJobById } from 'store/actions/jobActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Loading from 'layout/loader/Loading';

//APP
function JobDetailsMain({ getJobDetails, selectedJob, loading, updateJob }) {
    const { id } = useParams();

    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        getJobDetails(id);
    }, [getJobDetails]);

    //RETURN
    return (
        <MainCard
            title="Job Details"
            btnText={readOnly ? 'Edit' : 'Save'}
            btnEvent={() => {
                setReadOnly((oldVal) => !oldVal);
                if (!readOnly) {
                    const btn = document.getElementById('jobSubmit');
                    if (btn) btn.click();
                }
            }}
        >
            {loading ? (
                <Loading />
            ) : (
                <JobDetailsForm
                    details={{
                        ...selectedJob
                    }}
                    updateJob={updateJob}
                    readOnly={readOnly}
                />
            )}
        </MainCard>
    );
}
const mapStateToProps = ({ jobs }) => {
    const { selectedJob, loading } = jobs;
    return { selectedJob, loading };
};
const mapDispatchToProps = (dispatch) => ({
    getJobDetails: (_id) => dispatch(getJobById(_id)),
    updateJob: (data, navigate) => dispatch(updateJobById(data, navigate))
});
export default connect(mapStateToProps, mapDispatchToProps)(JobDetailsMain);
