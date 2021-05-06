import { CREATE_WISHBOARD, DELETE_WISHBOARD, FETCH_WISHBOARD, UPDATE_WISHBOARD } from './boardConstants';

const initialState = {
    wishboards: [],
}

export default function wishboardReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_WISHBOARD:
            return{
                ...state,
                wishboards: [...state.wishboards, payload]
            };
        case UPDATE_WISHBOARD:
            return{
                ...state,
                wishboards: [...state.wishboards.filter(board => board.id !== payload.id), payload]
            };
        case DELETE_WISHBOARD:
            return{
                ...state,
                wishboards: [...state.wishboards.filter(board => board.id !== payload)]
            }
        case FETCH_WISHBOARD:
            return{
                ...state,
                wishboards: payload
            }
        default:
            return state;
    }
}