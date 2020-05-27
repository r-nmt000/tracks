import React, { useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";

const Map = () => {
  const { state: {currentLocation} } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200}}/>
  }
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.3323 + i * 0.001,
      longitude: -122.03131 + i * 0.001,
    })
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;