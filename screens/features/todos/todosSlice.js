import {createSlice} from '@reduxjs/toolkit'


let nextTodoId = 0;

const todosSlice = createSlice({
    name: 'Todos',
   
    initialState: [],
    reducers:{
        addTodo:(state, action) =>{
            state.push({id:nextTodoId++, text: action.payload})
        },
        
        // toggleTodo(state, action ) {
        //     const todo = state.find(todo => todo.id === action.payload)
        //     if(todo){
        //         todo.completed = !todo.completed
        //     }
        // }d
    }


})


      
export const {addTodo} = todosSlice.actions

export default todosSlice.reducer