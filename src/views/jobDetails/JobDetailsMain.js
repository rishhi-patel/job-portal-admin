// IMPORTS
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CustomInput from 'views/candidateDetails/CustomInput';
import MainCard from 'ui-component/cards/MainCard';

const shifts = [
    {
        value: 'first',
        label: 'First'
    },
    {
        value: 'second',
        label: 'Second'
    },
    {
        value: 'night',
        label: 'night'
    }
];
//APP
export default function JobDetailsMain(props) {
    //RETURN
    return (
        <MainCard title="Job Details">
            <form>
                <CardContent
                    sx={{
                        p: 3,
                        // maxHeight: { md: '40vh' },
                        textAlign: { xs: 'center', md: 'start' }
                    }}
                >
                    {/* FIELDS */}
                    <FormControl fullWidth>
                        <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                            {/* ROW 1: FIRST NAME */}
                            <Grid component="form" item xs={6}>
                                <CustomInput
                                    id="Job position"
                                    name="Job position"
                                    required
                                    //  value={user.firstName}
                                    //     onChange={changeField}
                                    title="Job Position"
                                ></CustomInput>
                            </Grid>
                            {/* ROW 1: LAST NAME */}
                            <Grid component="form" item xs={6}>
                                <CustomInput
                                    id="Job description"
                                    name="Job description"
                                    //  value={user.lastName}
                                    //     onChange={changeField}
                                    title="Job description"
                                ></CustomInput>
                            </Grid>
                            {/* ROW 2: MIDDLE NAME */}
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Requirement"
                                    name="Requirement"
                                    //  value={user.midName}
                                    //     onChange={changeField}
                                    title="Requirement"
                                ></CustomInput>
                            </Grid>
                            {/* ROW 3: PHONE */}
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Industry"
                                    name="Industry"
                                    //  value={user.midName}
                                    //     onChange={changeField}
                                    title="Industry"
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="JobLocation"
                                    name="Job Location"
                                    //  value={user.midName}
                                    //     onChange={changeField}
                                    title="Job Location"
                                ></CustomInput>
                            </Grid>
                            {/* ROW 3: EMAIL */}
                            <Grid item xs={6}>
                                <CustomInput
                                    type="Salary"
                                    id="Salary"
                                    name="Salary"
                                    //  value={user.email}
                                    //     onChange={changeField}
                                    title="Salary"
                                ></CustomInput>
                            </Grid>{' '}
                            <Grid item xs={6}>
                                <CustomInput
                                    select
                                    type="Shifts"
                                    id="Shifts"
                                    name="Shifts"
                                    //  value={user.email}
                                    //     onChange={changeField}
                                    title="Shifts"
                                    content={shifts.map((option) => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Empowering"
                                    name="Empowering"
                                    //  value={user.midName}
                                    //     onChange={changeField}
                                    title="Empowering"
                                    multiline
                                    minRows={4}
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="About Company"
                                    name="About Company"
                                    //  value={user.midName}
                                    //     onChange={changeField}
                                    title="About Company"
                                    multiline
                                    minRows={4}
                                ></CustomInput>
                            </Grid>{' '}
                            {/* BUTTON */}
                            <Grid container justifyContent={{ xs: 'center', md: 'flex-end' }} item xs={12}>
                                <Button variant="contained" color="secondary" sx={{ p: 1 }}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </CardContent>
            </form>
        </MainCard>
    );
}
