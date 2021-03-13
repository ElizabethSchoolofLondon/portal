import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types'

// Register User
export const register = ({ name, surname, email, password, branch }) => async (
  dispatch
) => {
  const formUrl = email.split('@')[0]
  const config = {
    headers: {
      contentType: 'application/json',
    },
  }

  const body = JSON.stringify({
    name,
    surname,
    email,
    password,
    formUrl,
    branch,
  })
}
// formUrl
// employed
// created
// university
