import API from 'API';
import {
    CHANGE_CATEGORY_MODAL_STATE,
    CHANGE_SELECTED_CATEGORY,
    CREATE_CATEGORY,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_BY_ID,
    DELETE_CATEGORY_BY_ID_ERROR,
    DELETE_CATEGORY_BY_ID_SUCCESS,
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS,
    UPDATE_CATEGORY_BY_ID,
    UPDATE_CATEGORY_BY_ID_ERROR,
    UPDATE_CATEGORY_BY_ID_SUCCESS
} from 'store/constant';
import Notification from 'utils/Notification';

const headers = {
    'Content-Type': 'multipart/form-data'
};

export const changeModalState = (status) => async (dispatch) => {
    if (!status)
        dispatch({
            type: CHANGE_SELECTED_CATEGORY,
            payload: null
        });
    dispatch({
        type: CHANGE_CATEGORY_MODAL_STATE,
        payload: status
    });
};
export const changeCategorySelection = (category) => async (dispatch) => {
    dispatch({
        type: CHANGE_SELECTED_CATEGORY,
        payload: category
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
        dispatch({
            type: CREATE_CATEGORY
        });
        const { data, status } = await API.post('/category', details, {
            headers: headers
        });

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
    } catch (err) {
        Notification('error');
        dispatch({
            type: CREATE_CATEGORY_ERROR
        });
    }
};

export const deleteCategory = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_CATEGORY_BY_ID
        });
        const {
            data: { data, message },
            status
        } = await API.delete(`/category/${_id}`);

        if (status === 200) {
            dispatch({
                type: DELETE_CATEGORY_BY_ID_SUCCESS,
                payload: data
            });
            Notification('success', message);
        } else {
            dispatch({
                type: DELETE_CATEGORY_BY_ID_ERROR
            });
            Notification('error', message);
        }
    } catch (err) {
        dispatch({
            type: DELETE_CATEGORY_BY_ID_ERROR
        });
        Notification('error');
    }
};

export const updateCategory = (formData, _id) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_CATEGORY_BY_ID
        });
        const {
            data: { data, message },
            status
        } = await API.put(`/category/${_id}`, formData, {
            headers: headers
        });

        if (status === 200) {
            dispatch({
                type: UPDATE_CATEGORY_BY_ID_SUCCESS,
                payload: data
            });
            dispatch({
                type: CHANGE_CATEGORY_MODAL_STATE,
                payload: false
            });
            Notification('success', message);
        } else {
            Notification('error', message);
            dispatch({
                type: UPDATE_CATEGORY_BY_ID_ERROR
            });
        }
    } catch (err) {
        console.log({ err });
        Notification('error');
        dispatch({
            type: UPDATE_CATEGORY_BY_ID_ERROR
        });
    }
};
