import { CREATE_WISHBOARD, DELETE_WISHBOARD, UPDATE_WISHBOARD } from "./boardConstants";

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
