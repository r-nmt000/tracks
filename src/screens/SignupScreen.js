import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) =>  {
  return (
    <View>
      <Spacer>
        <Text h3>Sign up</Text>
      </Spacer>
      <Spacer>
        <Input label="Email"/>
      </Spacer>
      <Spacer>
        <Input label="Password"/>
      </Spacer>
      <Spacer>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate('SignIn')}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
