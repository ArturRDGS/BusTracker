import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaInicial from './componentes/TelaInicial';
import TelaRotas from './componentes/TelaRotas';
import TelaAvisos from './componentes/TelaAvisos';
import TelaRotaManhã from './componentes/TelaRotaManhã';
import TelaRotaTarde from './componentes/TelaRotaTarde';
import TelaRotaNoite from './componentes/TelaRotaNoite';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial"  screenOptions={{headerShown:false}}>
        <Stack.Screen name="TelaInicial" component={TelaInicial}  options={{hideNavigationBar:true}} />
        <Stack.Screen name="Rotas" component={TelaRotas}  options={{hideNavigationBar:true}} />
        <Stack.Screen name="Avisos" component={TelaAvisos}  options={{hideNavigationBar:true}} />
        <Stack.Screen name="RotaManhã" component={TelaRotaManhã}  options={{hideNavigationBar:true}} />
        <Stack.Screen name="RotaTarde" component={TelaRotaTarde}  options={{hideNavigationBar:true}} />
        <Stack.Screen name="RotaNoite" component={TelaRotaNoite}  options={{hideNavigationBar:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
