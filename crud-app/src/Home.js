import React, { useEffect, useState } from 'react'
import { UseGlobalContext } from './Context/contextapi'
import { Link, Navigate, useNavigate  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Pagination from './Pagination';

const Home = () => {

const [showPerPage , setShowPerPage] = useState(6)

  const [pagination , setPagination] = useState({
    start :0,
    end:6
  })


  let navigate = useNavigate()
  const { ApiData, Filter: { text }, sortValue  , isLoading , isError} = UseGlobalContext();
  const { filterValue, sortingValue, getData, Reset  } = UseGlobalContext()


  console.log(sortValue);


  if(isLoading){
    return <div>....Loading</div>
   }
   
   if(isError){
    return console.log("error")
   }
   


const paginationChange = (Start , End)=>{

setPagination({start:Start , end:End})

  console.log(Start , End)



}

const remove = async(ID)=>{
  if(window.confirm("want to Delete ?")){
    await axios.delete(`http://localhost:3000/users/${ID}`)

    // dispatch({type:'delete_Data', payload:data})
    alert("user has been deleted")
  
  
  getData('http://localhost:3000/users')
  }
   
 


}


// useEffect(()=>{
//   getData()
// },[ApiData])

  

  return (
    <div>


      <div className="container">
        <div className='text-center my-3'>
          <input type="text" placeholder='Search By Name' name='text' value={text} onChange={filterValue} />&nbsp;


          <button onClick={Reset} className='btn btn-primary '>Reset</button>
        </div>
        <h1 className='text-center my-1'>Search Filter Pagination using fake json server</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Adress</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              ApiData.length > 0 ?
                ApiData.slice(pagination.start , pagination.end).map((currEl, i) => {

                  const { id, name, email, phone, status, address } = currEl
                  return (
                    <tr key={i}>
                      <th scope="row">{pagination.start=== 0 ? i+1 : pagination.start+i+1}</th>
                      <td>{name}</td>
                      <td>{address}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{status}</td>
                      <td>
                     
                        <Link  to={`/EditUser/${currEl.id}`} ><button className='btn btn-warning mx-1'>Edit</button></Link>
                        <button onClick={()=>{remove(id)}} className='btn btn-danger mx-1'>Delete</button>

                      </td>
                    </tr>

                  )
                })
                : <div className='mx-auto'>


                  <h3 className='text-center mt-5'> NO Data Found</h3>
                </div>
            }

          </tbody>
        </table>
      </div>

      <Pagination showPerPage = {showPerPage} paginationChange = {paginationChange}   total = {ApiData.length}  />


      <br />
<div className="container my-5">

      <form action="">
        <label htmlFor="sort"></label>
        <select
          onChange={sortingValue}
          name='sort'
          value={sortValue}

        >

          <option >sorting By</option>
          <option value="name">name</option>
          <option value="email">email</option>
          <option value="address">address</option>
          <option value="phone">phone</option>
          <option value="status">status</option>

        </select>




      </form>
</div>
    </div>
  )
}

export default Home