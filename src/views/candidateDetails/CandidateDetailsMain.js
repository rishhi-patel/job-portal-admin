/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ProfileCard from './ProfileCard';
import SettingsCard from './SettingsCard';
import { Grid } from '@mui/material';

const candidateDetails = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: 'john',
        lastName: 'Doe',
        nationality: 'indian',
        phoneNumber1: 999999999,
        phoneNumber2: 88888888,
        email: 'janedoe@gmail.com',
        passportNo: 'W2006869',
        currentEmployer: '',
        profession: 'Developer',
        residenceCardExpiryDate: '02/09/2024'
    });

    const mainUser = {
        title: 'CEO of Apple',
        dt1: 32,
        dt2: 40,
        dt3: 50,
        firstName: 'john',
        lastName: 'Doe',
        midName: 'Baker',
        gender: 'female',
        phone: '932-555-4247',
        email: 'janedoe@gmail.com',
        pass: 'password123'
    };

    const fullName = `${mainUser.firstName} ${mainUser.lastName}`;

    return (
        <MainCard title="Candidate Details" contentSX={{ padding: 0 }}>
            <SettingsCard
                firstName={mainUser.firstName}
                lastName={mainUser.lastName}
                midName={mainUser.midName}
                phone={mainUser.phone}
                email={mainUser.email}
                pass={mainUser.pass}
                gender={mainUser.gender}
                userDetails={userDetails}
            ></SettingsCard>
        </MainCard>
    );
};

export default candidateDetails;
