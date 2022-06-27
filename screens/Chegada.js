import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../firebaseConfig';



export default function Chegada (){

    
   
    const [datac, setDatac] = useState('');
    const [horac, setHorac] = useState('');
    const [kmfinal, setKmfinal] = useState('');
    const [observacao, setObservacao] = useState('');
        
   
    
    const onChangeDatac = (txtDatac) =>{
      setDatac(txtDatac)
    }
    
    const onChangeHorac = (txtHorac) =>{
      setHorac(txtHorac)
    }

    const onChangeKmfinal = (txtKmfinal) =>{
        setKmfinal(txtKmfinal)
    }
    
    const onChangeObservacao = (txtObservacao) =>{
        setObservacao(txtObservacao)
    }

    
   
    function pushFirebase () {
        try{
            firebase.firestore().collection('deslocamento').add({
             
              datac: datac,
              horac: horac,
              kmfinal: kmfinal,
              observacao: observacao,
            })
        }catch (error){
            alert(error)
        }
        finally{
            
            setDatac('');
            setHorac('');
            setKmfinal('');
            setObservacao('');
          
        }
    }
  
      return(
        <View style={styles.container}>
           

            <View>

                

                <TextInput
                    style={styles.input}
                    placeholder="Data Chegada"
                    onChangeText={txtDatac => onChangeDatac(txtDatac)} 
                    value={datac}
                />

                    <TextInput
                        style={styles.input}
                        placeholder="Hora Chegada"
                        onChangeText={txtHorac => onChangeHorac(txtHorac)} 
                        value={horac}
                     />

                  <TextInput
                    style={styles.input}
                    placeholder="Km Final"
                    onChangeText={txtKmfinal => onChangeKmfinal(txtKmfinal)} 
                    value={kmfinal}
                    keyboardType='numeric'
                 />

                    <TextInput
                        style={styles.input}
                        placeholder="Observação"
                        onChangeText={txtObservacao => onChangeObservacao(txtObservacao)} 
                        value={observacao}
                    />

                    
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => {pushFirebase()}}
                    >
                        <Text style={{color:'#fff'}}>Salvar</Text>
                </TouchableOpacity>
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
        backgroundColor:"#1b1e50",
        width:100,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        paddingLeft:30,
        paddingRight:30,
        marginTop:15
    },
 
})