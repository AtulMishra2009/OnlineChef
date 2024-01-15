import { StyleSheet, Text, TouchableOpacity, View, TextInput, mobileNumber, setActive, deviceHeight, Dimensions, TouchableHighlight } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';


const images = [
  require('../assets/images/image.jpg'),
  require('../assets/images/image1.jpg'),
  require ('../assets/images/image2.jpg'),
  require ('../assets/images/iamge3.jpg'),
  require ('../assets/images/image4.jpg'),
  require ('../assets/images/image5.jpg'),
  require ('../assets/images/image6.jpg'),
]
const  Home = ({navigation}) => {
  console.log('homeScreen')
  return (
    <View style={styles.container}>
     <View style={{  }}>
       <SliderBox
        images={images}
        dotColor="white"
        inactiveDotColor="black"
        imageLoadingColor="white"
        autoplay={true}
        autoplayInterval={5000}
        // parentWidth="95%"
        circleLoop={true}
        onCurrentImagePressed={(index) => alert(index+1)}
        firstItem={4}
        paginationBoxVerticalPadding={10}
        dotStyle={styles.dotview}
       />
       </View>

       {/* <View>
       <TouchableOpacity onPress={()=>{
       console.log('hello') 
       navigation.navigate("customerdetailsfile")
       }}

       
       style={styles.continue}>
        <Text style={styles.continueTextColor}>Continue</Text>
        </TouchableOpacity>
        </View> */}
       </View>

     
    
       
       
  );
};

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    // navigation.navigate('HomeStack',{ screen: 'BottomNavigation' });
    // margin: 10,
    // padding: 40,
     // padding: 4,
    //  alignItems: 'center',
    //  height: 2,
    // margin: 1,
    // paddingHorizontal:15,
    // marginRight: 15,
    // width:Dimensions.get('window').width*0.9,
    // paddingHorizontal: 5,
    // paddingVertical: 7,
    // borderRadius: 5,
    // backgroundColor: 'red'
  },
  continue:{
      alignItems: 'center',
      //  paddingHorizontal: 6,
       paddingVertical: 8,
       marginLeft: 12,
       marginRight: 9,
       borderRadius: 4,
       backgroundColor: 'grey' 
  },
  continueTextColor:{
        color: 'white',
        fontsize: 'bold'
  },
  dotview:{
      height: 10,
      width: 10,
      borderRadius: 8,
  },
})


  {/* <View style = {styles.mainContainer}>
      <Text style = {styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>You can reach us anytime </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name</Text>
        <TextInput style={styles.inputStyle}
        autoCapitalize= "none"/>
      </View>
      </View> */}
     
 //   mainContainer: {
//     height: "100%",
//     paddingHorizontal: 30,
//     paddingTop: 30,
//     backgroundColor: "#fff",  
//   },
//   mainHeader:{
//     fontSize: 25,
//     color: "#344055",
//     fontWeight: "500",
//     paddingTop: 20,
//     paddingBottom: 15,
//     textTransform: "capitalize",
//     fontFamily: "bold",
//   },
//   description:{
//     fontSize: 20,
//     color: "#7d7d7d",
//     paddingBottom: 20,
//     lineHeight: 25,
//     fontFamily: "regular",
//   },
//   inputContainer:{
//     marginTop: 20,
//   },
//  labels:{
//   fontSize: 18,
//   color: "#7d7d7d",
//   marginTop: 10,
//   marginBottom: 5,
//   lineHeight: 25,
//   fontFamily: "regular",
//  },
//  inputStyle:{
//   borderWidth: 1,
//   borderColor: "rgba(0,0,0,0.3)",
//   paddingHorizontal: 15,
//   paddingVertical: 7,
//   borderRadius: 7,
//   fontFamily: "regular",
//   fontSize: 18,
//  }
// tokyo code from login screen.
 {/* <View style = {{
      marginTop: 30
    }}>
  
    <View style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        left: '8%',
        height: 100,
        borderWidth: 8,
    borderColor: "blue",
    position: 'absolute',
    borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
      >

    </View>
    <View style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        left: '20%',
        marginTop:20,
        position: 'absolute',
        height: 100,
        borderWidth: 8,
    borderColor: "#fb0",
    position: 'absolute',
    borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
      >

    </View>
    <View style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        left: '35%',
        position: 'absolute',
        height: 100,
        borderWidth: 8,
    borderColor: "black",
    borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
      >

    </View>
    <View style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        height: 100,
        marginTop:20,
        left: '50%',
        borderWidth: 8,
    borderColor: "green",
    position: 'absolute',
    borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
      >

    </View>
    <View style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        height: 100,
        borderWidth: 8,
        position: 'absolute',
        left: '63%',
    borderColor: "red",
    borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
      >
</View>
    </View> */}