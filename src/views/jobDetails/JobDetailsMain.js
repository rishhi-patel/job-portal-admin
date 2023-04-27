// IMPORTS
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import JobDetailsForm from './JobDetailsForm';

//APP
export default function JobDetailsMain(props) {
    //RETURN
    return (
        <MainCard title="Job Details">
            <JobDetailsForm
                details={{
                    jobPosition: 'Jr. Dev',
                    jobDescription: 'Frontend Dev',
                    requirement: 'react,redux',
                    industry: 'IT',
                    shifts: 'first',
                    jobLocation: 'india',
                    salary: 'Iei 10000 -  Iei 20000',
                    aboutCompany: 'infotech.ltd',
                    empowering: '',
                    aboutCompany: '',
                    submit: null
                }}
            />
        </MainCard>
    );
}
