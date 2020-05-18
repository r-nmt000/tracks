import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) =>  {
  return (
    <View>
      <Text>Signup screen</Text>
      <Button
        title="Go to signin"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
