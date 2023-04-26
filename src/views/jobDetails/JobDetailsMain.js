// IMPORTS
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomInput from 'views/candidateDetails/CustomInput';
import MainCard from 'ui-component/cards/MainCard';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import UnstyledInputBasic from 'views/candidateDetails/CustomTextArea';
//APP
export default function JobDetailsMain(props) {
    //TAB STATES
    const [value, setValue] = React.useState('one');

    const handleChange = (even, newValue) => {
        setValue(newValue);
    };

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

    // FORM STATES
    const [user, setUser] = useState({
        // DEFAULT VALUES
        firstName: props.firstName,
        lastName: props.lastName,
        midName: props.midName,
        gender: props.gender,
        phone: props.phone,
        email: props.email,
        pass: props.pass,
        showPassword: false
    });

    const changeField = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    //BUTTON STATES
    const [edit, update] = useState({
        required: true,
        disabled: true,
        isEdit: true
    });

    // EDIT -> UPDATE
    const changeButton = (event) => {
        event.preventDefault();
        user.showPassword = false;
        edit.disabled = !edit.disabled;
        edit.isEdit = !edit.isEdit;
        update({ ...edit });
        console.log('user: ', user);
    };

    // TOGGLE PASSWORD VISIBILITY
    const handlePassword = () => {
        user.showPassword = !user.showPassword;
        setUser({ ...user });
    };

    //RETURN
    return (
        <MainCard title="Job Details">
            {/* TABS */}

            {/* MAIN CONTENT CONTAINER */}
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
                                    value={user.firstName}
                                    onChange={changeField}
                                    title="Job Position"
                                ></CustomInput>
                            </Grid>

                            {/* ROW 1: LAST NAME */}
                            <Grid component="form" item xs={6}>
                                <CustomInput
                                    id="Job description"
                                    name="Job description"
                                    value={user.lastName}
                                    onChange={changeField}
                                    title="Job description"
                                ></CustomInput>
                            </Grid>

                            {/* ROW 2: MIDDLE NAME */}
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Requirement"
                                    name="Requirement"
                                    value={user.midName}
                                    onChange={changeField}
                                    title="Requirement"
                                ></CustomInput>
                            </Grid>

                            {/* ROW 2: GENDER */}
                            {/* <Grid item xs={6}>
                                <CustomInput
                                    select
                                    id="PassportNo"
                                    name="Passport No."
                                    value={user.gender}
                                    onChange={changeField}
                                    title="Passport No."
                                    // dis={edit.disabled}
                                    // req={edit.required}
                                    //MAP THRU OPTIONS
                                    content={genderSelect.map((option) => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                ></CustomInput>
                            </Grid> */}

                            {/* ROW 3: PHONE */}
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Industry"
                                    name="Industry"
                                    value={user.midName}
                                    onChange={changeField}
                                    title="Industry"
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="JobLocation"
                                    name="Job Location"
                                    value={user.midName}
                                    onChange={changeField}
                                    title="Job Location"
                                ></CustomInput>
                            </Grid>

                            {/* ROW 3: EMAIL */}
                            <Grid item xs={6}>
                                <CustomInput
                                    type="Salary"
                                    id="Salary"
                                    name="Salary"
                                    value={user.email}
                                    onChange={changeField}
                                    title="Salary"
                                ></CustomInput>
                            </Grid>

                            {/* ROW 4: PASSWORD */}
                            {/*  <Grid item xs={6}>
                                <CustomInput
                                    id="pass"
                                    name="pass"
                                    value={user.pass}
                                    onChange={changeField}
                                    title="Password"
                                    dis={edit.disabled}
                                    req={edit.required}
                                    type={user.showPassword ? 'text' : 'password'}
                                    // PASSWORD ICON
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handlePassword} edge="end" disabled={edit.disabled}>
                                                    {user.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                ></CustomInput>
                                </Grid> */}

                            <Grid item xs={6}>
                                <CustomInput
                                    select
                                    type="Shifts"
                                    id="Shifts"
                                    name="Shifts"
                                    value={user.email}
                                    onChange={changeField}
                                    title="Shifts"
                                    content={shifts.map((option) => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="Empowering"
                                    name="Empowering"
                                    value={user.midName}
                                    onChange={changeField}
                                    title="Empowering"
                                ></CustomInput>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInput
                                    id="About Company"
                                    name="About Company"
                                    value={user.midName}
                                    onChange={changeField}
                                    title="About Company"
                                    multiline
                                    minRows={4}
                                ></CustomInput>
                            </Grid>
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
