import './current-employees.scss'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

/**
 * CurrentEmployees component.
 *
 * This component displays a table of current employees.
 *
 * @component
 * @returns {JSX.Element} The rendered CurrentEmployees component.
 *
 * @example
 * // Example usage of CurrentEmployees component
 * <CurrentEmployees />
 *
 * @description
 * The `CurrentEmployees` component renders a table that shows information about current employees. It uses the `DataGrid` component from the `@mui/x-data-grid` package to display the data in a tabular format.
 *
 * The table columns are defined using the `columns` array, which specifies the field names and header labels for each column.
 *
 * The data for the table is obtained from the Redux store using the `useSelector` hook from the `react-redux` package. The `employeesStore` variable holds the array of employee objects.
 *
 * The component also includes a heading displaying "Current Employees" and a navigation link to the home page.
 *
 * @see {@link https://mui.com/components/data-grid/ DataGrid component documentation}
 */
const CurrentEmployees = () => {
    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First name', width: 100},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {field: 'startDate', headerName: 'Start Date', width: 100},
        {field: 'department', headerName: 'Department', width: 100},
        {field: 'dateOfBirth', headerName: 'DateOfBirth', width: 130},
        {field: 'street', headerName: 'Street', width: 130},
        {field: 'city', headerName: 'City', width: 130},
        {field: 'state', headerName: 'State', width: 80},
        {field: 'zipCode', headerName: 'ZipCode', width: 130},
    ];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const employeesStore = useSelector(state => state.employeeReducer.employees) ?? null
    return (
        <main className={"current-employee"}>
            <h1>Current Employees</h1>
            <div style={{ width: '100%', maxWidth: "1090px"}}>
                <DataGrid
                    rows={employeesStore}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 5},
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </div>
            <NavLink to={"/"} className={"link-home"}>Home</NavLink>
        </main>
    );
};

export default CurrentEmployees;
