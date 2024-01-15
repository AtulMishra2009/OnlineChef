import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoList from '../todos/TodoList'
import AddTodo from '../todos/AddTodo'

const TodoApp = () => {
  return (
    <View style= {styles.container}>
        <ScrollView>
      <Text style={styles.title}>Todo App</Text> 
      <AddTodo/>
      <TodoList/>
      </ScrollView>
    </View>
  )
}

export default TodoApp

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12
    },
    container:{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "white",
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10
    }
})