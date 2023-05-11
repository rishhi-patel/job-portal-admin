// IMPORTS
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import { FormHelperText, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomInput from './CustomInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
//APP
export default function SettingsCard({ userDetails, readOnly, setReadOnly, updateCandidate }) {
    //TAB STATES
    const navigate = useNavigate();
    const [value, setValue] = React.useState('one');
    const handleChange = (even, newValue) => {
        setValue(newValue);
    };

    // GENDER SELECT STATES

    // FORM STATES

    //BUTTON STATES
    const [edit, update] = useState({
        required: true,
        disabled: true,
        isEdit: true
    });

    // EDIT -> UPDATE

    // TOGGLE PASSWORD VISIBILITY

    //RETURN
    return (
        <Card variant="outlined" sx={{ height: '100%', width: '100%', padding: 0, border: 'none' }}>
            {/* TABS */}
            <br></br>
            <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                <Tab value="one" label="Account" />
                <Tab value="two" label="Other Details" />
                {/* <Tab value="three" label="Tab 3" /> */}
            </Tabs>
            <Divider></Divider>

            {/* MAIN CONTENT CONTAINER */}
            <Formik
                initialValues={{
                    ...userDetails
                }}
                enableReinitialize
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().max(255).required('First Name is required'),
                    lastName: Yup.string().max(255).required('Last Name is required'),
                    email: Yup.string().max(255).required('Email is required'),
                    nationality: Yup.string().max(255).required('Nationality is required'),
                    phoneNumber1: Yup.string().max(255).required('PhoneNumber is required'),
                    currentEmployer: Yup.string().max(255).required('Current Employer is required'),
                    profession: Yup.string().max(255).required('Profession is required'),
                    residenceCardExpiryDate: Yup.string().max(255).required('Residence Card Expiry Date is required'),
                    facebookId: Yup.string().max(255).required('Facebook ID is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const {
                            firstName,
                            lastName,
                            email,
                            nationality,
                            phoneNumber1,
                            phoneNumber2,
                            passportNo,
                            currentEmployer,
                            profession,
                            residenceCardExpiryDate,
                            facebookId
                        } = values;
                        updateCandidate(
                            userDetails._id,
                            {
                                firstName,
                                lastName,
                                email,
                                nationality,
                                phoneNumber1,
                                phoneNumber2,
                                passportNo,
                                currentEmployer,
                                profession,
                                residenceCardExpiryDate,
                                facebookId
                            },
                            navigate
                        );
                        setReadOnly(true);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
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
                                    {value === 'one' && (
                                        <>
                                            <Grid component="form" item xs={6}>
                                                <CustomInput
                                                    id="firstName"
                                                    name="firstName"
                                                    value={values.firstName}
                                                    title="First Name"
                                                    disabled={readOnly}
                                                    error={touched.firstName && errors.firstName}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.firstName && errors.firstName && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.firstName}
                                                    </FormHelperText>
                                                )}
                                            </Grid>

                                            {/* ROW 1: LAST NAME */}
                                            <Grid component="form" item xs={6}>
                                                <CustomInput
                                                    id="lastName"
                                                    name="lastName"
                                                    value={values.lastName}
                                                    // onChange={changeField}
                                                    title="Last Name"
                                                    disabled={readOnly}
                                                    error={touched.lastname && errors.lastname}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.lastname && errors.lastname && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.lastname}
                                                    </FormHelperText>
                                                )}
                                            </Grid>

                                            {/* ROW 2: MIDDLE NAME */}
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="Nationality"
                                                    name="nationality"
                                                    value={values.nationality}
                                                    // onChange={changeField}
                                                    title="Nationality"
                                                    disabled={readOnly}
                                                    error={touched.nationality && errors.nationality}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.nationality && errors.nationality && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.nationality}
                                                    </FormHelperText>
                                                )}
                                            </Grid>

                                            {/* ROW 3: PHONE */}
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="phone"
                                                    name="phoneNumber1"
                                                    value={values.phoneNumber1}
                                                    // onChange={changeField}
                                                    title="Phone Number 1"
                                                    disabled={readOnly}
                                                    error={touched.phoneNumber1 && errors.phoneNumber1}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.phoneNumber1 && errors.phoneNumber1 && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.phoneNumber1}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="phone"
                                                    name="phoneNumber2"
                                                    value={values.phoneNumber2}
                                                    // onChange={changeField}
                                                    title="Phone Number 2"
                                                    disabled={readOnly}
                                                    error={touched.phoneNumber2 && errors.phoneNumber2}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.phoneNumber2 && errors.phoneNumber2 && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.phoneNumber2}
                                                    </FormHelperText>
                                                )}
                                            </Grid>

                                            {/* ROW 3: EMAIL */}
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={values.email}
                                                    // onChange={changeField}
                                                    title="Email Address"
                                                    disabled={readOnly}
                                                    error={touched.email && errors.email}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.email && errors.email && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.email}
                                                    </FormHelperText>
                                                )}
                                            </Grid>

                                            {/* ROW 4: PASSWORD */}
                                            <Grid item xs={6} />
                                        </>
                                    )}
                                    {value === 'two' && (
                                        <>
                                            {' '}
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="passportNo"
                                                    name="passportNo"
                                                    value={values.passportNo}
                                                    // onChange={changeField}
                                                    title="Passport No."
                                                    disabled={readOnly}
                                                    error={touched.passportNo && errors.passportNo}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.passportNo && errors.passportNo && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.passportNo}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="Facebook_ID"
                                                    name="facebookId"
                                                    value={values.facebookId}
                                                    // onChange={changeField}
                                                    title="Facebook ID"
                                                    disabled={readOnly}
                                                    error={touched.facebookId && errors.facebookId}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.facebookId && errors.facebookId && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.facebookId}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="Profession"
                                                    name="profession"
                                                    value={values.profession}
                                                    // onChange={changeField}
                                                    title="Profession"
                                                    disabled={readOnly}
                                                    error={touched.profession && errors.profession}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.profession && errors.profession && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.profession}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="CurrentEmployer"
                                                    name="currentEmployer"
                                                    value={values.currentEmployer}
                                                    // onChange={changeField}
                                                    title="Current Employer"
                                                    disabled={readOnly}
                                                    error={touched.currentEmployer && errors.currentEmployer}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.currentEmployer && errors.currentEmployer && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.currentEmployer}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomInput
                                                    id="Residence Card Expiry Date"
                                                    name="residenceCardExpiryDate"
                                                    value={values.residenceCardExpiryDate}
                                                    // onChange={changeField}
                                                    title="Residence Card Expiry Date"
                                                    disabled={readOnly}
                                                    error={touched.residenceCardExpiryDate && errors.residenceCardExpiryDate}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {touched.residenceCardExpiryDate && errors.residenceCardExpiryDate && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.residenceCardExpiryDate}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                        </>
                                    )}
                                    <button type="submit" id="candidateSubmit" style={{ display: 'none', opacity: 0 }} />
                                </Grid>
                            </FormControl>
                        </CardContent>
                    </form>
                )}
            </Formik>
        </Card>
    );
}
