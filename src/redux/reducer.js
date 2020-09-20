import { combineReducers} from "redux"


const isLoggedIn = (state = false, action) => {
  switch(action.type){
    default : return state
    case "LOG_IN" : 
    let truth = true
    return truth
    case "LOG_OUT" :
    let falsy = false
    return falsy
  }
}
const businesses = (state = [],action)=>{
  switch(action.type){
    case 'ADD_BUSINESS':
      return [...state,action.value]
    case "REMOVE_BUSINESS":
      let businesses = [...state]
      businesses.splice(action.value,1)
      return businesses
      default: return state
  }
}
 const userName = (state = "")=> state

 const password = (state = '')=> state

export default combineReducers({isLoggedIn, businesses,userName, password})