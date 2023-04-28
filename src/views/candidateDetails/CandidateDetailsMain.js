/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SettingsCard from './SettingsCard';
import { useParams } from 'react-router';
import { getCandidateById } from 'store/actions/userActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from 'layout/loader/Loading';

const candidateDetails = ({ getCandidateDetails, selectedCandidate, loading }) => {
    console.log({ loading });
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        nationality: '',
        phoneNumber1: '',
        phoneNumber2: '',
        email: '',
        passportNo: '',
        currentEmployer: '',
        profession: '',
        residenceCardExpiryDate: ''
    });

    useEffect(() => {
        getCandidateDetails(id);
    }, [getCandidateDetails, id]);

    useEffect(() => {
        setUserDetails(selectedCandidate);
    }, [selectedCandidate]);

    return (
        <MainCard title="Candidate Details" contentSX={{ padding: 0 }}>
            {loading ? <Loading /> : <SettingsCard userDetails={userDetails} setUserDetails={setUserDetails}></SettingsCard>}
        </MainCard>
    );
};

const mapStateToProps = ({ user }) => {
    const { selectedCandidate, loading } = user;
    return { selectedCandidate, loading };
};
const mapDispatchToProps = (dispatch) => ({
    getCandidateDetails: (id) => dispatch(getCandidateById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(candidateDetails);
