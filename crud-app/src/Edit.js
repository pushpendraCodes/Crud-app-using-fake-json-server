import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  Navigate, useNavigate } from 'react-router-dom'
import { UseGlobalContext } from './Context/contextapi';

const Edit = () => {

    let navigate = useNavigate()
    let {id} = useParams();
    console.log(id)
    // const [Data , setData] = useState([])
    const [users , setusers] = useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        status :''
      })

const {getData} = UseGlobalContext()

    const GetData=async()=>{
        let res = await axios.get(`http://localhost:3000/users/${id} `)
        setusers(res.data)
    //    console.log(Data)
        
        
    }

    useEffect(()=>{
        GetData()
    },[])

    const onchangeinputenput = (e)=>{

        setusers({...users,[e.target.name]:e.target.value})
      
      
      }

      const addUser = async(e)=>{
        e.preventDefault();
        console.log(users)
        await axios.put(`http://localhost:3000/users/${id}`,users  );
        navigate("/");
        alert("User has been Updated ✅")
        getData('http://localhost:3000/users')

        
      }

    const { name ,email , address , phone , status} = users

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
        <input type="text" value={email} name='email' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your email' className="form-control" required/>
    
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" value={address} name='address' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your address' className="form-control" required/>
    
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">mobile</label>
        <input type="text" value={phone} name='phone' onChange={(e)=>{onchangeinputenput(e)}} placeholder='Enter your mobile' className="form-control" required/>
    
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

export default Edit