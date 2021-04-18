import { GET_UNIVERSITY_LIST, GET_UNIVERSITY_LIST_FAIL } from '../actions/types'

const initialState = {
  loading: true,
  university: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_UNIVERSITY_LIST:
      return { ...state, ...payload, loading: false }
    case GET_UNIVERSITY_LIST_FAIL:
      return { ...state, loading: true }
    default:
      return state
  }
}
