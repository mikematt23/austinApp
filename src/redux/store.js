import { createStore } from 'redux'
import reducers from './reducer'
import state from './state'

export default createStore(reducers, state)