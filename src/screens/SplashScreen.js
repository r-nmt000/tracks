import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from "../context/authContext";

const SplashScreen = () => {
  const { tryLocalSignin, loadApp } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
    loadApp();
  }, []);
  return null;
};

const styles = StyleSheet.create({});

export default SplashScreen;