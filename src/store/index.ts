import { combineReducers } from "redux";
import { userState } from "../types/user";
import userReducer from "./reducers/userReducer";

interface AppState {
    user: userState;
    categories: any;
    records: any;

}
const rootReducer = combineReducers<AppState>({
    user: userReducer,
    categories: () => {},
    records: () => {}


})

export default rootReducer;

