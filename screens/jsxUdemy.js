import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const JsxUdemy = ({ navigation }) => {
    const name = 'mishra'
  return (
    <View>
    <View style={{alignItems:'center'}}>
       <Text style={styles.text}>Getting started with udemy</Text>
      <Text style={styles.name}>My name is {name}</Text>
      </View>
      
      <View>
    <TouchableOpacity onPress={() => navigation.navigate("services")}
       style={styles.Next}>
       <Text style={styles.nextTextColor}>Next</Text>
     </TouchableOpacity>
     </View>
    
    
    </View>
   
  )
}

export default JsxUdemy

const styles = StyleSheet.create({
    text:{
       fontSize: 35,
       color: 'black'
    },

    name:{
        fontSize: 20,
        color: 'green'
    },
    nextTextColor: {
        color: 'white',
        fontsize: 'bold'
      },
      Next: {
        alignItems: 'center',
        //  paddingHorizontal: 6,
        paddingVertical: 8,
        marginLeft: 12,
        marginRight: 9,
        borderRadius: 4,
        backgroundColor: 'grey'
      },
})