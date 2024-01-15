import { StyleSheet, Text, View,} from 'react-native'
import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native-gesture-handler';


const ApiServices = () => {

    const [myUserData, setmyUserData] = useState();
    const [isLoaded, setisLoaded] = useState(true);

    const getUserData = async () => {
        try{
            const response = await fetch (
              "https://jsonplaceholder.typicode.com/users" 
            );
            const myData = await response.json();
            setmyUserData(myData);
            setisLoaded(false);
            console.log(myData)
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);
  return (
    <View >


     <FlatList 
      data={myUserData}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <View style= {{flex: 1, marginLeft: 9,alignItems: 'center', borderRadius: 16, margin: 10 }}> 
             <View style={{borderRadius: 5,borderWidth: 1, backgroundColor: 'green'}}>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>ID:  {item.id}</Text>
            </View>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>NAME:</Text> {item.name}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>USERNAME:</Text> {item.username}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>EMAIL:</Text> {item.email}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>STREET:</Text> {item.address.street}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>SUITE:</Text> {item.address.suite}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>CITY:</Text>  {item.address.city}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>ZIPCODE:</Text>  {item.address.zipcode}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>LAT:</Text> {item.address.geo.lat}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>LANG:</Text> {item.address.geo.lng}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>PHONE:</Text> {item.phone}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>WEBSITE:</Text> {item.website}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>COMPANY NAME:</Text> {item.company.name}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text style={{fontWeight: 'bold'}}>CATCHPHRASE:</Text> {item.company.catchPhrase}</Text>
            <Text style={{fontStyle: 'italic'}}> <Text  style={{fontWeight: 'bold'}}>BS:</Text>  {item.company.bs}</Text>
        </View>
      }}
     />
    </View>
  )
}

export default ApiServices

const styles = StyleSheet.create({})