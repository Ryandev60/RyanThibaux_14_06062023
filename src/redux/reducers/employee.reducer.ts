const initialState = {
    employees:[]
};

interface EmployeeCreateAction  {
    type: "EMPLOYEE_CREATE";
    payload: object;
}

export default function employeeReducer(state = initialState, action: EmployeeCreateAction) {
    switch (action.type) {
        case "EMPLOYEE_CREATE":
            return {
                ...state,
                employees: [...state.employees, action.payload],
            }
        default:
            return state;
    }
}