import { StyleSheet, Text, View, TextInput, SafeAreaView, Dimensions, Platform, Button, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import {addData} from './customerSlice'
// import { TextInput } from 'react-native-paper';


// checkbox code
const initialState = {
  male: false,
  female: false,
  north: false,
  south: false,
  full: false,
  half: false,
};

const NAME_REGEX = /^[a-zA-Z ]{2,30}$/;
const mobilePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
// const age_regex=/\s[0-1]{1}[0-9]{0,2}/;
const CustomersDetailsFile = ({ navigation }) => {

  const [Name, setName] = useState("ghedgw");
  const [errorName, seterrorName] = useState("");
  const [Address, setAddress] = useState("ewbghfhgw");
  const [erroraddress, setErrorAddress] = useState("");
  const [pincode, setpincode] = useState("735625");
  const [errorpincode, setErrorPincode] = useState("");
  const [age, setage] = useState("67");
  const [errorage, setErrorAge] = useState("")
  const [phone, setphone] = useState("9482022460");
  const [errorphone, seterrorphone] = useState("");
  const [aadhar, setaadhar] = useState("677888989978");
  const [erroraadhar, setErrorAadhar] = useState("")
  const [check, setCheck] = useState(initialState);
  const [toggleButton, settoggleButton] = useState(false);
  const [value, setValue] = useState("");

  const lang = [{ label: 'English', value: '1' },
  { label: 'Hindi', value: '2' },
  { label: 'Kannada', value: '3' },
  { label: 'Telgu', value: '4' },
  { label: 'Tamil', value: '5' }];
  const [pack, setPack] = useState("");
  const year = [{ label: 'Yearly', value: '1' },
  { label: 'Six Month', value: '2' },
  { label: 'Three Month', value: '3' },
  { label: 'Monthly', value: '4' },
  { label: 'Special Offer', value: '5' }];

  // const validate = () => {};


  //  Date and time code
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState(' Select Date and Time');



  const [finalDate, setFinalDate] = useState('');
  const [finalTime, setFinalTime] = useState('');

  const [gender, setGender] = useState("");
  const [foodtype, setFoodType] = useState("");
  const [day, setDay] = useState("");


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // console.log('this is current date', date, selectedDate, currentDate);
    setShow(Platform.OS === 'android');
    setDate(currentDate);
    setShow(false);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);
    setFinalDate(fDate);
    setFinalTime(fTime);
    console.log(fDate + '(' + fTime + ')')
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  const [textCustomer, setTextCustomer] = useState();
  const dispatch = useDispatch();


  const OnpressContinue = () => {
    

    let valueType = {
      Name: Name,
      Age:age,
      Aadhar: aadhar,
       Mobile :phone,
      Gendar:gender,
       Pincode:pincode,
       Address:Address,
       Language:value,
       Package:pack,
       Date:finalDate,
       Time:finalTime,
      Food :foodtype,
       Day2 :day
    };
    console.log('hiiiii', valueType)
    dispatch(addData(valueType));
    setTextCustomer('');
    if (!_.isEmpty(Name) && (!_.isEmpty(age)) && (!_.isEmpty(aadhar)) && (!_.isEmpty(phone)) && (!_.isEmpty(pincode)) && (!_.isEmpty(Address)) && (!_.isEmpty(age))
    ) {
      // navigation.navigate("customerdataStoragefile",{params1:Name,params2:age,params3: aadhar,
      // params4:phone,params5:gender,params6:pincode,params7:Address,params8:value,
      // params9:pack,params10:finalDate,params11:finalTime,params12:foodtype,params13:day})

      navigation.navigate("apiServices")
    }
    // JSON.stringify(initialState)
    // JSON.stringify(lang)
    // JSON.stringify(year)
    else {
      if (_.isEmpty(Name)) {
        seterrorName('Please Enter your  name')
      }
      if (_.isEmpty(phone)) {
        seterrorphone('Please Enter your mobile number')
      }
      if (_.isEmpty(age)) {
        setErrorAge('Please Enter Your  age')
      }
      if (_.isEmpty(aadhar)) {
        setErrorAadhar('Please Enter Your Aadhar Number')
      }
      if (_.isEmpty(Address)) {
        setErrorAddress('Please Enter Your Address')
      }
      if (_.isEmpty(pincode)) {
        setErrorPincode('Please Enter Your Pincode')
      }
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setName}
          placeholder="Enter Full Name"
          placeholderTextColor={'#999999'}
          // mode='outlined'
          // label="Enter Full Name"
          maxLength={20}
          value={Name}
          onBlur={() => {
            if (!_.isEmpty(Name)) {
              if (NAME_REGEX.test(Name))
                seterrorName(false);
              else
                seterrorName('Please enter valid Name');
            }
            else
              seterrorName('Please enter Name');
          }}
        />
        {errorName ? (
          <View>
            <Text style={[styles.errorName]}>{errorName}</Text>
          </View>
        ) : null}

        <View style={styles.spaceStyle} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={setage}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
          maxLength={2}
          onBlur={() => {
            if (!_.isEmpty(age)) {
              // if (age_regex.test(age))
              setErrorAge(false);
            }
            //   else
            //   setErrorAge('Please enter valid age');
            // }
            else
              setErrorAge('Please enter Age');

          }}
        />
        {errorage ? (
          <View>
            <Text style={[styles.errorage]}>{errorage}</Text>
          </View>
        ) : null}
        <View style={styles.spaceStyle} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={setphone}
          placeholder="Enter Mobile Number"
          placeholderTextColor={'#999999'}
          // mode='outlined'
          // label="Enter Full Name"
          maxLength={10}
          keyboardType="numeric"
          value={phone}
          onBlur={() => {
            if (!_.isEmpty(phone)) {
              if (mobilePattern.test(phone))
                seterrorphone(false);
              else
                seterrorphone('Please enter valid Mobile Number');
            }
            else
              seterrorphone('Please enter Mobile Number');
          }}
        />
        {errorphone ? (
          <View>
            <Text style={[styles.errorphone]}>{errorphone}</Text>
          </View>
        ) : null}
        <View style={styles.spaceStyle} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={setaadhar}
          value={aadhar}
          placeholder="Enter your Aadhar Card Number"
          keyboardType="numeric"
          maxLength={12}
          onBlur={() => {
            if (!_.isEmpty(aadhar)) {
              // if (age_regex.test(age))
              setErrorAadhar(false);
            }
            //   else
            //   setErrorAge('Please enter valid age');
            // }
            else
              setErrorAadhar('Please enter Aadhar Number');

          }}
        />
        {erroraadhar ? (
          <View>
            <Text style={[styles.erroraadhar]}>{erroraadhar}</Text>
          </View>
        ) : null}
        <View style={styles.checkBoxView}>
          <View style={styles.spaceStyle} />

          {/* gender */}
          <View style={styles.gender}>
            <View style={styles.checkBoxLabelView}>
              <Text>Gender</Text>
            </View>

            <View style={styles.cbOptionView}>
              <View style={styles.cbOptionInputView}>
                <Text style={styles.textmale}>Male:</Text>
                <CheckBox
                  //  style={{flex: .1}}
                  disabled={false}
                  value={gender == 'Male'}

                  onValueChange={(value) => {
                    console.log('value', value)
                    setGender('Male');
                  }
                  }
                />

              </View>
              <View style={styles.cbOptionInputView}>

                <Text >Female:</Text>
                <CheckBox
                  // style={{flex: .2}}
                  disabled={false}
                  value={gender == 'Female'}
                  onValueChange={(value) => {
                    setGender('Female');
                  }
                  }
                />

              </View>
            </View>
          </View>

          {/* Food type  */}
          <View style={styles.spaceStyle} />
          <View style={styles.food}>
            <View style={styles.checkBoxLabelView}>
              <Text>Food Type</Text>
            </View>
            <View style={styles.cbOptionView}>
              <View style={styles.cbOptionInputView}>
                <Text style={styles.textnorth}>North:</Text>
                <CheckBox
                  //  style={{flex: .1}}
                  disabled={false}
                  value={foodtype == 'North'}
                  onValueChange={(value) => {
                    setFoodType('North');
                  }
                  } />
              </View>
              <View style={styles.cbOptionInputView}>
                <Text>South:</Text>

                <CheckBox
                  disabled={false}
                  value={foodtype == 'South'}
                  onValueChange={(value) => {
                    setFoodType('South');
                  }
                  } />

              </View>
            </View>
          </View>

          {/* Day  */}
          <View style={styles.spaceStyle} />
          <View style={styles.day}>
            <View style={styles.checkBoxLabelView}>
              <Text>Day</Text>
            </View>
            <View style={styles.cbOptionView}>
              <View style={styles.cbOptionInputView}>
                <Text style={styles.textfull}>Full:</Text>

                <CheckBox
                  // style={{flex: .1}}
                  disabled={false}
                  value={day == 'Full'}
                  onValueChange={(value) => {
                    setDay('Full');
                  }
                  }
                />

              </View>
              <View style={styles.cbOptionInputView}>
                <Text>Half:</Text>

                <CheckBox
                  disabled={false}
                  value={day == 'Half'}
                  onValueChange={(value) => {
                    setDay('Half');
                  }
                  }
                />

              </View>
            </View>
          </View >
        </View>
        <View style={styles.spaceStyle} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', margin: 10, }}>Language</Text>
          <Dropdown
            showsVerticalScrollIndicator={false}
            maxHeight={320}
            data={lang}
            labelField="label"
            valueField="label"
            //  placeholder='Select'     //{value} 
            // searchPlaceholder="Search..."
            // search
            value={value}
            style={{ marginLeft: 14, alignSelf: 'flex-start', width: Dimensions.get('window').width * 0.5 }}
            onChange={item => {
              // console.log('hiii', item)
              setValue(item.label);
            }}

          />
        </View>
        <View style={styles.spaceStyle} />
        {/* Date and time with moment */}
        {/* <View style={styles.newDate}>
              <Text style={styles.newDateText}>
                Current Date Time 
              </Text>
              <Text style={styles.newDateText}>
                 {currentDate}
              </Text>
              <Text style={styles.newDateText}>
                 {currentDateWithMoment}
              </Text>
            </View> */}
        {/* title='Select Date' */}
        {/* <Text style={{margin:5, padding: 7,}}>{text}</Text> */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginVertical: 14 }}>Date & Time  </Text>

          <Text style={{ marginVertical: 14 }}>{finalDate}</Text>
          <View style={styles.date}>
            <Icon name="calendar-today" size={30} onPress={() => showMode('date')} />
          </View>
          <Text style={{ marginVertical: 14 }}>{finalTime}</Text>
          <View style={styles.time}>
            <Icon name="schedule" size={30} onPress={() => showMode('time')} />
          </View>
          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={(event, date) => { console.log('this is date cahange'); onChange(event, date); setShow(false) }}
            />)}

        </View>
        <View style={styles.spaceStyle} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', margin: 10, }}>Package</Text>
          <Dropdown
            showsVerticalScrollIndicator={false}
            maxHeight={320}
            data={year}
            labelField="label"
            valueField="label"
            placeholder='Select'     //{value} 
            // searchPlaceholder="Search..."
            // search
            value={pack}
            style={{ marginLeft: 14, alignSelf: 'flex-start', width: Dimensions.get('window').width * 0.5 }}
            onChange={item => {
              console.log('hiii', item)
              setPack(item.label);
            }}

          />
        </View>
        <View style={{ height: 100 }}>
          <View style={styles.spaceStyle} />

          <TextInput
            style={styles.inputStyle}
            onChangeText={setAddress}
            value={Address}
            numberOfLines={4}
            spellCheck={true}
            placeholder="Address"
            multiline={true}
            textAlignVertical='top'
            // textContentType={addressCity}
            // keyboardType="Text"
            maxLength={300}
            // maxHeight={1000}
            onBlur={() => {
              if (!_.isEmpty(Address)) {
                // if (age_regex.test(age))
                setErrorAddress(false);
              }
              //   else
              //   setErrorAge('Please enter valid age');
              // }
              else
                setErrorAddress('Please enter Your Address');

            }}
          />
          {erroraddress ? (
            <View>
              <Text style={[styles.erroraddress]}>{erroraddress}</Text>
            </View>
          ) : null}

        </View>
        <View style={styles.spaceStyle} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={setpincode}
          value={pincode}
          placeholder="Pincode"
          keyboardType="numeric"

          maxLength={6}
          onBlur={() => {
            if (!_.isEmpty(pincode)) {
              // if (age_regex.test(age))
              setErrorPincode(false);
            }
            //   else
            //   setErrorAge('Please enter valid age');
            // }
            else
              setErrorPincode('Please enter Your Pincode');

          }}
        />
        {errorpincode ? (
          <View>
            <Text style={[styles.errorpincode]}>{errorpincode}</Text>
          </View>
        ) : null}
        <View style={styles.spaceStyle} />
        <View >
          <TouchableOpacity
            style={styles.customersDetails}
            onPress={() =>
              OnpressContinue()

              // navigation.navigate("services")
            }>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}

