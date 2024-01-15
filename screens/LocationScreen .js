// LocationScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      <Text>Location Screen</Text>
      {location && (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      )}
      <Button
        title="Continue"
        onPress={() => {
          // Navigate to the next screen or perform any desired action
          navigation.navigate('MainScreen'); // Replace 'MainScreen' with your screen's name
        }}
      />
    </View>
  );
};

export default LocationScreen;
