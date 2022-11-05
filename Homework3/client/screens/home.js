import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from 'my-app/styles/global';

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://sc83-monopoly-service.herokuapp.com/playergame')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={globalStyles.container}>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={globalStyles.titleText}>Player: {item.name == null ? "Anonymous" : item.name}</Text>
            <Text style={globalStyles.titleText}>Email: {item.emailaddress}</Text>
            <Text style={globalStyles.titleText}>Game: {item.gameid}</Text>
            <Text style={globalStyles.titleText}>Score: {item.score}</Text>
            <Text style={globalStyles.titleText}>{item.currentlocation == null ? "Game ended"
              : "Currently at " + item.currentlocation}</Text>
          </View>
        )}
      />

    </View>
  );


}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold"
  }
});