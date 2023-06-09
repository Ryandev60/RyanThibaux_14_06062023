import {combineReducers} from "redux";
import employeeReducer from "./employee.reducer.ts";

const rootReducer = combineReducers({
    employeeReducer
})

export default rootReducer;