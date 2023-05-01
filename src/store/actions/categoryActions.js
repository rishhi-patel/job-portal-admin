import API from 'API';
import {
    CHANGE_CATEGORY_MODAL_STATE,
    CREATE_CATEGORY,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS
} from 'store/constant';
import Notification from 'utils/Notification';

export const changeModalState = (status) => async (dispatch) => {
    dispatch({
        type: CHANGE_CATEGORY_MODAL_STATE,
        payload: status
    });
};

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_CATEGORIES
        });
        const { data, status } = await API.get('/category');

        if (status === 200) {
            const { data: categories } = data;
            console.log({ categories });
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: categories
            });
        } else {
            Notification('error');
            dispatch({
                type: GET_CATEGORIES_ERROR
            });
        }
    } catch (error) {
        Notification('error');
        dispatch({
            type: GET_CATEGORIES_ERROR
        });
    }
};

export const createCategory = (details) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', details.name);
        formData.append('image', details.image);
        console.log({ details, formData });
        dispatch({
            type: CREATE_CATEGORY
        });
        const { data, status } = await API.post('/category', formData);

        if (status === 201) {
            const { data: category, message } = data;
            dispatch({
                type: CREATE_CATEGORY_SUCCESS,
                payload: category
            });
            dispatch({
                type: CHANGE_CATEGORY_MODAL_STATE,
                payload: false
            });
            Notification('success', message);
        } else {
            const { message } = data;
            Notification('error', message);
            dispatch({
                type: CREATE_CATEGORY_ERROR
            });
        }
    } catch ({ message }) {
        Notification('error', message);
        dispatch({
            type: CREATE_CATEGORY_ERROR
        });
    }
};
