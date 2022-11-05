

const ApiReducer = (state, action) => {

    if (action.type === 'set_Loading') {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === 'set_Error') {
        return {
            ...state,
            isError: true,
            isLoading: false
        }
    }

    if (action.type === 'Set_Data') {
        return {
            ...state,
            isError: false,
            isLoading: false,
            ApiData: action.payload
        }
    }

    if (action.type === 'Get_Filter_Value') {

        const { name, value } = action.payload
        return {
            ...state,
            Filter: {
                ...state.Filter,
                [name]: value
            }
        }


    }






    if (action.type === 'Filters_Value') {

        const { ApiData } = state
        let tempFilterProduct = [...ApiData]

        const { text } = state.Filter
        if (text) {
            tempFilterProduct = tempFilterProduct.filter((currEl) => {
                return (

                    currEl.name.toLowerCase().includes(text)

                )
            })

        }
        return {
            ...state,
            ApiData: tempFilterProduct


        }
    }



    if (action.type === 'Get_Sort_Value') {
        return {
            ...state,
            sortValue: action.payload
        }
    }



if(action.type === 'Reset_clean'){
    return{
        ...state,
        Filter: {
           text:''
           
        }
    }
  

}

if(action.type==='delete_Data'){
    return {
        ...state,
        ApiData:action.payload
    }
}

    if (action.type === 'Sorting_User') {

        // let SortingData;
        // let sorted

        const { sortValue, ApiData } = state;
        let tempData = [...ApiData]



        const SortingData = (a, b) => {

            if (sortValue === 'name') {
                return a.name.localeCompare(b.name);
            }

            if (sortValue === 'email') {
                return a.email.localeCompare(b.email);
            }
            if (sortValue === 'address') {
                return a.address.localeCompare(b.address);
            }
            if (sortValue === 'status') {
                return a.status.localeCompare(b.status);
            }
            if (sortValue === 'phone') {
                return a.phone.localeCompare(b.phone);
            }

        }

        let sortData = tempData.sort(SortingData)


        return {
            ...state,
            ApiData: sortData
        }
        // }


    }




    return state
}
export default ApiReducer
