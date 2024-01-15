import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native'
import React from 'react'


const Splash = ({navigation}) => {
  setTimeout(()=>{navigation.navigate('LoginStack', {screen: 'login'});}, 3000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require('./img/ss.png')} style={styles.logo}/>
      {/* <TouchableOpacity onPress={()=>navigation.navigate("login")}>
      <Text> This is splash screen</Text>
      </TouchableOpacity> */}
      {/* <View style={styles.container}>
        <Text>
          hello 
        </Text>
      </View> */}

        <Text style={styles.Text}>
          Chef Finder
        </Text>
    </View>
       

  );
};

export default Splash;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#000",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    // flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'space-around'
    height: "300%",
    width: "300%"
  },
  Text:{
    color: "#fff"
  }
})