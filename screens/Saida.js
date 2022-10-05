import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../firebaseConfig';
import { styles } from '../assets/Style';
import Menutopo from '../components/Menutopo';






export default function Saida ({navigation}){

    
    const [finalidade, setFinalidade] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [kmInicio, setKmInicio]= useState('');

    const onChangeFinalidade = (txtFinalidade) =>{
        setFinalidade(txtFinalidade)
      }
      const onChangeDataInicio = (txtDataInicio) =>{
        setDataInicio(txtDataInicio)
      }
      const onChangeHoraInicio = (txtHoraInicio) =>{
        setHoraInicio(txtHoraInicio)
      }
      const onChangeKmInicio = (txtKmInicio) =>{
        setKmInicio(txtKmInicio)
      }


   
    function pushFirebase () {
        try{
            firebase.firestore().collection('veiculo').doc('veiculoId').collection('moviment').add({
                finalidade: finalidade,
                dataInicio: dataInicio,
                horaInicio: horaInicio,
                kmInicio: kmInicio,
            })
        }catch (error){
            alert(error)
        }
        finally{
            setFinalidade('');
            setDataInicio('');
            setHoraInicio('');
            setKmInicio('');
           navigation.navigate("Listagem")
        }
    }
  
      return(
        <View>
            <Menutopo title='Iniciar deslocamento' navigation={navigation}/>
            <View>
            <Text style={styles.txtregular}>Finalidade</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='Motivo do deslocamento' 
                    onChangeText={txtFinalidade => onChangeFinalidade(txtFinalidade)} 
                    value={finalidade}
                >
                </TextInput>
                <Text style={styles.txtregular}>Data Inicio</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='00/00/0000' 
                    onChangeText={txtDataInicio => onChangeDataInicio(txtDataInicio)} 
                    value={dataInicio}
                    keyboardType={'numeric'}
                >
            </TextInput>
            <Text style={styles.txtregular}>Hora Inicio</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='00:00' 
                    onChangeText={txtHoraInicio => onChangeHoraInicio(txtHoraInicio)} 
                    value={horaInicio}
                    keyboardType={'numeric'}
                >
            </TextInput>
            <Text style={styles.txtregular}>KM Inicio</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='12345' 
                    onChangeText={txtKmInicio => onChangeKmInicio(txtKmInicio)} 
                    value={kmInicio}
                    keyboardType={'numeric'}
                >
            </TextInput>
            <View style={styles.buttonpstv}>
                <TouchableOpacity onPress={() => {pushFirebase()}}>
                        <Text style={styles.txtbutton}>INICIAR DESLOCAMENTO</Text>
                </TouchableOpacity>
            </View>
            </View>

           
            
                
          
   

        </View>
    );
}

