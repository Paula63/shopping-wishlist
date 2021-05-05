import { SidebarData } from '../components/user-sidebar/SidebarData';
import { CREATE_WISHBOARD, DELETE_WISHBOARD, UPDATE_WISHBOARD } from './boardConstants';

const initialState = {
    wishboards: SidebarData
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
        default:
            return state;
    }
}