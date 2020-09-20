import React, {useState} from 'react'
import {
    Button,
    TextField,
    Container
} from '@material-ui/core'
import {Link} from 'react-router-dom'


const AddBusiness = (props)=>{
    console.log(props)
    const [name,setName] = useState('')
    const [hours,setHours] = useState('')
    const [address,setAddress] = useState('')
    const [description,setDescription] = useState('')


    const nameChange= (event)=>{
        event.preventDefault()
        setName(event.target.value)
    }
    const hourChange = (event)=>{
        event.preventDefault()
        setHours(event.target.value)
    }
    const addressChange = (event)=>{
        event.preventDefault()
        setAddress(event.target.value)
    }
    const descriptionChange = (event)=>{
        event.preventDefault()
        setDescription(event.target.value)
    }
    const handleSumbit =(event)=>{
        event.preventDefault()
        let business = {
            id: props.businesses.length + 1,
            name : name,
            hour: hours,
            address: address,
            description : description
        }
        console.log(business)
        props.addBusiness(business)
        
    }
    console.log(name,hours,address,description)
    console.log(props.businesses)
    return(
        <Container>
          <div>
           <h6>Logged In, Hello {props.userName}</h6>
          </div>
           <Container>
               <TextField placeholder ="Name" onChange={nameChange}></TextField>
               <TextField placeholder ="Hours" onChange = {hourChange}></TextField>
               <TextField placeholder ='Address' onChange = {addressChange}></TextField>
               <TextField placeholder ="Description" onChange = {descriptionChange}></TextField>
               <Button onClick ={handleSumbit}><Link to = "/areLoggedIn">Submit</Link></Button>
           </Container>
        </Container>
    )
}

export default AddBusiness