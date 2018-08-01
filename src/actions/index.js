import { ADD_ARTICLE, LOAD_ARTICLE, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../constants/action-types';
export const addArtical = artical => ({
    type: ADD_ARTICLE,
    payload: artical
});
export const loadArtical = () => ({
    type: LOAD_ARTICLE
});

export const itemsIsLoading = bool => ({

    type: ITEMS_IS_LOADING,
    isLoading: bool

})
export const itemsFetchDataSuccess = items => ({
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
})

export const itemsFetchData = url => {
   
    return (dispatch) => {
     
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)));
    }
}