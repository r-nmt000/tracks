import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Text} from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";

const AccountScreen = () =>  {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Spacer>
        <Text h3>Account screen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout}/>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;