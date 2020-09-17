import React from "react"
import {Container,Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
      display: "flex",
      flexDirection : "column",
      width: "40%"
  }
})

const Login = ()=>{
  const classes = useStyle()
  return(
    <Container className = {classes.root}>
      <TextField placeholder ="user name"></TextField>
      <TextField placeholder = "password" type = 'password' ></TextField>
      <Button>Log-In</Button>
    </Container>
  )

}

export default Login