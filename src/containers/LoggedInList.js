import {connect} from "react-redux"
import LoggedInList from "../components/LoggInList"


const mapStateToProps = (state)=>{
  return {
    businesses : state.businesses,
    userName : state.userName
  }
}


export default connect(mapStateToProps)(LoggedInList)