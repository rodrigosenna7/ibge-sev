import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../firebaseConfig';




export default function Saida (){

    
    const [siape, setSiape] =useState ('');
    const [datas, setDatas] = useState('');
    const [horas, setHoras] = useState('');
    const [kminicio, setKminicio] = useState('');
    const [finalidade, setFinalidade] = useState('');
        
    
    const onChangeSiape = (txtSiape) =>{
        setSiape(txtSiape)
      }
    
    const onChangeDatas = (txtDatas) =>{
      setDatas(txtDatas)
    }
    
    const onChangeHoras = (txtHoras) =>{
      setHoras(txtHoras)
    }

    const onChangeKminicio = (txtKminicio) =>{
        setKminicio(txtKminicio)
    }
    
    const onChangeFinalidade = (txtFinalidade) =>{
        setFinalidade(txtFinalidade)
    }

    
   
    function pushFirebase () {
        try{
            firebase.firestore().collection('deslocamento').add({
              siape: siape,
              datas: datas,
              horas: horas,
              kminicio: kminicio,
              finalidade: finalidade
            })
        }catch (error){
            alert(error)
        }
        finally{
            setSiape('');
            setDatas('');
            setHoras('');
            setKminicio('');
            setFinalidade('');
          
        }
    }
  
      return(
        <View style={styles.container}>
           

            <View>

                <TextInput
                        style={styles.input}
                        placeholder="Siape"
                        onChangeText={txtSiape=> onChangeSiape(txtSiape)} 
                        value={siape}
                        keyboardType='numeric'
                        maxLength={59}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Data Saída"
                    onChangeText={txtDatas => onChangeDatas(txtDatas)} 
                    value={datas}
                />

                    <TextInput
                        style={styles.input}
                        placeholder="Hora Saída"
                        onChangeText={txtHoras => onChangeHoras(txtHoras)} 
                        value={horas}
                     />

                  <TextInput
                    style={styles.input}
                    placeholder="Km Inicial"
                    onChangeText={txtKminicio => onChangeKminicio(txtKminicio)} 
                    value={kminicio}
                    keyboardType='numeric'
                 />

                    <TextInput
                        style={styles.input}
                        placeholder="Finalidade"
                        onChangeText={txtFinalidade => onChangeFinalidade(txtFinalidade)} 
                        value={finalidade}
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