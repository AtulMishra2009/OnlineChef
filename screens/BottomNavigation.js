import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import CustomersDetailsFile from './CustomersDetailsFile'
import TodoApp from './features/todos/TodoApp'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
   let BottomTabs = [
        {
          name: 'home',
          component: Home,
          tabBarLabel: 'Home',
         
        },
  
  
        {
          name: 'customerdetailsfile',
          component: CustomersDetailsFile,
          tabBarLabel: 'Home',
          
        },
        
        {
          name: 'TodoApp',
          component: TodoApp,
          tabBarLabel: 'Home',
          
        }]
    console.log('Bottomnavigation')
  return (
    <View style={{flex: 1, paddingBottom: 1}}>
<Tab.Navigator
      initialRouteName='home'
      tabBarOptions={{
       
        labelPosition: 'below-icon',
        labelStyle: {
       
          fontSize: 10,
          lineHeight: 10,
          width: '100%',
          fontFamily: 'Muli-Bold',
        //   backgroundColor: 'red',
          position: 'absolute'
        },
        style: {
       
          
        
        },
      }}
      >
    {BottomTabs.map(value =>{
        return(
                    <Tab.Screen 
                    name={value.name} 
                    // component={value.component}
                    key={value.name}
                    children={props=>{
                        return (
                            <value.component
                            {...props}
                            />
                        )
                    }}
                    />
        )
    }

    )}
    </Tab.Navigator>
      {/* <Tab.Navigator
      initialRouteName='home'
      >
        <Tab.Screen name="home" component={Home}/>
        <Tab.Screen name="customerdetailsfile" component={CustomersDetailsFile}/>
        <Tab.Screen name="TodoApp" component={TodoApp}/>

      </Tab.Navigator> */}
    </View>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})