import { combineReducers} from "redux"


const isLoggedIn = (state = false, action) => {
  switch(action.type){
    default : return state
    case "LOG_IN" : 
    let truth = true
    return truth
  }
}
const businesses = (state = [],action)=>{
  switch(action.type){
    default: return state
  }
}
 const userName = (state = "")=> state

 const password = (state = '')=> state

export default combineReducers({isLoggedIn, businesses,userName, password})