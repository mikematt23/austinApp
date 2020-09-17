import React, {useState} from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Container
} from '@material-ui/core'


const AddBusiness = (props)=>{
    console.log(props)
    const [name,setName] = useState('')
    const [hours,setHours] = useState('')
    const [address,setAddress] = useState('')
    const [description,setDescription] = useState('')


    const nameChange= (event)=>{
        setName(event.target.value)
    }
    const hourChange = (event)=>{
        setHours(event.target.value)
    }
    const addressChange = (event)=>{
        setAddress(event.target.value)
    }
    const descriptionChange = (event)=>{
        setDescription(event.target.value)
    }
    const handleSumbit =()=>{

        let business = {
            id: props.businesses.length + 1,
            name : name,
            hour: hours,
            address: address,
            description : description
        }
        console.log(business)
        props.addBusiness(business)
        console.log(props.businesses)
    }
    
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
               <Button onClick ={handleSumbit}>Submit</Button>
           </Container>
        </Container>
    )
}

export default AddBusiness