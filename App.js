import { StyleSheet, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import Splash from './screens/splash';
import Login from './screens/login';
import Home from './screens/home';
import Services from './screens/services';
import CustomersDetailsFile from './screens/CustomersDetailsFile';
import CustomerDataStorageFile from './screens/CustomerDataStorageFile';
import DrawerContent from './screens/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerGestureContext } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import Store from './screens/Store';
import  TodoApp  from './screens/features/todos/TodoApp';
import CustomerProfileDetails from './screens/customerProfileDetails';
import jsxUdemy from './screens/jsxUdemy';
import flatListUdemy from './screens/flatListUdemy';
import BottomNavigation from './screens/BottomNavigation';
import Sample from './screens/Sample';
import Flex from './screens/flex';
import apiServices from './screens/apiServices';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './screens/DrawerContent';
import LocationScreen from './screens/LocationScreen ';
// import BlogContext, { BlogProvider } from './screens/BlogContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [showssplash, setsplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 4000);

  }, [])
  
 
  const LoginStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <Stack.Screen name="splash" headerShown={false} component={Splash} />
        {/* <Stack.Screen name="home" component={Home} /> */}
        {/* <Stack.Screen name="IntroScreen" component={IntroScreen} /> */}
        
        <Stack.Screen name="login" component={Login} />
        {/* <Stack.Screen name="OTPVerification" component={OTPVerification} /> */}
      </Stack.Navigator>
    );
  };


  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="BottomNavigation">
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
  
        {/* <Stack.Screen name="MainHome" component={MainHome} /> */}
        
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="customerdetailsfile" component={CustomersDetailsFile} />
        <Stack.Screen name="customerdataStoragefile" component={CustomerDataStorageFile} />
        <Stack.Screen name="todoapp" component={TodoApp} />
        <Stack.Screen name="services" component={Services} />
        <Stack.Screen name="DrawerContent" component={DrawerContent} />
        <Stack.Screen name="customerProfileDetails" component={CustomerProfileDetails}/>
        <Stack.Screen name="flatListUdemy" component={flatListUdemy}/>
        <Stack.Screen name="jsxUdemy" component={jsxUdemy}/>
        <Stack.Screen name="sample" component={Sample}/>
        <Stack.Screen name="flex" component={Flex}/>
        <Stack.Screen name="apiServices" component={apiServices}/>
        {/* <Stack.Screen name="BlogContext" component={BlogContext}/> */}
        </Stack.Navigator>
  );
};
    
  return (
    <Provider store={Store}>
      {/* <TodoApp/> */}
  
      <NavigationContainer>
      {/* <Stack.Navigator> */}
        {/* <Stack.Navigator initialRouteName='home'>
          
          {showssplash ? <Stack.Screen options={{ headerShown: false }} name={'splash'} component={Splash} /> : null}
          <Stack.Screen options={{ headerShown: false }} name={'login'} component={Login} />
          <Stack.Screen options={{ headerShown: false }} name={'home'} component={Home} />
          <Stack.Screen options={{ headerShown: true, title: 'Movies' }} name={'services'} component={Services} />
          <Stack.Screen options={{ headerShown: false }} name={'customerdetailsfile'} component={CustomersDetailsFile} />
          <Stack.Screen name={'customerdataStoragefile'} component={CustomerDataStorageFile} />
          <Stack.Screen options={{ headerShown: false }} name={'todoapp'} component={TodoApp} />
          <Stack.Screen  name={'DrawerNavigation'} component={DrawerNavigation} />
       </Stack.Navigator> */}
        {/* yaha se  */}
       {/* <Drawer.Navigator initialRouteName='splash'>
       {showssplash ? <Drawer.Screen options={{ headerShown: false }} name={'splash'} component={Splash} /> : null}
       <Drawer.Screen options={{ headerShown: false }} name={'login'} component={Login}/>
          <Drawer.Screen name={'home'} component={Home}/> 

          <Drawer.Screen  name="customerdetailsfile" component={CustomersDetailsFile}/> */}
          {/* <Drawer.Screen options={{ headerShown: false }} name="customerdataStoragefile" component={CustomerDataStorageFile}/> */}
          {/* <Drawer.Screen  name="todoapp" component={TodoApp}/> */}
          {/* <Drawer.Screen  name="services" component={Services}/> */}
          {/* <Drawer.Screen  name="DrawerNavigation" component={DrawerNavigation}/> */}
           {/* </Drawer.Navigator>  */}
        {/* </Stack.Navigator> */}
        

        <Drawer.Navigator
                
                initialRouteName={'LoginStack'}
                // drawerContent={props => <DrawerContent {...props} />}
                drawerStyle={styles.drawerStyle}
                drawerContent={props => {return(<DrawerContent props={props}/>)}}
                >
                  
                <Drawer.Screen
                  options={{swipeEnabled: false, headerShown: false}}
                  name="LoginStack"
                  component={LoginStack}
                />
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                {/* <Drawer.Screen name="Redirect" component={Redirect} /> */}
              </Drawer.Navigator>
              
    </NavigationContainer>
   
    </Provider>





  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});