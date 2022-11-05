import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from 'my-app/styles/global';

export default function HomeScreen({ navigation }) {

  /* Hardcode a "database"/list of movies. */
  const [players] = useState([
    {
      id: 1, emailaddress: "me@calvin.edu", name: null
    },
    {
      id: 2, emailaddress: "king@gmail.edu", name: "The King"
    },
    {
      id: 3, emailaddress: "dog@gmail.edu", name: "Dogbreath"
    },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* Get rid of that ugly button and, instead, display our list of movies. */}
      <FlatList data={players} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <Text style={styles.titleText}>{item.emailaddress}</Text>
        </TouchableOpacity>
      )
      } />
    </View >
  );


}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold"
  }
});