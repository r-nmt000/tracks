import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Input, Button} from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from '../context/locationContext';

const TrackForm = () => {
  const { state: { name, recording }, startRecording, stopRecording, changeName } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name"/>
      </Spacer>
      {recording
        ? <Button title="Stop Recording" onPress={stopRecording}/>
        : <Button title="Start Recording" onPress={startRecording}/>
      }
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;