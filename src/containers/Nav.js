import {connect} from "react-redux"
import Nav from "../components/Nav"
import {LoggingOut} from "../redux/actions"

const mapStateToProps = (state)=>{
  return {
    loggedIn : state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    LoggingOut : ()=>dispatch(LoggingOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)