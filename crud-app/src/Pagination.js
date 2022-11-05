import React, { useEffect, useState } from 'react'

const Pagination = ({ showPerPage, paginationChange ,total }) => {

  const [counter, setcounter] = useState(1)
   
  
  let noPages = Math.ceil(total/showPerPage)
  console.log(noPages)
// const [NumberOfPages , setnumberofPages] =  useState(noPages)

 

  useEffect(() => {
    let value = showPerPage * counter
    console.log(value)
    paginationChange(value - showPerPage, value)

  }, [counter])


  const onButtonClick = (type) => {

    if (type === "prev") {
      if (counter === 1) {
        setcounter(1)
      }
      else if (counter>1) {
        setcounter(counter-1)
      }
    }

    if(type === "next"){
      if(noPages === counter){

        setcounter(counter)
      }
   else {
setcounter(counter+1)
   }
   

    }

  }

  return (
    <div className='container mt-5'>
<nav aria-label="Page navigation example ">
  <ul class="pagination text-center ">
    <li class="page-item"><a class="page-link"  style={{cursor:'pointer'}} onClick={()=>{onButtonClick('prev')}} >Previous</a></li>

  {

new Array(noPages).fill("").map((curr ,index)=> ( 
     <li key={index}   class={`page-item ${ index+1===counter ? "active" :null}`}><a  style={{cursor:'pointer'}} onClick={()=>{setcounter(index+1)}} class="page-link" >{index+1}</a></li>) )

  }


  
       <li  class="page-item" ><a 
       class="page-link"  style={{cursor:'pointer'}} onClick={()=>{onButtonClick("next")}} >Next</a></li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination