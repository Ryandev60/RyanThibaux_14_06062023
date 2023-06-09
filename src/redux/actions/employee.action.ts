import { Dispatch } from "redux";
import { AnyAction } from "redux";

export const EMPLOYEE_CREATE = "EMPLOYEE_CREATE";

export const employeeCreate = (data: object) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch({ type: EMPLOYEE_CREATE, payload: data });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
};