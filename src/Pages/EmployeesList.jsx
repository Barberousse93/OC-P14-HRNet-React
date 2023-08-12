import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../index.js'
import { Typography, Container, TextField, InputAdornment, FormControl } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ClearIcon from '@mui/icons-material/Clear';

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

  const [found, setFound] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setNoResult(false)
    setSearch(e.target.value)
    // if (e.target.value.length > 3) {
    const filtered = rows.filter((obj) => {
      return (
        obj.department.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.firstName.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.lastName.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.street.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.city.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.zipCode.toUpperCase().includes(e.target.value.toUpperCase()) ||
        obj.stateCode.toUpperCase().includes(e.target.value.toUpperCase())
      )
    })
    if (filtered.length > 0) {
      // console.log('filtered YES', filtered)
      setFound(filtered)
    } else {
      // console.log('filtered NO', filtered)
      setNoResult(true)
    }
    // }
  }

  const handleClear = () => {
    console.log('coucou')
    setSearch('')
    setFound([])
    setNoResult(false)
  }
  return (
    <div>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h4" component="h1">
          Current Employees
        </Typography>
        <Link to="/">Home</Link>
        <FormControl style={{ alignSelf: 'end' }}>
          <TextField
            value={search}
            onChange={handleChange}
            size="small"
            // label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ClearIcon onClick ={handleClear} style={{ cursor: 'pointer' }} />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText={noResult ? 'No Result' : null}
          ></TextField>
        </FormControl>
        <DataGrid
          style={{ marginTop: '20px' }}
          rows={found.length === 0 ? rows : found}
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
