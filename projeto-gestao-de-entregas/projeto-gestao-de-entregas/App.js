import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicialDoApp from './src/pages/TelaInicial/TelaInicialDoApp';
import TelaLogin from './src/pages/Login/TelaLogin';
import TelaHome from './src/pages/Home/TelaHome';
import TelaEntregasFeitas from './src/pages/EntregasFeitas/TelaEntregasFeitas';
import TelaEntregasPendentes from './src/pages/EntregasPendentes/TelaEntregasPendentes';
import TelaCadastroEntrega from './src/pages/NovaEntrega/TelaNovaEntrega';
import TelaListaEntregas from './src/pages/ListaDeEntregas/TelaListaEntregas';
import TelaDetalhesEntrega from './src/pages/DetalhesEntrega/TelaDetalhesEntrega';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaHome} options={{ headerShown: false }}/>
        <Stack.Screen name="EntregasFeitas" component={TelaEntregasFeitas} options={{ headerShown: false }} />
        <Stack.Screen name="EntregasPendentes" component={TelaEntregasPendentes} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroEntrega" component={TelaCadastroEntrega} options={{ headerShown: false }} />
        <Stack.Screen name="ListaEntregas" component={TelaListaEntregas} options={{ headerShown: false }} />
        <Stack.Screen name="DetalhesEntrega" component={TelaDetalhesEntrega} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

