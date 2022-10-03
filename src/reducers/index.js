import { movies } from "./moviesReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({  movies });
export default rootReducer;