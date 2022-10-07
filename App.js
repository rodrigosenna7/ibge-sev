import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Moviment from './screens/Moviment'
import ListVeiculo from './screens/ListVeiculo'
import Saida from './screens/Saida'
import Chegada from './screens/Chegada'
import Home from './screens/Home'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false }}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false }}/>
            <Stack.Screen name="ListVeiculo" component={ListVeiculo} options={{headerShown:false }}/>
            <Stack.Screen name="Moviment" component={Moviment} options={{headerShown:false }}/>
            <Stack.Screen name="Saida" component={Saida} options={{headerShown:false }}/>
            <Stack.Screen name="Chegada" component={Chegada} options={{headerShown:false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
