import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import _ from 'lodash';
const CustomerDataStorageFile = ({ navigation }) => {
  const route = useRoute();
  const TodosData = useSelector((state) => state.TodosData);
  console.log('todo list from redux',TodosData);
  // TodosData.map((params1, Name)=>{
  //   console.log('params1',params1.listOfItems.params1);
  // })
  _.map(TodosData[0].listOfItems, (a,b)=>{
    console.log('a,b,', a,b);
  })
  if (TodosData.length) {
    return(
      <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      {/* {TodosData.map((params1,Name) => (
        
        <Text style={styles.valueText} key={params1}>{`${Name + 1}. ${params1.listOfItems}`}</Text>
      ))} */}

    {_.map(TodosData[0].listOfItems, (a,b)=>{
        return(<Text style={styles.valueText} >{`${b}. ${a}`}</Text>)
      })}
      
    </View>
    );
   }
  return (

    <View style={styles.container}>

      {/* <View style={{ flex: 1 }}>
        <Text>Name:{route.params.params1}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Age:{route.params.params2}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Aadhar:{route.params.params3}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Phone:{route.params.params4}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Gender:{route.params.params5}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>FoodType:{route.params.params12}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Day:{route.params.params13}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Pincode:{route.params.params6}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Address:{route.params.params7}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Language:{route.params.params8}</Text>
      </View >
      <View style={{}}>
        <Text>Package:{route.params.params9}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Date:{route.params.params10}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Time:{route.params.params11}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("todoapp")}
          style={styles.Next}>

          <Text style={styles.nextTextColor}>Next</Text>
        </TouchableOpacity>
      </View> */}
         {/* <TouchableOpacity onPress={() => navigation.navigate("todoapp")}
          style={styles.Next}>
          <Text style={styles.nextTextColor}>Next</Text>
        </TouchableOpacity> */}
    </View>

  )
}

export default CustomerDataStorageFile

const styles = StyleSheet.create({
  Next: {
    alignItems: 'center',
    //  paddingHorizontal: 6,
    paddingVertical: 8,
    marginLeft: 12,
    marginRight: 9,
    borderRadius: 4,
    backgroundColor: 'grey'
  },
  nextTextColor: {
    color: 'white',
    fontsize: 'bold'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  }
})