export default CustomersDetailsFile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  spaceStyle: {
    marginBottom: 10,

  },
  checkBoxLabelView: {
    flex: 0.4,
    // flexDirection: 'row',
    // backgroundColor: 'red'
  },
  checkBoxView: {
    flex: 0.5,
    // flexDirection: 'row'
    // alignItems: 'center'
  },
  cbOptionInputView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  cbOptionView: {
    flex: 0.6,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',

    // paddingLeft:15,
  },
  checkBoxeStyle: {
    alignSelf: 'flex-end'
  },

  inputStyle: {
    borderWidth: 1,
    // paddingLeft: 15,
    // justifyContent: 'flex-start',
    borderColor: "rgba(0,0,0,0.1)",
    // marginHorizontal: 15,
    // alignItems: 'center',
    borderRadius: 2,
    // margin: 2,
    // height: 90

  },
  errorName: {
    color: 'red',
    marginLeft: 3,
    // marginTop: 8,
    fontSize: 12
  },
  errorphone: {
    color: 'red',
    paddingLeft: 4,
    fontSize: 12
  },
  errorage: {
    color: 'red',
    paddingLeft: 4,
    fontSize: 12
  },
  erroraadhar: {
    color: 'red',
    paddingLeft: 4,
    fontSize: 12
  },
  erroraddress: {
    color: 'red',
    paddingLeft: 4,
    fontSize: 9
  },
  errorpincode: {
    color: 'red',
    paddingLeft: 4,
    fontSize: 12
  },
  //  row:{
  //       flexDirection: 'row',
  //       // paddingRight: 50,
  //       alignItems: 'center',
  //       // marginTop: 1,
  //       marginLeft: 17,
  //        },

  gender: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    // position: 'relative',
    // paddingRight: 10,
    // paddingLeft:15,


  },
  //  textmale:{
  //   //  marginLeft: 3
  //   flex: .20,
  //    },
  food: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // paddingRight: 10,
    // paddingLeft: 15

  },
  //  textnorth:{
  //       // paddingRight: 15
  //       flex: .21,
  //  },
  day: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // paddingRight: 4,
    // paddingLeft:15,
  },
  //  textfull:{
  //   // marginLeft: 8
  //   flex: .21,
  //  },
  date: {
    //  alignItems: 'center',
    alignSelf: 'flex-start',
    margin: 10,
    //  marginRight: 10
    // flexDirection: 'row',
  },
  time: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  customersDetails: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 6,
    backgroundColor: 'green',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold'
  },
  newDateText: {
    textAlign: 'center',
    fontSize: 25,

  }
})
