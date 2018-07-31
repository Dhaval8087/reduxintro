import { ADD_ARTICLE, LOAD_ARTICLE } from '../constants/action-types';
const initialState = {
    articles: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case LOAD_ARTICLE:
            return { ...state, articles: [...state.articles, { title: 'on Load', id: '1236546' }] };
        default:
            return state;
    }
}

export default rootReducer;