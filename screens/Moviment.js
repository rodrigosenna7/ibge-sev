import React ,{useState,useEffect} from 'react';
import { Text, View, RefreshControl,FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';
import {Entypo,MaterialCommunityIcons,FontAwesome, MaterialIcons , Feather } from '@expo/vector-icons';
import { styles } from '../assets/Style';
import Menutopo from '../components/Menutopo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Moviment ({ navigation, item }){

    const [refreshing, setRefreshing] = React.useState(false);
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    const [finalidade, setFinalidade] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [kmInicio, setKmInicio]= useState('');
    const [dataFim, setDataFim] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [kmFim, setKmFim]= useState('');
    const [obs, setObs]= useState('');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
    

 

    useEffect(() =>{
        let ref = firebase.firestore()
    .collection('moviment')
    .where("user_id", "==", user_id)
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
    
    useEffect(() =>{
        setVeiculo (item)
        console.log (item)
    }, [item])

    function delFirebase () {
        try{
            firebase.firestore().collection('moviment').doc(user_id).del({
                finalidade, 
                veiculo,
                dataInicio, 
                horaInicio,
                kmInicio,
                user_id:user_id
            })
        }catch (error){
            alert(error)
        }
        
    }
    
    function update (){
        firebase.firestore().collection('moviment').doc(user_id).update({
            finalidade,
            dataInicio,
            horaInicio,
            kmInicio,
            dataFim,
            horaFim,
            kmFim,
            obs,
            user_id:user_id
            });
    }

    return(  
        <View >
        <Menutopo title='Deslocamentos' navigation={navigation}/>
            <View>
                <View style={styles.cabeçalho}>
                </View>
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
                        <Text style={styles.negrito}>Veiculo: {item.veiculo}</Text>
                        <Text>Saída: {item.dataInicio}</Text>
                        <Text>Hora Saída: {item.horaInicio}</Text>
                        <Text>KM Saída: {item.kmInicio}</Text>
                        <Text>Data Chegada: {item.dataFim}</Text>
                        <Text>Hora Chegada: {item.horaFim}</Text>
                        <Text>KM Chegada: {item.kmFim}</Text>
                        <Text>Observação: {item.obs}</Text>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.row} onPress={() => {update() }}>
                            <FontAwesome name="stop-circle" size={24} color="black" />
                            <Text> Finalizar</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity style={styles.row} onPress={() => {delFirebase()}}>
                            <MaterialCommunityIcons name="delete-circle" size={24} color="black" />
                            <Text> Excluir</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    )}
                />
            </View>
        </View>
    );
}


