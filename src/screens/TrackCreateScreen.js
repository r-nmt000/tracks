import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";

const TrackCreateScreen = () =>  {
  return (
    <SafeAreaView>
      <Text h3>Track create screen</Text>
      <Map/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
