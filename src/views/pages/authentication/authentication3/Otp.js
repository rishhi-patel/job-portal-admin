import { useState } from 'react';
import { connect } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { useNavigate } from 'react-router';
import AuthWrapper1 from '../AuthWrapper1';
import { Link } from 'react-router-dom';
import Logo from 'ui-component/Logo';
import AuthCardWrapper from '../AuthCardWrapper';
import { generateOTP, verifyOTP } from 'store/actions/userActions';

const Otp = ({ sendOtp, verifyUserOtp, ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [otpSent, setOtpSent] = useState(false);
    return (
        <>
            <AuthWrapper1>
                <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <AuthCardWrapper>
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        <Grid item>
                                            <Link to="#">
                                                <Logo />
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction="column" justifyContent="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Box
                                                        sx={{
                                                            alignItems: 'center',
                                                            display: 'flex'
                                                        }}
                                                    ></Box>
                                                </Grid>
                                                <Grid item xs={12} container alignItems="center" justifyContent="center">
                                                    <Box sx={{ mb: 2 }}>
                                                        <Typography variant="subtitle1">Enter your Email Address</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            <Formik
                                                initialValues={{
                                                    email: '',
                                                    otp: ''
                                                }}
                                                validationSchema={Yup.object().shape({
                                                    email: Yup.string()
                                                        .email('Must be a valid email')
                                                        .max(255)
                                                        .required('Email is required')
                                                })}
                                                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                                    try {
                                                        if (otpSent) {
                                                            console.log('Verify');
                                                            verifyUserOtp({ email: values.email, otp: Number(values.otp) }, navigate);
                                                        } else {
                                                            setOtpSent(true);
                                                            sendOtp(values.email);
                                                        }
                                                    } catch (err) {
                                                        setStatus({ success: false });
                                                        setErrors({ submit: err.message });
                                                        setSubmitting(false);
                                                    }
                                                }}
                                            >
                                                {({ errors, handleBlur, handleSubmit, handleChange, isSubmitting, touched, values }) => (
                                                    <form noValidate onSubmit={handleSubmit} {...others}>
                                                        <FormControl
                                                            fullWidth
                                                            error={Boolean(touched.email && errors.email)}
                                                            sx={{ ...theme.typography.customInput }}
                                                        >
                                                            <InputLabel htmlFor="outlined-adornment-email-login">
                                                                Email Address / Username
                                                            </InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-email-login"
                                                                type="email"
                                                                value={values.email}
                                                                name="email"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                label="Email Address / Username"
                                                                inputProps={{}}
                                                            />
                                                            {touched.email && errors.email && (
                                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                                    {errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>

                                                        {otpSent && (
                                                            <>
                                                                <Stack
                                                                    direction="row"
                                                                    alignItems="center"
                                                                    justifyContent="flex-end"
                                                                    spacing={1}
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        color="secondary"
                                                                        sx={{ textDecoration: 'none', cursor: 'pointer' }}
                                                                        onClick={() => sendOtp(values.email)}
                                                                    >
                                                                        Resent Otp
                                                                    </Typography>
                                                                </Stack>
                                                                <FormControl
                                                                    fullWidth
                                                                    error={Boolean(touched.email && errors.email)}
                                                                    sx={{ ...theme.typography.customInput }}
                                                                >
                                                                    <InputLabel htmlFor="outlined-adornment-email-login">OTP</InputLabel>
                                                                    <OutlinedInput
                                                                        id="outlined-adornment-email-login"
                                                                        value={values.otp}
                                                                        name="otp"
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        label="OTP"
                                                                        inputProps={{}}
                                                                        error={touched.otp && errors.otp}
                                                                    />
                                                                    {touched.otp && errors.otp && (
                                                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                                                            {errors.otp}
                                                                        </FormHelperText>
                                                                    )}
                                                                </FormControl>
                                                            </>
                                                        )}

                                                        {errors.submit && (
                                                            <Box sx={{ mt: 3 }}>
                                                                <FormHelperText error>{errors.submit}</FormHelperText>
                                                            </Box>
                                                        )}

                                                        <Box sx={{ mt: 2 }}>
                                                            <AnimateButton>
                                                                <Button
                                                                    disableElevation
                                                                    disabled={isSubmitting}
                                                                    fullWidth
                                                                    size="large"
                                                                    type="submit"
                                                                    variant="contained"
                                                                    color="secondary"
                                                                >
                                                                    {otpSent ? 'Verify' : 'Send Otp'}
                                                                </Button>
                                                            </AnimateButton>
                                                        </Box>
                                                    </form>
                                                )}
                                            </Formik>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                    </Grid>
                                </AuthCardWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AuthWrapper1>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log({ state });
};
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (email) => dispatch(generateOTP(email)),
    verifyUserOtp: (data, navigate) => dispatch(verifyOTP(data, navigate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
