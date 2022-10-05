import React ,{useState,useEffect} from 'react';
import { Text, View, RefreshControl,FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';
import {FontAwesome ,Entypo, MaterialIcons , Feather } from '@expo/vector-icons';
import { styles } from '../assets/Style';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function ListVeiculo ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    
      

useEffect(() =>{
    let ref = firebase.firestore().collection('veiculo').onSnapshot(querySnapshot =>{
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
                <View style={styles.box}>
                    <View >
                        <TouchableOpacity  
                        style={styles.row}
                        onPress={() => navigation.navigate('Listagem')}>
                            <Text style={styles.titlevcl}>{item.modelo} {item.placa}</Text>
                            <FontAwesome name="caret-right" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                )}
                />
            </View>
        </View>
    );
}


