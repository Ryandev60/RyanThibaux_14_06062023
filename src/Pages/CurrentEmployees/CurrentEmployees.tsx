import './current-employees.scss'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


const CurrentEmployees = () => {
    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First name', width: 130},
        {field: 'lastName', headerName: 'Last Name', width: 130},
        {field: 'startDate', headerName: 'Start Date', width: 130},
        {field: 'department', headerName: 'Department', width: 130},
        {field: 'dateOfBirth', headerName: 'DateOfBirth', width: 130},
        {field: 'street', headerName: 'Street', width: 130},
        {field: 'city', headerName: 'City', width: 130},
        {field: 'state', headerName: 'State', width: 130},
        {field: 'zipCode', headerName: 'ZipCode', width: 130},
    ];

    const employeesStore = useSelector(state => state.employeeReducer.employees) ?? null
    return (
        <>
            <div style={{height: 400, width: '100%'}}>
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
            <NavLink to={"/"}>Home</NavLink>
        </>
    );
};

export default CurrentEmployees;
