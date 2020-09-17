import { combineReducers} from "redux"

const isLoggedIn = (state = false, action) => {
  switch(action.type){
    default : return state
    case "LOG_IN" : 
    let truth = true
    return truth
  }
}

export default combineReducers({isLoggedIn})