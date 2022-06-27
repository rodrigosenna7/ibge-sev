import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Modal, FlatList, Platform} from 'react-native';
import { Ionicons, Entypo,FontAwesome5 } from '@expo/vector-icons';
import {styles} from '../../../assets/css/Styles';
import CadParcialDeslocamento from '../../modais/CadParcialDeslocamento';

export default function Deslocamento ({ navigation }){

    const [cadParcialDeslocamento, setCadParcialDeslocamento] = useState(false);

    const DATA = [
        {
            id: '1',
            finalidade:'Pnadc Medina setor 12312315',
            user:3125996,
            veiculo: 'Ford KA AAA 1A23',
            saida: '02/07/2022 - 08:32',
            kmsaida: 2885,
            chegada:'02/07/2022 - 10:32',
            kmchegada:3010,
            observacao: 'Sem observações',
             
        },        
        {
            id: '2',
            finalidade:'Pnadc Medina setor 12312315',
            user: 44011122233,
            veiculo: 'Onix AAA 1A23',
            saida: '20/07/2022 - 08:32',
            kmsaida: 2885,
            chegada:'20/07/2022 - 10:32',
            kmchegada:3010,
            observacao: 'Sem observações',
        },
        {
            id: '3',
            finalidade:'Supervisão Censo setor 12312315',
            user:3125996,
            veiculo: 'Gol AAA 1A23',
            saida: '12/07/2022 - 08:32',
            kmsaida: 2885,
            chegada:'12/07/2022 - 10:32',
            kmchegada:3010,
            observacao: 'Abastecimento gasolina', 
        },
      ];
 
      return(
            
        <View style={styles.container}>
            
        <View>
        <View style={styles.boxrow}>
            <FontAwesome5 name="filter" size={40} color="#004F88" />
           <TouchableOpacity onPress={() => {setCadParcialDeslocamento(!cadParcialDeslocamento);}}>
                <View>
                    <Entypo name="circle-with-plus" size={50} color="#004F88" />
                </View>
        </TouchableOpacity>
        </View>
        <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({item})=>(
                    
                    <View style={styles.box}>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>Finalidade: </Text>
                            <Text style={styles.txtregular}>{item.finalidade}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>Motorista: </Text>
                            <Text style={styles.txtregular}>{item.user}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>Veiculo: </Text>
                            <Text style={styles.txtregular}>{item.veiculo}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text style={styles.txtBold}>Saída: </Text>
                            <Text style={styles.txtregular}>{item.saida}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>KM Saída: </Text>
                            <Text style={styles.txtregular}>{item.kmsaida}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>Chegada: </Text>
                            <Text style={styles.txtregular}>{item.chegada}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>km Chegada: </Text>
                            <Text style={styles.txtregular}>{item.kmchegada}</Text>
                        </View>
                        <View style={styles.linha} >
                            <Text style={styles.txtBold}>Observações: </Text>
                            <Text style={styles.txtregular}>{item.observacao}</Text>
                        </View>
                      
                    </View>
                    
                )}
            />
                <Modal animationType='slide' visible={cadParcialDeslocamento}>
                    <TouchableOpacity 
                    onPress={() => {setCadParcialDeslocamento(!cadParcialDeslocamento);}}
                    >
                    <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                    </TouchableOpacity>
                    <CadParcialDeslocamento/>
                </Modal>
                       
        </View>
    </View>
            
    );
}
