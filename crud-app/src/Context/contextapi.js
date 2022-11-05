import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../Reducer/ApiReducer";


let AppContext = createContext();

const intialState = {
    isLoading: false,
    isError: false,
    ApiData :[],
    sortValue:'name',
    Filter :{
        text:''
     
    },

 

}



const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, intialState)

let Api  = 'http://localhost:3000/users'

let Data
    const getData = async(url)=>{
        dispatch({type:'set_Loading' })
       try {
	let res  = await axios.get(url);
	    //    console.log(res)
	    Data = res.data
	    console.log(Data)
        dispatch({type:'Set_Data', payload:Data})
	
	    }
 catch (error) {
    dispatch({type:'set_Error' })
}
}

const Reset = () => {
 
    getData(Api)

dispatch({type:'Reset_clean'})
  
  }



const filterValue = (event)=>{
   let name =event.target.name
   let value= event.target.value

    dispatch({ type:'Get_Filter_Value' ,payload:{name , value}})

}

const sortingValue = (event)=>{
    let value   = event.target.value

    dispatch({ 
        type:'Get_Sort_Value',
        payload : value
    })

}





useEffect(()=>{
dispatch({type:'Filters_Value' })
dispatch({type:'Sorting_User'})

},[state.Filter , state.sortValue])
    useEffect(()=>{
        getData(Api);
    },[])

    return  <AppContext.Provider value={{...state , getData , filterValue , sortingValue ,Reset }}>{children}</AppContext.Provider>
}

const UseGlobalContext =()=>{
    return useContext(AppContext);
}
export {AppProvider , AppContext , UseGlobalContext}