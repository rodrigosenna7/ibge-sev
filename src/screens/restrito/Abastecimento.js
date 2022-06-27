import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Modal, FlatList, Platform} from 'react-native';
import { Ionicons, Entypo,FontAwesome5 } from '@expo/vector-icons';
import {styles} from '../../../assets/css/Styles';
import CadAbastecimento from '../../modais/CadAbastecimento';
import firebase from '../../../firebaseConfig';



export default function Abastecimento ({ navigation }){

    const [cadAbastecimento, setCadAbastecimento] = useState(false);

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('abastecimento').onSnapshot(querySnapshot =>{
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
      
     

    return(
        <View style={styles.container}>
            
            <View>
            <View style={styles.boxrow}>
                <FontAwesome5 name="filter" size={40} color="#004F88" />
               <TouchableOpacity onPress={() => {setCadAbastecimento(!cadAbastecimento);}}>
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
                                <Text style={styles.txtBold}>Veiculo: </Text>
                                <Text style={styles.txtregular}>{item.veiculo}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Motorista: </Text>
                                <Text style={styles.txtregular}>{item.user_id}</Text>
                            </View>
                            <View style={styles.linha}>
                                <Text style={styles.txtBold}>Data: </Text>
                                <Text style={styles.txtregular}>{item.data}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Qnt Litros: </Text>
                                <Text style={styles.txtregular}>{item.qntlitros}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Valor Litros: </Text>
                                <Text style={styles.txtregular}>{item.valorUnilitro}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Valor Total: </Text>
                                <Text style={styles.txtregular}>{item.valorTotal}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Combustivel:</Text>
                                <Text style={styles.txtregular}>{item.combustivel}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={styles.txtBold}>Odometro: </Text>
                                <Text style={styles.txtregular}>{item.odometro}</Text>
                            </View>
                        </View>
                        
                    )}
                />  
                <Modal animationType='slide' visible={cadAbastecimento}>
                    <TouchableOpacity 
                    onPress={() => {setCadAbastecimento(!cadAbastecimento);}}
                    >
                    <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                    </TouchableOpacity>
                    <CadAbastecimento/>
                </Modal>           
            </View>
        </View>
    );
}
