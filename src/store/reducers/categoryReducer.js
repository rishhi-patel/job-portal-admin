import { GET_CATEGORIES, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from 'store/constant';

export const initialState = {
    categories: [],
    selectedCategory: {},
    loading: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, loading: true };
        case GET_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload };
        case GET_CATEGORIES_ERROR:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
};
export default categoryReducer;
