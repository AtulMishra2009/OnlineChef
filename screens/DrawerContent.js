import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import { Avatar, Title,Caption,Paragraph,Drawer } from 'react-native-paper'

const DrawerContent = ({props}) => {
  // console.log('props', props);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} >
        <View style={styles.DrawerContent}>
      
      <View style={[styles.userInfoSection,{flexDirection: 'row'}]}>
        <View style={{marginTop: 15,marginLeft: 15}}>
          <Avatar.Image source={require('../assets/images/profile.jpg')}/>
        </View>
        
        <View style={{marginLeft: 9, marginTop: 15}}>
          {/* <Title style={styles.title}>Shiva</Title>
          <Caption style={styles.caption}>@shiva</Caption> */}
        </View>
      </View>
         
         <View style={[styles.row, styles.userInfoSection]}>
        
          <View style={[styles.section, {marginLeft: 15,}]}>
            <TouchableOpacity onPress={() => props.navigation.navigate("customerProfileDetails")}>
          <Paragraph style={[styles.paragraph, styles.caption]}><Title>Shiva</Title></Paragraph>
          </TouchableOpacity>
          </View>
         
          <View style={ {marginLeft: 15, marginBottom: 1}}>
          <TouchableOpacity onPress={() => props.navigation.navigate("customerProfileDetails")}>
          <Caption style={styles.caption}>View profile</Caption>
          </TouchableOpacity>
          </View>
         
          <View style={[styles.section, {marginLeft: 15,alignItems:'flex-start', marginTop: 15 }]}>
            <TouchableOpacity>
          <Paragraph style={[styles.paragraph, styles.Caption]}>23 <Caption>Profile Views</Caption></Paragraph>
          </TouchableOpacity>
          {/* <Caption style={styles.caption}>Following</Caption> */}
          </View>
        
       
      </View>
      
      <Drawer.Section style={{flex: 1, marginTop: 15}}>
        <DrawerItem label=""></DrawerItem>
      </Drawer.Section>
        
      
      
      <View style={{marginLeft: 15, padding: 10}}>
      <TouchableOpacity>
        <Text> <Title>Groups</Title></Text>
        </TouchableOpacity>
        <View style={{marginLeft: 15, padding: 10}}></View>
       <TouchableOpacity>
        <Text> <Title>Events</Title></Text>
        </TouchableOpacity>
        
      </View>
      
      
     
      </View>

      
      </DrawerContentScrollView>

      
        
    
      <View style={{marginLeft: 15, padding: 10}}>  
      {/* <DrawerItem label=""></DrawerItem> */}
      <TouchableOpacity > 
          <Title>Log out</Title> 
        </TouchableOpacity> 
        </View>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({})