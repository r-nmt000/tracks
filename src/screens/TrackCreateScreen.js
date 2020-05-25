import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () =>  {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView>
      <Text h3>Track create screen</Text>
      <Map/>
      {err ? <Text>Please enable location service</Text> : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
