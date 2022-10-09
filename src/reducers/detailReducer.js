import { DETAILMOVIES } from "../actions";

export function detailMovies(state = [], action) {
    switch (action.type) {
        case DETAILMOVIES:
            console.log("DETAILMOVIES is called ", action.items);
            return action.items
        default:
            return state;
    }
}