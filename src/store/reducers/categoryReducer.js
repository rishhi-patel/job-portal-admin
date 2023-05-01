import {
    CHANGE_CATEGORY_MODAL_STATE,
    CREATE_CATEGORY,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS
} from 'store/constant';

export const initialState = {
    categories: [],
    categoryModalState: false,
    selectedCategory: {},
    loading: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY_MODAL_STATE:
            return { ...state, categoryModalState: action.payload };
        case GET_CATEGORIES:
            return { ...state, loading: true };
        case GET_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload };
        case GET_CATEGORIES_ERROR:
            return { ...state, loading: false };
        case CREATE_CATEGORY:
            return { ...state };
        case CREATE_CATEGORY_ERROR:
            return { ...state };
        case CREATE_CATEGORY_SUCCESS:
            return { ...state, categories: [action.payload, ...state.categories] };
        default:
            return { ...state };
    }
};
export default categoryReducer;
