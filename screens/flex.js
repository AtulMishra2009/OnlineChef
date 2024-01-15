import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styles.container}>
     <View style={styles.boxOneStyle}/>
     <View style={styles.boxTwoParent}>
     <View style={styles.boxTwoStyle}/>
     </View>
     <View style={styles.boxThreeStyle}/>
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
    container:{
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
    },
    boxOneStyle:{
      height: 50,
      width: 50,
      backgroundColor: 'red'
    },
    boxTwoParent:{
         height: 100,
         justifyContent: 'flex-end'
    },
    boxTwoStyle:{
        height: 50,
        width: 50,
       backgroundColor: 'green',
        // alignSelf: 'flex-end',
        // top: 50
    },

    boxThreeStyle:{
          height: 50,
          width: 50,
         backgroundColor: 'blue'
    }
})