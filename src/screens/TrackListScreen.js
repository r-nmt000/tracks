import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "@react-navigation/compat";
import { Context as TrackContext } from "../context/trackContext";

const TrackListScreen = ({navigation}) =>  {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>Track list screen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name}/>
            </TouchableOpacity>
          )
        }
        }
        />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
