import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    listOfItems:[]
}

const customerSlice = createSlice({
    name: 'TodosData',
    initialState: initialState.listOfItems,
    reducers:{
        addData:(state, action)=>{
            console.log('action', action.payload, initialState, state,)
            state.push({listOfItems: action.payload})
        },
    }


})
      
export const { addData} = customerSlice.actions 

export default customerSlice.reducer