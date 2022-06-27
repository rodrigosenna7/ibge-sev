import React ,{useState,useEffect} from 'react';
import { Text, View, RefreshControl,FlatList, StyleSheet } from 'react-native';
import firebase from '../firebaseConfig';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Listagem ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('deslocamento').onSnapshot(querySnapshot =>{
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
            <Text style={[styles.txtDark,styles.subTitledark]}>Finalidade:</Text>
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
                        
                        <View style={[styles.borda, styles.blocoLight]}>

                               
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Siape</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.siape}</Text>
                            </View>
                            <View style={styles.linha}>
                                <Text style={[styles.txtDark,styles.subTitledark]}>Finalidade:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.finalidade}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Data Saida:</Text>
                                <Text style={[styles.txtDark,styles.subTitledark]}>{item.datas}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Hora de Saida:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.horas}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Km Inicio:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.kminicio}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Data Chegada:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.datac}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Hora Chegada:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.horac}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Km Final:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.kmfinal}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Observações:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.observacao}</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.post}</Text>
                            </View>
                        </View>
                        
                    )}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    txtDark:{
        color:'#13293D', 
        fontSize:17,
        textAlign:'justify',
    },

    boletimdia:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:'#13293D',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        color:'white'
        
    },

    subTitledark:{
        color:'#13293D',
        textAlign:'left',
        fontSize:25,
    },

    blocoLight:{
        backgroundColor:'#E8F1F2', 
        padding:10
    },

    borda:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E8F1F2',
        margin:10
    },
    linha:{
        borderBottomWidth:1,
        borderColor:'#247BA0',
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingTop:10
    },

})

