import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopBar from './TopBar';

const TelaRotaTarde = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
        <StatusBar style="auto"/>
        <TopBar/>
        <Image
            source={require('../imagens/rtarde.jpg')}
            style={styles.imagemrota}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeAreaView: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    imagemrota: {
        width: 420,
        height: 420,
        resizeMode: 'contain',
    }
});

export default TelaRotaTarde;