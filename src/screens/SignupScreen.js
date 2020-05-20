import React, {useContext, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) =>  {
  const { state, signup } = useContext(AuthContext);
  const {email, setEmail } = useState('');
  const {password, setPassword } = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
      </Spacer>
      <Spacer>
        <Button
          title="Sign up"
          onPress={() => signup({email, password})}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 16,
    color: 'red'
  }
});

export default SignupScreen;
