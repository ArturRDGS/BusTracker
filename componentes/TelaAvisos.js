import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopBar from './TopBar';

const Stack = createNativeStackNavigator();

export default function TelaInicial({ navigation }) {
  return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar style="auto"/>
        <TopBar/>
        <View style={styles.avisoContainer}>
            <Text style={styles.tituloAviso}>- Cancelamento de Rota</Text>
            <Text style={styles.textoAviso}>- Data: 08/12/2023</Text>
            <Text style={styles.textoAviso}>-   Prezados alunos do IFPI Campus Pedro II, informamos que o ônibus habitualmente utilizado encontra-se indisponível devido a uma quebra. Desta forma, lamentamos informar que não será possível realizar o percurso usual. Pedimos a compreensão de todos e orientamos que busquem alternativas de transporte para garantir a chegada à instituição. Estamos trabalhando para resolver a situação o mais breve possível. Agradecemos pela compreensão.</Text>
        </View>
        <View style={styles.avisoContainer}>
            <Text style={styles.tituloAviso}>- Atraso nas Rotas</Text>
            <Text style={styles.textoAviso}>- Data: 05/12/2023</Text>
            <Text style={styles.textoAviso}>-   Prezada comunidade acadêmica do IFPI Campus Pedro II, informamos que o ônibus escolar está enfrentando atrasos devido às condições climáticas adversas, especialmente as chuvas intensas. Pedimos a compreensão de todos os alunos e solicitamos que estejam cientes da possibilidade de atrasos em seus deslocamentos. A segurança é nossa prioridade, e estamos monitorando de perto a situação para garantir o retorno à normalidade assim que possível. Agradecemos pela compreensão e paciência de todos.</Text>
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
  avisoContainer: {
    marginTop: 20,
    backgroundColor: '#ffee00',
    paddingLeft: 10
  },
  tituloAviso: {
    color: '#ff0000',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textoAviso: {
    color: '#ff0000',
    textAlign: 'left'
  }
});
