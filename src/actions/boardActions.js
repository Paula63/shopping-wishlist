import { fetchSampleData } from "../api/mockAPI";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../store/asyncReducer";
import { CREATE_WISHBOARD, DELETE_WISHBOARD, FETCH_WISHBOARD, UPDATE_WISHBOARD } from "./boardConstants";

export function createWishboard(wishboard) {
    return {
        type: CREATE_WISHBOARD,
        payload: wishboard
    }
}

export function updateWishboard(wishboard) {
    return {
        type: UPDATE_WISHBOARD,
        payload: wishboard
    }
}

export function deleteWishboard(wishboardId) {
    return {
        type: DELETE_WISHBOARD,
        payload: wishboardId
    }
}

export function loadWishboards() {
    return async function(dispatch) {
        dispatch(asyncActionStart())
        try {
            const wishboards = await fetchSampleData();
            dispatch({type: FETCH_WISHBOARD, payload: wishboards});
            dispatch(asyncActionFinish);
        } catch (error) {
            dispatch(asyncActionError(error));
        }
    }
}