// IMPORTS
import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import JobDetailsForm from './JobDetailsForm';
import { getJobById } from 'store/actions/jobActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Loading from 'layout/loader/Loading';

//APP
function JobDetailsMain({ getJobDetails, selectedJob, loading }) {
    const { id } = useParams();

    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        getJobDetails(id);
    }, [getJobDetails]);

    //RETURN
    return (
        <MainCard title="Job Details" btnText={readOnly ? 'Edit' : 'Save'} btnEvent={() => setReadOnly((oldVal) => !oldVal)}>
            {loading ? (
                <Loading />
            ) : (
                <JobDetailsForm
                    details={{
                        ...selectedJob
                    }}
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
    getJobDetails: (_id) => dispatch(getJobById(_id))
});
export default connect(mapStateToProps, mapDispatchToProps)(JobDetailsMain);
