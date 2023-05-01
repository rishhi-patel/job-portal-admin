import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_SUCCESS } from 'store/constant';

export const initialState = {
    jobList: [], // for active default menu
    selectedJob: {},
    loading: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return { ...state, loading: true };
        case GET_JOBS_SUCCESS:
            return { ...state, loading: false, jobList: action.payload };
        case GET_JOBS_ERROR:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default jobReducer;
