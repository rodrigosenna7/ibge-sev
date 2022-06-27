import React, {useState, useEffect} from 'react';
import { Text, View,BackHandler,Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Deslocamento, Abastecimento, Manutencao} from '../index';
import { Fontisto,Entypo,FontAwesome,FontAwesome5, Feather } from '@expo/vector-icons';


export default function App({navigation}) {


  useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta!", "Você realmente deseja sair?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () =>{
        navigation.navigate('Login')
        BackHandler.exitApp();
      } 
      }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const Tab=createBottomTabNavigator();

  return (

        <Tab.Navigator
          initialRouteName="Deslocamento" 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Deslocamento') {
              return (
                <FontAwesome5 name="map-marked" size={30} color={color} />
              );
            } else if (route.name === 'Abastecimento') {
              return (
                <FontAwesome5 name="gas-pump" size={30} color={color} />
              );
            }
            else if (route.name === 'Manutencao') {
              return (
                <FontAwesome5 name="tools" size={30} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#004f88',
          inactiveTintColor: 'gray',
        }}
      >
                
                <Tab.Screen name="Abastecimento" component={Abastecimento} options={{title:'Abastecimento'}}/>
                <Tab.Screen name="Deslocamento" component={Deslocamento} options={{title:'Deslocamento',}}/>
                <Tab.Screen name="Manutencao" component={Manutencao} options={{title:'Manutenção'}}/>
             
        </Tab.Navigator>




        
     
      );
    }
