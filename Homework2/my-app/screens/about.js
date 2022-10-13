import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from 'my-app/styles/global';

export default function About({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      {/* Display the fields of the received movie object. */}
      <Text>This application lists movies and movie reviews.</Text>

    </View>
  );
}