import { NEW_EMPLOYEE } from '../actions/employees.action'

const initialState = {
  employees: []
}

export default function EmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      }
    default:
      return state
  }
}
