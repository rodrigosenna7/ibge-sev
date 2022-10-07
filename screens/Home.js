import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Menutopo from '../components/Menutopo';
import {FontAwesome5, MaterialIcons} from '@expo/vector-icons';

import firebase from 'firebase';
import { styles } from '../assets/Style';



export default function Home ({navigation}){
    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    async function loadUserProfile(){
        const user = await UserService.getUserProfile(user_id, true);
        setData([user]);    
    }
    useEffect(() =>{
        let ref = firebase.firestore()
    .collection('users')
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
        loadUserProfile();        
    }, [])

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
          }).catch((error) => {
            alert('falha')
        });
    }


      return(
        <View>
            <Menutopo title='Sev Fácil' navigation={navigation}/>
           
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=>(
                    <View style={styles.bigbox}>
                        <Text style={styles.negrito}>{item.nome}</Text>
                        <Text style={styles.negrito}>{item.identifcador}</Text>
                        <Text style={styles.negrito}>{item.cargo}</Text>
                    </View>
                    )}
                />
                <View style={styles.row}>
                    <View style={styles.buttonpstv}>
                        <TouchableOpacity
                        onPress={() => {navigation.navigate('Moviment')}}
                        >
                            <FontAwesome5 name="route" size={24} color="black" />
                            <Text>Deslocamentos</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <MaterialIcons name="local-gas-station" size={24} color="black" /> 
                            <Text>Abastecimento</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </View>
    );
}