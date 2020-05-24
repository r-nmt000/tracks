import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Text} from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";

const AccountScreen = () =>  {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text h3>Account screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;