import { MOVIES } from '../actions';
import swal from 'sweetalert';

export function movies(state = [], action) {
    switch (action.type) {
        case MOVIES:
            console.log("MOVIES is called ", action.items);
            if (action.items < 1) {
                swal("Kesalahan!", "Kata kunci tidak ditemukan!", "warning");
            }
            return action.items
        default:
            return state;
    }
}

