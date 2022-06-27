import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {  Ionicons   } from '@expo/vector-icons';
import Vacina from './screens/Vacinas'
import Boletim from './screens/Boletim'



export default function App ({ navigation }){

  const [vacina, setVacina] = useState(false);
  const [boletim, setBoletim] = useState(false);

  
      return(
        <View style={styles.container}>

           
           
           <View>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => {
                      setBoletim(!boletim);
                    }}
                    >
                        <Text style={{color:'#fff'}}>Boletim</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => {
                      setVacina(!vacina);
                    }}
                    >
                        <Text style={{color:'#fff'}}>Vacinas</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType='slide'
                visible={vacina}
           >
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {
                    setVacina(!vacina);
                  }}
                >
                 <Ionicons name="close" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Vacina/>
           </Modal>

           <Modal
                animationType='slide'
                visible={boletim}
           >
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {
                    setBoletim(!boletim);
                  }}
                >
                 <Ionicons name="close" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Boletim/>
           </Modal>

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

    input:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        width:300,
        marginTop:10
    },

    inputnum:{
        width:100,
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        marginTop:10
    },

    botao:{
        backgroundColor:"#F33329",
        width:'100%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        paddingLeft:30,
        paddingRight:30,
        marginTop:15
    },
 
})