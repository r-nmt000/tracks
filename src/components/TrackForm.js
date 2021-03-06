import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Input, Button} from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from "../hooks/useSaveTrack";
import { withNavigation } from "@react-navigation/compat";

const TrackForm = ({navigation}) => {
  const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name"/>
      </Spacer>
      <Spacer>
        {recording
          ? <Button title="Stop Recording" onPress={stopRecording}/>
          : <Button title="Start Recording" onPress={startRecording}/>
        }
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save recording" onPress={() => {
            saveTrack();
            navigation.navigate('TrackListFlow')
          }}/>
        ) : null}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(TrackForm);