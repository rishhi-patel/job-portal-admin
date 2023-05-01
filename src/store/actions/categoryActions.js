import API from 'API';
import { GET_CATEGORIES, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from 'store/constant';
import Notification from 'utils/Notification';

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
