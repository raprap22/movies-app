export const MOVIES="MOVIES";
export const DETAILMOVIES="DETAILMOVIES";

export function movies(items){
    const action={
        type: MOVIES,
        items,
    };
    return action;
}

export function detailMovies(items){
    const action={
        type: DETAILMOVIES,
        items,
    };
    return action;
}