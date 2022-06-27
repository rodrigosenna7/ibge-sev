import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, FlatList, Modal, Platform} from 'react-native';
import { Ionicons, Entypo,FontAwesome5 } from '@expo/vector-icons';
import {styles} from '../../../assets/css/Styles';
import CadManutencao from '../../modais/CadManutencao';
import firebase from '../../../firebaseConfig';
import serviceManutencao from '../../service/serviceManutencao';

export default function Manutencao ({ navigation }){

    const [cadManutencao, setCadManutencao] = useState(false);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);


    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('manutencao').onSnapshot(querySnapshot =>{
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


    async function loadManutencao(){
        const manutencao = await serviceManutencao.loadManutencao();
        setData(manutencao);
    }

    useEffect(() =>{
        loadManutencao()
    }, []);

 
      return(
            
            <View style={styles.container}>
               <View>
            <View style={styles.boxrow}>
                <FontAwesome5 name="filter" size={40} color="#004F88" />
               <TouchableOpacity onPress={() => {setCadManutencao(!cadManutencao);}}>
                    <View>
                        <Entypo name="circle-with-plus" size={50} color="#004F88" />
                    </View>
            </TouchableOpacity>
            </View>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=>(
                        
                        <View style={styles.box}>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Nota Fiscal: </Text>
                                <Text style={styles.txtregular}>{item.notafiscal}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Data da Nota Fiscal: </Text>
                                <Text style={ styles.txtregular}>{item.data}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Veículo: </Text>
                                <Text style={styles.txtregular}>{item.veiculo}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Motorista: </Text>
                                <Text style={styles.txtregular}>{item.user_id}</Text>
                            </View>
                            <View style={styles.linha}  >
                                <Text style={styles.txtBold}>Tipo: </Text>
                                <Text style={styles.txtregular}>{item.tipo}</Text>
                            </View>
                            <View style={styles.linha}  >
                                <Text style={styles.txtBold}>Km:</Text>
                                <Text style={styles.txtregular}>{item.odometro}</Text>
                            </View>
                            <View style={styles.linha}  >
                                <Text style={styles.txtBold}>Observação: </Text>
                                <Text style={styles.txtregular}>{item.observacao}</Text>
                            </View>
                        </View>
                    )}
                />  
                <Modal animationType='slide' visible={cadManutencao}>
                    <TouchableOpacity 
                    onPress={() => {setCadManutencao(!cadManutencao);}}
                    >
                    <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                    </TouchableOpacity>
                    <CadManutencao/>
                </Modal>
            </View>
        </View>
            
    );
}
