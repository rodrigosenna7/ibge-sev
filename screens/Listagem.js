import React ,{useState,useEffect} from 'react';
import { Text, View, RefreshControl,FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';
import {Entypo,MaterialCommunityIcons,FontAwesome, MaterialIcons , Feather } from '@expo/vector-icons';
import { styles } from '../assets/Style';
import Menutopo from '../components/Menutopo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Listagem ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);
    const [veiculoSelecionado, setVeiculoSelecionado] = useState({});


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    
      

    useEffect(() =>{
        let ref = firebase.firestore()
        .collection('veiculo')
        .doc('veiculoId')
        .collection('moviment')
        .onSnapshot(querySnapshot =>{
        const data = []
            querySnapshot.forEach(doc =>{
                data.push({
                    ...doc.data(),
                       key:doc.id
            })
        })
        setData(data)
    })
        return () => ref()
    }, [])
    
    const showVeiculo = (item) => {
        setDetalhe (true)
        setVeiculoSelecionado (item)
    }

    return(  
        <View >
        <Menutopo title='Deslocamentos' navigation={navigation}/>
            <View>
            <View >
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Saida')}}
                        style={styles.row}
                    >
                        <Entypo name="squared-plus" size={35} color="black" />
                        <Text>Novo deslocamento</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                      
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=>(
                    <View style={styles.bigbox}>
                        <View>
                        <Text style={styles.negrito}>Finalidade: {item.finalidade}</Text>
                        <Text>Saída: {item.dataInicio}</Text>
                        <Text>Hora Saída: {item.horaInicio}</Text>
                        <Text>KM Saída: {item.kmInicio}</Text>
                        <Text>Data Chegada: {item.dataFim}</Text>
                        <Text>Hora Chegada: {item.horaFim}</Text>
                        <Text>KM Chegada: {item.kmFim}</Text>
                        <Text>Observação: {item.obs}</Text>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.row} onPress={() => { editFire(item.key, item.siape, item.finalidade) }}>
                            <FontAwesome name="stop-circle" size={24} color="black" />
                            <Text style={styles.text}> Finalizar</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity style={styles.row} onPress={() => { delFire(item.key) }}>
                            <MaterialCommunityIcons name="delete-circle" size={24} color="black" />
                            <Text style={styles.text}> Excluir</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    )}
                />
            </View>
        </View>
    );
}


