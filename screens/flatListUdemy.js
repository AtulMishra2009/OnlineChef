import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const FlatListUdemy = () => {
  const friends = [
    {name: 'Sagar #1', age: 12},
    {name: 'madan #2', age: 13},
    {name: 'shiva #3', age: 14},
    {name: 'amit #4', age: 15},
    {name: 'abhi #5', age: 16},
  ]
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
   <FlatList 
    //  KeyExtractor={friend => friend.name}
     data={friends}
     renderItem= {({item}) => {
        return <Text style={styles.text}>Name={item.name} - Age={item.age}</Text>
     }}
   />
   </View>
  )
}

export default FlatListUdemy

const styles = StyleSheet.create({
    text:{
        marginVertical: 5,
        paddingRight: 10
    }
})