import API from 'API';
import { ERROR_USER_LOGIN, SUCCESS_USER_LOGIN, USER_LOGIN } from 'store/constant';
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
            navigate('/dashboard/candidates');
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
        Notification('error', error);
    }
};
