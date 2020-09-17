import React, {useState} from "react"
import {Container,Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyle = makeStyles({
  root: {
      display: "flex",
      flexDirection : "column",
      width: "40%"
  }
})



const Login = (props)=>{
  const [userName, setName] = useState('')
  const [userPassword, setPassword] = useState('')
  const [message,setMessage] = useState('')

  const userNameChange = (event)=>{
    setName(event.target.value)
  }
  const passwordChange = (event)=>{
    setPassword(event.target.value)
  }

  const handleLogIn = (event)=>{
    
    console.log(userName,userPassword)
    if(userName === props.userName && userPassword === props.password){
      event.preventDefault()
      document.cookie = "loggedIn=true;max-age=10*1000"
      props.loggingIn()
    }else{
      setMessage("Invalid Password or UserName")
    }
  }
  const classes = useStyle()
  return(
    <Container className = {classes.root}>
      <h1>{message}</h1>
      <TextField onChange ={userNameChange} placeholder ="user name"></TextField>
      <TextField onChange = {passwordChange} placeholder = "password" type = 'password' ></TextField>
      
        <Button onClick ={handleLogIn}><Link to ="/areLoggedIn">Log-In</Link></Button>
      
      
    </Container>
  )

}

export default Login