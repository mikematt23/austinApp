import {connect} from "react-redux"
import Nav from "../components/Nav"

const mapStateToProps = (state)=>{
  return {
    loggedIn : state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Nav)