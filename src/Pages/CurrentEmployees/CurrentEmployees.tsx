import './current-employees.scss'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


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

    const employeesStore = useSelector(state => state.employeeReducer.employees) ?? null
    return (
        <main className={"current-employee"}>
            <h1>Current Employees</h1>
            <div style={{height: 400, width: '100%', maxWidth: "1090px"}}>
                <DataGrid
                    rows={employeesStore}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 5},
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <NavLink to={"/"} className={"link-home"}>Home</NavLink>
        </main>
    );
};

export default CurrentEmployees;
