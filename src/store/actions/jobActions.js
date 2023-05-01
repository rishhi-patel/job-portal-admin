import API from 'API';
import {} from 'store/constant';
import {
    GET_JOBS,
    GET_JOBS_ERROR,
    GET_JOBS_SUCCESS,
    GET_JOB_BY_ID,
    GET_JOB_BY_ID_ERROR,
    GET_JOB_BY_ID_SUCCESS,
    UPDATE_JOB,
    UPDATE_JOB_ERROR,
    UPDATE_JOB_SUCCESS
} from 'store/constant';
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

export const getJobById = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_JOB_BY_ID
        });
        const {
            data: { data, message },
            status
        } = await API.get(`/job/${_id}`);

        if (status === 200) {
            dispatch({
                type: GET_JOB_BY_ID_SUCCESS,
                payload: data
            });
        } else {
            Notification('error', message);
            dispatch({
                type: GET_JOB_BY_ID_ERROR
            });
        }
    } catch (error) {
        Notification('error');
        dispatch({
            type: GET_JOB_BY_ID_ERROR
        });
    }
};

export const updateJobById = (jobDetails, navigate) => async (dispatch) => {
    const { _id } = jobDetails;
    try {
        dispatch({
            type: UPDATE_JOB
        });
        const {
            data: { data, message },
            status
        } = await API.put(`/job/${_id}`, jobDetails);

        if (status === 200) {
            dispatch({
                type: UPDATE_JOB_SUCCESS,
                payload: data
            });
            Notification('success', message);
            navigate('/dashboard/jobs');
        } else {
            Notification('error', message);
            dispatch({
                type: UPDATE_JOB_ERROR
            });
        }
    } catch ({ message }) {
        Notification('error', message);
        dispatch({
            type: UPDATE_JOB_ERROR
        });
    }
};
