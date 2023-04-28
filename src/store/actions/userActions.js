import API from 'API';
import { ERROR_USER_DETAILS, ERROR_USER_LOGIN, SUCCESS_USER_DETAILS, SUCCESS_USER_LOGIN, USER_DETAILS, USER_LOGIN } from 'store/constant';
import Notification from 'utils/Notification';

export const authUser = (value, navigate) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN
        });
        const { data, status } = await API.post('/user/admin/login', {
            ...value
        });
        if (status === 200) {
            const {
                data: { token, user },
                message
            } = data;
            dispatch({
                type: SUCCESS_USER_LOGIN,
                payload: user
            });
            localStorage.setItem('auth_token', token);
            Notification('success', message);
            window.location.href = '/dashboard/candidates';
        } else {
            dispatch({
                type: ERROR_USER_LOGIN
            });
            Notification('error', data.message);
        }
    } catch (error) {
        dispatch({
            type: ERROR_USER_LOGIN
        });
    }
};

export const getUserDetails = (navigate) => async (dispatch) => {
    try {
        dispatch({
            type: USER_DETAILS
        });
        const { data, status } = await API.get('/user/profile');
        console.log({ data });
        if (status === 400) {
            Notification('error', data.message);
            return navigate('/');
        }
        if (status === 200) {
            const { data: userDetails, message } = data;
            dispatch({
                type: SUCCESS_USER_DETAILS,
                payload: userDetails
            });
        }
    } catch (error) {
        dispatch({
            type: ERROR_USER_DETAILS
        });
    }
};
