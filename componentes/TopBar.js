import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../imagens/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#00a529',
    paddingHorizontal: 16,
  },
  logo: {
    width: 160,
    height: 80,
    resizeMode: 'contain',
  },
});

export default TopBar;
