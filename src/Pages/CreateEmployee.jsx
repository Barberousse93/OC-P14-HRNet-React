import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Typography,
  Container,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText
} from '@mui/material'
import statesList from '../datas/states.json'
import dptList from '../datas/departments.json'

function CreateEmployee() {
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [dateOfBirthError, setDateOfBirthError] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [startDateError, setStartDateError] = useState(false)
  const [street, setStreet] = useState('')
  const [streetError, setStreetError] = useState(false)
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(false)
  const [stateName, setStateName] = useState('')
  const [stateNameError, setStateNameError] = useState(false)
  const [zipCode, setZipCode] = useState('')
  const [zipCodeError, setZipCodeError] = useState(false)
  const [department, setDepartment] = useState('')
  const [departmentError, setDepartmentError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let isError = false

    if (!firstName) {
      setFirstNameError(true)
      isError = true
    }
    if (!lastName) {
      setLastNameError(true)
      isError = true
    }
    if (!dateOfBirth) {
      setDateOfBirthError(true)

      isError = true
    }
    if (!startDate) {
      setStartDateError(true)
      isError = true
    }
    if (!street) {
      setStreetError(true)
      isError = true
    }
    if (!city) {
      setCityError(true)
      isError = true
    }
    if (!stateName) {
      setStateNameError(true)
      isError = true
    }
    if (!zipCode) {
      setZipCodeError(true)
      isError = true
    }
    if (!department) {
      setDepartmentError(true)
      isError = true
    }
    if (!isError) {
      const newEmployee = {
        firstName, lastName, dateOfBirth, startDate, street, city, stateName, zipCode, department
      }
      console.log(newEmployee)
    }
  }

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Create Employee
      </Typography>

      <Link to="/employeeslist">View Current Employees</Link>
      <br />
      <FormControl
        fullWidth
        style={{ translate: '50%', width: '50%', margin: 'auto' }}
        // className={classes.FormcontrolStyle}
      >
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              setFirstNameError(false)
            }}
            style={{ marginTop: '20px' }}
            type="text"
            variant="outlined"
            label="First Name"
            required
            error={firstNameError}
            helperText={firstNameError ? 'Invalid Entry' : null}
          ></TextField>
          <br />
          <TextField
            fullWidth
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
              setLastNameError(false)
            }}
            style={{ marginTop: '20px' }}
            type="text"
            variant="outlined"
            label="Last Name"
            required
            error={lastNameError}
            helperText={lastNameError ? 'Invalid Entry' : null}
          ></TextField>
          <br />
          <TextField
            fullWidth
            id="dateOfBirth"
            value={dateOfBirth}
            type="date"
            style={{ marginTop: '20px' }}
            label="Date of Birth"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setDateOfBirth(e.target.value)
              setDateOfBirthError(false)
            }}
            error={dateOfBirthError}
            helperText={dateOfBirthError ? 'Invalid Entry' : null}
            required
          ></TextField>
          <br />
          <TextField
            fullWidth
            id="startDate"
            value={startDate}
            type="date"
            style={{ marginTop: '20px' }}
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setStartDate(e.target.value)
              setStartDateError(false)
            }}
            error={startDateError}
            helperText={startDateError ? 'Invalid Entry' : null}
            required
          ></TextField>
          <br />

          <FormControl
            fullWidth
            style={{
              border: '1px solid gray',
              borderRadius: '5px',
              marginTop: '20px',
              padding: '0 10px',
              paddingBottom: '10px',
              marginBottom: '20px'
            }}
          >
            <FormLabel>Address</FormLabel>
            <TextField
              fullWidth
              id="street"
              value={street}
              type="text"
              style={{ marginTop: '20px' }}
              label="Street"
              required
              onChange={(e) => {
                setStreet(e.target.value)
                setStreetError(false)
              }}
              error={streetError}
              helperText={streetError ? 'Invalid Entry' : null}
            ></TextField>
            {/* <br /> */}
            <TextField
              fullWidth
              id="city"
              value={city}
              type="text"
              style={{ marginTop: '20px' }}
              label="City"
              required
              onChange={(e) => {
                setCity(e.target.value)
                setCityError(false)
              }}
              error={cityError}
              helperText={cityError ? 'Invalid Entry' : null}
            ></TextField>
            <br />
            <FormControl
              required
              fullWidth
              // FormHelperText={stateNameError ? 'Invalid Entry' : null}
              // InputLabel='State'
            >
              <InputLabel>State</InputLabel>
              <Select
                id="stateName"
                value={stateName}
                label="State"
                onChange={(e) => {
                  setStateName(e.target.value)
                  setStateNameError(false)
                }}
                error={stateNameError}
              >
                {statesList.states.map((item) => (
                  <MenuItem key={item.abbreviation} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {stateNameError ? 'Invalid Entry' : null}
              </FormHelperText>
            </FormControl>
            <TextField
              fullWidth
              id="zipCode"
              value={zipCode}
              type="number"
              style={{ marginTop: '20px' }}
              label="Zip Code"
              required
              onChange={(e) => {
                setZipCode(e.target.value)
                setZipCodeError(false)
              }}
              error={zipCodeError}
              helperText={zipCodeError ? 'Invalid Entry' : null}
            ></TextField>
          </FormControl>
          <FormControl
            required
            fullWidth
          >
            <InputLabel>Department</InputLabel>
            <Select
              id="department"
              value={department}
              label="Department"
              onChange={(e) => {
                setDepartment(e.target.value)
                setDepartmentError(false)
              }}
              error={departmentError}
            >
              {dptList.departments.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {departmentError ? 'Invalid Entry' : null}
            </FormHelperText>
          </FormControl>
          <br />
          <Button
            id="submitButton"
            type="submit"
            variant="contained"
            style={{ marginTop: '20px' }}
          >
            Save
          </Button>
        </form>
      </FormControl>
    </Container>
  )
}

export default CreateEmployee
