import { ADD_ARTICLE, LOAD_ARTICLE, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../constants/action-types';
const initialState = [];
const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case LOAD_ARTICLE:
            return { ...state, articles: [...state.articles, { title: 'on Load', id: '1236546' }] };
        case ITEMS_IS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case ITEMS_FETCH_DATA_SUCCESS:
            return { ...state, items: action.items };
        default:
            return state;
    }
}
export default indexReducer;