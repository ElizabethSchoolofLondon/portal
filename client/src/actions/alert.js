import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, alertType, id) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  })

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000)
}
