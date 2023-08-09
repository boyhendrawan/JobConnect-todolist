import { combineReducers } from "redux";
import Auth from "./Auth";
import todolist from "./todolist";
export default combineReducers({
    Auth,
    todolist
})