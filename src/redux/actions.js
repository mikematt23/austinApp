export const LoggingIn = ()=>{
  return {
    type : "LOG_IN",
    value : true
  }
}

export const LoggingOut =()=>{
  return {
    type : "LOG_OUT",
    value : false
  }
}

export const addBusiness= (business)=>{
   return {
     type: "ADD_BUSINESS",
     value : business
   }
}

export const removeBusiness = (index)=>{
  return{
    type: 'REMOVE_BUSINESS',
    value : index
  }
}