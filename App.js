import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Listagem from './screens/Listagem'
import ListVeiculo from './screens/ListVeiculo'
import Saida from './screens/Saida'
import Chegada from './screens/Chegada'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false }}/>
            <Stack.Screen name="ListVeiculo" component={ListVeiculo} options={{headerShown:false }}/>
            <Stack.Screen name="Listagem" component={Listagem} options={{headerShown:false }}/>
            <Stack.Screen name="Saida" component={Saida} options={{headerShown:false }}/>
            <Stack.Screen name="Chegada" component={Chegada} options={{headerShown:false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
