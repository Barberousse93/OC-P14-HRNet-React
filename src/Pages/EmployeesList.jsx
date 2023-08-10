import React from 'react'
import { Link } from 'react-router-dom'
import { store } from '../index.js'
import { Typography, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    editable: false
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 100,
    editable: false
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 150,
    editable: false
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    width: 100,
    editable: false
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 150,
    editable: false
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: false
  },
  {
    field: 'stateCode',
    headerName: 'State',
    width: 50,
    editable: false
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    width: 100,
    editable: false
  }
]

function EmployeesList() {
  const employeesList = store.getState()

  const rows = employeesList.employees.employees

  return (
    <div>
      <Container>
        <Typography variant="h4" component="h1">
          Current Employees
        </Typography>
        <Link to="/">Home</Link>
        <DataGrid
          style={{ marginTop: '20px' }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5, 10, 50, 100]}
          disableRowSelectionOnClick
        />
      </Container>
    </div>
  )
}

export default EmployeesList
