export const NEW_EMPLOYEE = 'NEW_EMPLOYEE'

export const addNewEmployee = (employee) => {
  return (dispatch) => {
    dispatch({ type: NEW_EMPLOYEE, payload: employee })
  }
}
