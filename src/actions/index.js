export const MOVIES="MOVIES";

export function movies(items, filter){
    const action={
        type: MOVIES,
        items,
    };
    return action;
}