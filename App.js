import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BuscaFilmes from './src/components/buscaFilmes';
import TelaDetalhesFilme from './src/components/DetalhaFilmes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen name="Filmes" component={BuscaFilmes} />
        <Stack.Screen name="DetalhesFilme" component={TelaDetalhesFilme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
