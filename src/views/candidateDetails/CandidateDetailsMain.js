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
        <MainCard title="Candidate Details">
            <Grid container direction="column" sx={{ overflowX: 'hidden' }}>
                {/* COMPONENTS */}
                <Grid
                    container
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{
                        // position: 'absolute',
                        top: '20vh',
                        px: { xs: 0, md: 7 }
                    }}
                >
                    {/* PROFILE CARD */}
                    <Grid item md={3} sm={12}>
                        <ProfileCard
                            name={fullName}
                            sub={mainUser.title}
                            dt1={mainUser.dt1}
                            dt2={mainUser.dt2}
                            dt3={mainUser.dt3}
                            userDetails={userDetails}
                        ></ProfileCard>
                    </Grid>

                    {/* SETTINGS CARD */}
                    <Grid item md={9} sm={12}>
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
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default candidateDetails;
