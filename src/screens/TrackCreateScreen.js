import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from "@react-navigation/compat";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) =>  {
  const { addLocation } = useContext(LocationContext);
  const [ err ] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h3>Track create screen</Text>
      <Map/>
      {err ? <Text>Please enable location service</Text> : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
