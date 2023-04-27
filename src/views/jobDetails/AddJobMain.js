import React from 'react';
import JobDetailsForm from './JobDetailsForm';
import MainCard from 'ui-component/cards/MainCard';

const AddJobMain = () => {
    return (
        <MainCard title="Create Job">
            <JobDetailsForm
                details={{
                    jobPosition: '',
                    jobDescription: '',
                    requirement: '',
                    industry: '',
                    shifts: '',
                    jobLocation: '',
                    salary: '',
                    aboutCompany: '',
                    empowering: '',
                    aboutCompany: '',
                    submit: null
                }}
            />
        </MainCard>
    );
};

export default AddJobMain;
