import { Button, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';


const AddTodo = ({navigation}) => {
   const [text, setText] = useState();
   const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(addTodo(text)); 
        setText('');
    }
    return (
        <View>
            <TextInput
                placeholder='Write Your Note Here'
                value={text}
                onChangeText={setText}
                spellCheck={true}
                placeholderTextColor={'#999999'}
                numberOfLines={4}
                multiline={true}
                textAlignVertical='top'
                maxLength={3000}
                // maxLength= {10}
                style={styles.input}
            />
           
            {/* <Button title='Add' onPress={handleSubmit} /> */}
           
            <TouchableOpacity onPress={handleSubmit}
             style={styles.addButton}>
               <Text style={styles.addButtonTextColor}> ADD </Text>
         </TouchableOpacity>
         </View>
            
    )
}

export default AddTodo

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // alignItems:'center',
        // backgroundColor: '#fff',
        // padding: 10,
        // margin: 2,
        // width: 200,
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: '#fff',
        // padding: 13,
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#fff',
        padding: 13
    },
    input: {
        // backgroundColor:'#fff',
         // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    borderRadius: 2,
       
    },
    addButton:{
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderRadius: 6,
        backgroundColor: 'green',
        margin: 7,
        marginLeft: 10,
        marginRight: 10,
    },
    addButtonTextColor:{
        color: 'white',
        fontsize: 'bold'
    }
})