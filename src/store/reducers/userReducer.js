import { ERROR_USER_DETAILS, ERROR_USER_LOGIN, SUCCESS_USER_DETAILS, SUCCESS_USER_LOGIN, USER_DETAILS, USER_LOGIN } from 'store/constant';

export const initialState = {
    userDetails: {},
    loading: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, loading: true };
        case SUCCESS_USER_LOGIN:
            return { ...state, userDetails: action.payload, loading: false };
        case ERROR_USER_LOGIN:
            return { ...state, loading: false };
        case USER_DETAILS:
            return { ...state, loading: true };
        case SUCCESS_USER_DETAILS:
            return { ...state, userDetails: action.payload, loading: false };
        case ERROR_USER_DETAILS:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
};

export default userReducer;