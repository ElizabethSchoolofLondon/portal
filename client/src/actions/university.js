import axios from 'axios'
import { GET_UNIVERSITY_NAME, GET_UNIVERSITY_NAME_FAIL } from '../actions/types'
import { setAlert } from './alert'

//region get university name
export const getUniversityName = (universityName) => async (dispatch) => {
  try {
    const res = await axios.get('api/university', { universityName })
    dispatch({ type: GET_UNIVERSITY_NAME, payload: res.data })
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'noUniFound')))
      }
    }
    dispatch({ type: GET_UNIVERSITY_NAME_FAIL })
  }
}
