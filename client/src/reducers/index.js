import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import university from './university'

export default combineReducers({ alert, auth, university })
