import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useReducer} from 'react'

const reducer =(state, action) => {
  switch (action.type) {
    case 'increment':
        return{...state, count: state.count + action.payload};
        case 'decrement':
            return{...state, count: state.count - action.payload};
            default:
                return state;
  }
};

const Sample = () => {
const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 7,justifyContent: 'flex-end'}}>
      <Button 
      title='Increase'
      onPress={() => {
        dispatch({type: 'increment', payload: 1})
      }}
      />
</View>
      <Button 
      title='Decrease'
      onPress={() => {
        dispatch({type: 'decrement', payload: 1})
      }}
      />
    <View style={{padding: 8}}>
      <Text>Current Count: {state.count}</Text>
      </View>
    </View>
  )
}

export default Sample

const styles = StyleSheet.create({})