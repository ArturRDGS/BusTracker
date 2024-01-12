import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopBar from './TopBar';

const Stack = createNativeStackNavigator();

export default function TelaRotas({ navigation }) {
  return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar style="auto"/>
        <TopBar/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RotaManhã')}>
            <Text style={styles.buttonText}>Manhã</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RotaTarde')}>
            <Text style={styles.buttonText}>Tarde</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RotaNoite')}>
            <Text style={styles.buttonText}>Noite</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: '#00a529',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});