import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export function TodoList(){
   const todos = useSelector((state) => state.todos);
//    const  TodoS =useSelector((state) => state.TodoS)

   if (!todos.length) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Start Creating a new todo</Text>
        </View>
    );
   }
// if (!TodoS.length) {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.title}>Start Creating a new todo</Text>
//         </View>
//     );
//    }

   return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      {todos.map((todo,index) => (
        <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${todo.text}`}</Text>
      ))}
    </View>
//     <View style={styles.container}>
//     <Text style={styles.title}>TodoList</Text>
//     {TodoS.map((todo,index) => (
//       <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${todo.text}`}</Text>
//     ))}
//   </View>
  );

}
export default TodoList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        marginTop: 10
    },
    title:{
        fontSize: 16,
        fontWeight: "bold",
 },
     todoText: {
        margin: 4,
    },
});