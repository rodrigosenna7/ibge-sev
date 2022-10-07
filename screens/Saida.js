import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../firebaseConfig';
import { styles } from '../assets/Style';
import Menutopo from '../components/Menutopo';


export default function Saida ({navigation}){


    const [finalidade, setFinalidade] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [kmInicio, setKmInicio]= useState('');
    const [dataFim, setDataFim] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [kmFim, setKmFim]= useState('');
    const [obs, setObs]= useState('');

    const user_id = firebase.auth().currentUser.uid

    const onChangeFinalidade = (txtFinalidade) =>{
        setFinalidade(txtFinalidade)
      }
    const onChangeVeiculo = (txtVeiculo) =>{
        setVeiculo(txtVeiculo)
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
            firebase.firestore().collection('moviment').add({
                finalidade: finalidade,
                veiculo: veiculo,
                dataInicio: dataInicio,
                horaInicio: horaInicio,
                kmInicio: kmInicio,
                user_id:user_id
            })
        }catch (error){
            alert(error)
        }
        finally{
            setFinalidade('');
            setVeiculo('');
            setDataInicio('');
            setHoraInicio('');
            setKmInicio('');
           navigation.navigate("Moviment")
        }
    }
  
      return(
        <View>
            <Menutopo title='Iniciar deslocamento' navigation={navigation}/>
            <View style={styles.container}>
            <Text style={styles.txtregular}>Finalidade</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='Motivo do deslocamento' 
                    onChangeText={txtFinalidade => onChangeFinalidade(txtFinalidade)} 
                    value={finalidade}
                >
                </TextInput>
                <Text style={styles.txtregular}> Placa Veiculo</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder='AAA 1A23' 
                    onChangeText={txtVeiculo => onChangeVeiculo(txtVeiculo)} 
                    value={veiculo}
                    autoCapitalize='characters'
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

