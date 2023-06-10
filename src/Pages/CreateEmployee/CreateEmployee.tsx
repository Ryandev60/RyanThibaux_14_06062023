import './create-employee.scss'
import {NavLink} from "react-router-dom";
import {Box, MenuItem, TextField } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {FormEvent, useRef, useState} from "react";
import states from "./data/states.json"
import departments from "./data/departments.json"
import {useDispatch, useSelector} from "react-redux";
import {employeeCreate} from "../../redux/actions/employee.action.ts";
import {Modal} from "oc-modal-p14/src/Modal/Modal.tsx";

/**
 * CreateEmployee component.
 *
 * This component allows users to create a new employee by filling out a form.
 *
 * @component
 * @returns {JSX.Element} The rendered CreateEmployee component.
 *
 * @example
 * // Example usage of CreateEmployee component
 * <CreateEmployee />
 *
 * @description
 * The `CreateEmployee` component renders a form that allows users to enter information about a new employee. The form includes input fields for the employee's first name, last name, date of birth, start date, street, city, state, zip code, and department. It also includes a submit button to save the employee data.
 *
 * The component uses several Material-UI (Mui) components, including:
 * - `TextField` for input fields
 * - `Box` for form layout
 * - `DatePicker` from `@mui/x-date-pickers/DatePicker` for date input fields
 * - `MenuItem` for options in select fields
 * - `LocalizationProvider` from `@mui/x-date-pickers` for date localization
 * - `Modal` component from a custom module for displaying success/error messages
 *
 * The form data is submitted using the `submitForm` function, which validates the input fields and dispatches a Redux action to create the employee.
 *
 * @see {@link https://mui.com/components/text-fields/ TextField component documentation}
 * @see {@link https://mui.com/system/box/ Box component documentation}
 * @see {@link https://mui.com/components/date-picker/ DatePicker component documentation}
 * @see {@link https://mui.com/components/menu/ MenuItem component documentation}
 * @see {@link https://mui.com/x/api/date-pickers/localization-provider/ LocalizationProvider component documentation}
 */
const CreateEmployee = () => {
    // Redux
    const employeesStore = useSelector(state => state.employeeReducer.employees) ?? null
    const dispatch: any = useDispatch()
    // States
    const [showModal, setShowModal] = useState<boolean>(false);
    const [textModal, setTextModal] = useState<string>("");
    const [errorModal, setErrorModal] = useState<boolean>();
    // Refs
    const firstNameIpt = useRef<HTMLInputElement>(null)
    const lastNameIpt = useRef<HTMLInputElement>(null)
    const dateOfBirthIpt = useRef<HTMLInputElement>(null)
    const startDateIpt = useRef<HTMLInputElement>(null)
    const streetIpt = useRef<HTMLInputElement>(null)
    const cityIpt = useRef<HTMLInputElement>(null)
    const stateIpt = useRef<HTMLInputElement>(null)
    const zipCodeIpt = useRef<HTMLInputElement>(null)
    const departmentIpt = useRef<HTMLInputElement>(null)
    const form = useRef<HTMLFormElement>(null)
    // Data
    const listStates = states
    const departmentsList = departments
    // Functions
    const submitForm = (e: FormEvent) => {
        console.log("submit")
        e.preventDefault()
        const employee: Employee = {
            id: employeesStore.length + 1,
            firstName: firstNameIpt.current?.value || "",
            lastName: lastNameIpt.current?.value || "",
            dateOfBirth: dateOfBirthIpt.current?.value || "",
            startDate: startDateIpt.current?.value || "",
            street: streetIpt.current?.value || "",
            city: cityIpt.current?.value || "",
            state: stateIpt.current?.value || "",
            zipCode: zipCodeIpt.current?.value || "",
            department: departmentIpt.current?.value || ""
        }

        const requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'startDate', 'street', 'city', 'state', 'zipCode', 'department'];

        const fieldsWithErrors = requiredFields.filter(field => !employee[field]);
        if (fieldsWithErrors.length === 0) {
            dispatch(employeeCreate(employee));
            setErrorModal(false)
            setTextModal("Employee created successfully ! 😀")
            setShowModal(!showModal)
            form.current?.reset()
        } else {
            setErrorModal(true)
            setTextModal("Please fill all fields ! ⛔️")
            setShowModal(!showModal)
        }
    }
    // Render
    return (
        <>
            <main className={"create-employee"}>
                <h1>HRnet</h1>
                <NavLink to={"/current"} className={"link-current"}>View current employee</NavLink>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => submitForm(e)}
                        ref={form}

                >
                    <div className={"form-block"}>
                        <TextField label="First Name" inputRef={firstNameIpt}/>
                        <TextField label="Last Name" inputRef={lastNameIpt}/>
                    </div>
                    <div className={"form-block"}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date of Birth" inputRef={dateOfBirthIpt}/>
                            <DatePicker label="Start Date" inputRef={startDateIpt}/>
                        </LocalizationProvider>
                    </div>
                    <div className={"form-block"}>
                        <TextField label="Street" inputRef={streetIpt}/>
                        <TextField label="City" inputRef={cityIpt}/>
                    </div>
                    <div className={"form-block"}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="State"
                            inputRef={stateIpt}
                        >
                            {listStates.map((option, key) => (
                                <MenuItem key={key} value={option.abbreviation}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Zip code" inputRef={zipCodeIpt}
                                   inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
                    </div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Department"
                        inputRef={departmentIpt}
                    >
                        {departmentsList.map((option, key) => (
                            <MenuItem key={key} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <button type="submit" className={"btn-create-employee"}>Save</button>
                </Box>
            </main>
           <Modal text={textModal} showModal={showModal} error={errorModal}/>
        </>
    );
};

interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

export default CreateEmployee;
