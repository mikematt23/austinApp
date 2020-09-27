import {connect} from "react-redux"
import LoggedInBusiness from "../components/LoggedInBusiness"

const mapStateToProps = (state)=>{
  return {
    businesses : state.businesses,
    userName : state.userName
  }
}

export default connect(mapStateToProps)(LoggedInBusiness)