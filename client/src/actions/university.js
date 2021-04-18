import axios from 'axios'
import { GET_UNIVERSITY_LIST, GET_UNIVERSITY_LIST_FAIL } from './types'
import { setAlert } from './alert'

//region get non-archived universities
export const getNonArchivedUniversities = () => async (dispatch) => {
  try {
    const res = await axios.get('api/university')
    console.log(res.data)
    dispatch({ type: GET_UNIVERSITY_LIST, payload: res.data })
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'noUniFound')))
      }
    }
    dispatch({ type: GET_UNIVERSITY_LIST_FAIL })
  }
}
