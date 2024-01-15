import { StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight, Dimensions, FlatList, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState, } from 'react'
import _ from 'lodash';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const mobilePattern = /^[9|8|7|6]\d{9}$/;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

const Login = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(false)
  const [inputValue, setInputValue] = useState("7765906260")
  const [phoneError, setPhoneError] = useState("");
  const [Password, setpassword] = useState("Atul@2900");
  const [errorPassword, setErrorPassword] = useState(false);
  const [Get, setGet] = useState([]);
  const [enable, setenable] = useState(false);
  // const [error, setError] = useState({field:'', message: ''});

  useEffect(() => {
    if (inputValue.length === 10) {
      if (mobilePattern.test(inputValue)) {
        setenable(true)
        setIsPhone(true)
      } else {
        setIsPhone(false)
      }
    } else if (EMAIL_REGEX.test(inputValue)) {
      setenable(true)
      setIsPhone(false)
    }
    else {
      setenable(false)
    }
  }, [inputValue])

  // const onSubmit = () => {
  //    let loginError = {field: '', message:''};
  //    if (Email ==='') {
  //     loginError.field = 'email';
  //     loginError.message = 'Email is required!';
  //     setError( loginError);
  //    } else if (Password === ''){
  //     loginError.field ='password';
  //     loginError.message = 'Password is required';
  //     setError( loginError);
  //    } else{ 
  //     setError({field: '', message:''});
  //     alert('Login successfully!');
  //    }
  // };

  const  OnpressContinue=() => {
    console.log('Email', !_.isEmpty(Email), 'Phone', !_.isEmpty(Phone),!_.isEmpty(Password) )
       
    if(!_.isEmpty(Email) || (!_.isEmpty(inputValue)) && (!_.isEmpty(Password)))
        {
          // navigation.navigate("home")
          navigation.navigate('HomeStack', {screen: 'BottomNavigation'});
        }
        else{
          if(_.isEmpty(Email) || _.isEmpty(Phone)){
            setErrorEmail ('Please Enter your Email')
            setPhoneError('Please Enter your mobile number')
          }
        
         if(_.isEmpty(Password)){
          setErrorPassword('Please Enter Your Password')
         }
        
        }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.facebook}>facebook</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.logTextView}>
          <Text style={styles.log}>Log in to Facebook</Text>
        </View>
        <View>
          <TextInput
            maxLength={isPhone ? 10 : 100}
            style={styles.inputStyle}
            placeholder="Email address or phone number"
            placeholderTextColor={'#999999'}
            value={inputValue}
            onChangeText={(text) => { setInputValue(text) }}
            onBlur={(text) => {
              if (!_.isEmpty(inputValue)) {
                if (EMAIL_REGEX.test(inputValue) || inputValue.length == 10) 
                  setErrorEmail("");
                else 
                  setErrorEmail('Please enter valid email address or phone number');
              }
              else if (_.isEmpty(inputValue) && _.isEmpty(inputValue)) 
                setErrorEmail('Please enter email address or Phone number');
            }}
          />
        </View>
        {errorEmail ? (
          <View>
            <Text style={[styles.errormsg]}>{errorEmail}</Text>
          </View>
        ) : null}
        <View style={styles.pass}>
          <TextInput style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor={'#999999'}
            value={Password}
            secureTextEntry={true}
            onChangeText={(text) => {
              if (text.length == 0)
                setpassword('')
              else {
                setpassword(text)
              }

            }}
            onBlur={() => {
              if (!_.isEmpty(Password)) {
                if (PASSWORD_REGEX.test(Password))
                  setErrorPassword(false);
                else
                  setErrorPassword('Please enter valid password');
              }
              else 
                setErrorPassword('Please enter password');
            }}
          />
          {errorPassword ? (
            <View>
              <Text style={[styles.errorPassword]}>{errorPassword}</Text>
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.login}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  OnpressContinue()
                  // navigation.navigate("home")
                  if (Phone.length > 0) {
                    if (!mobilePattern.test(Phone)) 
                      setPhoneError('enter valid  phone');
                    else
                      setPhoneError(" ");
                  }
                  if (!_.isEmpty(Email)) {
                    if (EMAIL_REGEX.test(Email))
                      setErrorEmail("")
                    else
                      setErrorEmail('Please enter valid email address or phone number')
                  }
                  else if (_.isEmpty(Phone) && _.isEmpty(Email)) 
                    setErrorEmail('Please enter email address or Phone number');

                  if (!_.isEmpty(Password)) {
                    if (PASSWORD_REGEX.test(Password))
                      setErrorPassword("")
                    else
                      setErrorPassword('Please enter valid password')
                  }
                  else 
                    setErrorPassword('Please enter  password');
                }}
                style={styles.loginbutton}
              >

                <Text style={styles.logInText}> Log in</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewFooter}>
              <Text style={styles.footer}>
                Forgotten account? · Sign up for Facebook
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default Login

const styles = StyleSheet.create({
  facebook: {
    fontSize: 50,
    fontWeight: '900',
    color: 'blue',
    alignSelf: 'center',
    fontFamily: 'Muli-Extrabold',
    marginVertical: 5
  },
  logTextView: {
    alignItems: 'center'
  },
  log: {
    fontSize: 20,
    fontWeight: '480',
    color: 'black',
    marginVertical: 10,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    color: '#fff',
    paddingLeft: 1,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 13
  },
  border: {
    border: 10,
    borderWidth: 2,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  inputStyle: {
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 2,
  },
  pass: {
    marginVertical: 20,
    marginHorizontal: 0.9,
  },
  login: {
    borderRadius: 40,
    marginHorizontal: 20,
  },
  loginbutton: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#1877f2'
  },
  footer: {
    color: 'blue',
    marginVertical: 10,
    fontSize: 11,
  },
  viewFooter: {
    alignItems: 'center'
  },
  errormsg: {
    color: 'red',
    marginLeft: 25,
    fontSize: 12
  },
  errorPassword: {
    color: 'red',
    marginLeft: 25,
    fontSize: 12
  },
});
