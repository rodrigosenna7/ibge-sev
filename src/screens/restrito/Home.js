import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { FontAwesome5, Feather} from '@expo/vector-icons';
import {styles} from '../../../assets/css/Styles';


export default function Home ({ navigation }){

 
      return(
            
            <View style={styles.container}>
                <Text>HOME</Text>
                <View>
                    <Text>3125996</Text>
                    <Text>Ag. Jequitinhonha</Text>
                </View>
                <View>
                    <View>
                        <FontAwesome5 name="map-marked" size={30} color={color} />
                        <Text>Deslocamento</Text>
                    </View>

                    <View>
                        <FontAwesome5 name="gas-pump" size={30} color={color} />
                        <Text>Abastecimento</Text>
                    </View>

                    <View>
                    <FontAwesome5 name="tools" size={30} color={color} />
                        <Text>Manutenção</Text>
                    </View>
                </View>
            </View>
            
    );
}
