import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) =>  {
  return (
    <View>
      <Text>Track list screen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
