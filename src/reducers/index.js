import { movies } from "./moviesReducer";
import { detailMovies } from "./detailReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({  
    movies,
    detailMovies
 });
export default rootReducer;