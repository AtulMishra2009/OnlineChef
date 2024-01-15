import { configureStore, combineReducers } from '@reduxjs/toolkit';
import customerSlice from './customerSlice';
import todoSlice from './features/todos/todosSlice';

const reducer = combineReducers({
    todos: todoSlice,
    TodosData: customerSlice
});


const store = configureStore ({
    reducer: reducer,
    devTools: true,
});
// const store = configureStore({
//     reducer: {
//         TodosData: customerSlice
//     },
//     // {
//     //     // todos: todoSlice,
//     //     TodosData: customerSlice
//     // },
//     devTools: true,
// });
 
export default store;