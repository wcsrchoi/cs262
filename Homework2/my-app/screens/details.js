import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from 'my-app/styles/global';

export default function DetailsScreen({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      {/* Display the fields of the received movie object. */}
      <Text style={styles.titleText}>{route.params.emailaddress}</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold"
  }
});