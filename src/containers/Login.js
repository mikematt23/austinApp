import {connect} from "react-redux"
import Login from '../components/login'
import {LoggingIn} from "../redux/actions"


const mapStateToProps = (state)=>{
  return {
    loggedIn : state.isLoggedIn,
    userName : state.userName,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    loggingIn : ()=>dispatch(LoggingIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)