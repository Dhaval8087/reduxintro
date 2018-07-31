import { ADD_ARTICLE, LOAD_ARTICLE } from '../constants/action-types';
export const addArtical = artical => ({
    type: ADD_ARTICLE,
    payload: artical
});
export const loadArtical = () =>({
        type: LOAD_ARTICLE
    });

