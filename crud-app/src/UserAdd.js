import axios from 'axios'
import React, { useState } from 'react'
import {  Navigate, useNavigate } from 'react-router-dom'
import { UseGlobalContext } from './Context/contextapi'
import { useEffect } from 'react'




const UserAdd = () => {


  const {ApiData , getData} = UseGlobalContext()
  let navigate = useNavigate()

  const [users , setusers] = useState({
    name:'',
    email:'',
    address:'',
    phone:'',
    status :''
  })

const onchangeinputenput = (e)=>{

  setusers({...users,[e.target.name]:e.target.value})


}

const {name , email , address , phone , status} = users
console.log(status)

let Api = 'http://localhost:3000/users'


const addUser = async(e)=>{
e.preventDefault()
  await axios.post(Api,users)
  

navigate('/')
getData(Api)

}

console.log(name)

  return (
    <div className='container'>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={name} name='name' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your Name' className="form-control" required/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" value={email} name='email' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your Name' className="form-control" required/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" value={address} name='address' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your Name' className="form-control" required/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">mobile</label>
    <input type="text" value={phone} name='phone' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your Name' className="form-control" required/>

  </div>
  <div>
<select name="status"
value={status}

onChange={(e)=>{onchangeinputenput(e)}}

 >
 <option >staus</option>
    <option value="active">active</option>
    <option value="inactive">inactive</option>
</select>
  </div>

  <br/>
  <br/>
  <button onClick={(e)=>{addUser(e)}} type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default UserAdd