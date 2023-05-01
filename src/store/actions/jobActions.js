import API from 'API';
import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_SUCCESS } from 'store/constant';
import Notification from 'utils/Notification';

export const getJobs = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_JOBS
        });
        const {
            data: { data, message },
            status
        } = await API.get('/job');

        if (status === 200) {
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: data
            });
        } else {
            Notification('error', message);
            dispatch({
                type: GET_JOBS_ERROR
            });
        }
    } catch (error) {
        Notification('error');
        dispatch({
            type: GET_JOBS_ERROR
        });
    }
};
