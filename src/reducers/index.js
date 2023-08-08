import { combineReducers } from 'redux'
import EmployeeReducer from './employee.reducer.js'

export default combineReducers({
  employees: EmployeeReducer
})
