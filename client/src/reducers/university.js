import { GET_UNIVERSITY_NAME, GET_UNIVERSITY_NAME_FAIL } from '../actions/types'

const initialState = {
  loading: true,
  university: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_UNIVERSITY_NAME:
      return { ...payload, loading: false }
    case GET_UNIVERSITY_NAME_FAIL:
      return { ...state, loading: true }
    default:
      return state
  }
}
