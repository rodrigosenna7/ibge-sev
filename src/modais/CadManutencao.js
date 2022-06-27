import React , {useState} from 'react';
import { Text,TextInput,Input, View, Modal,TouchableOpacity, Button} from 'react-native';
import {styles} from '../../assets/css/Styles';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../../firebaseConfig';

export default function Cadmanutencao (){

  
    if (firebase.auth().currentUser !==null){
            
    }else{
        navigation.navigate('Login')
    }

    const [notafiscal, setNotafiscal] = useState('');
    const [veiculo, setVeiculo]= useState('');
    const [tipo, setTipo]= useState('');
    const [odometro, setOdometro]= useState('');
    const [observacao, setObservacao]= useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const user_id = firebase.auth().currentUser.uid


      const onChangeNotafiscal = (txtNotafiscal) =>{
        setNotafiscal(txtNotafiscal)
      }
      const onChangeVeiculo = (txtVeiculo) =>{
        setVeiculo(txtVeiculo)
      }
      const onChangeTipo = (txtTipo) =>{
        setTipo(txtTipo)
      }
      const onChangeOdometro = (txtOdometro) =>{
        setOdometro(txtOdometro)
      }
      const onChangeObservacao = (txtObservacao) =>{
        setObservacao(txtObservacao)
      }

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

      function pushFirebase () {
        try{
            firebase.firestore().collection('manutencao').add({
             
              notafiscal: notafiscal,
              veiculo: veiculo,
              tipo: tipo,
              odometro: odometro,
              observacao: observacao,
              date: date,
              user_id:user_id,
            })
        }catch (error){
            alert(error)
        }
        finally{
            
          onChangeNotafiscal('');
          onChangeVeiculo('');
          onChangeTipo('');
          onChangeOdometro('');
          onChangeObservacao('');
        }
    }

    return(    
        <View style={styles.container}>
            <View style={styles.bloco}>
            <Text style={styles.txtregular}>Nota Fiscal</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='123456' 
                    onChangeText={txtNotafiscal => onChangeNotafiscal(txtNotafiscal)} 
                    value={notafiscal}
                    keyboardType={'numeric'}
                >
                </TextInput>
                

                <View>
                    <Text style={styles.txtregular}>Data da Nota Fiscal </Text>
                    <Button  onPress={showDatepicker} title={date.toLocaleString()} />
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                        />
                    )}
                </View>
            
                
            <Text style={styles.txtregular}>Veículo</Text>
            <Picker
                style={styles.input}
                selectedValue={veiculo}
                onValueChange={(itemValue, itemIndex) =>
                    setVeiculo(itemValue)
                }>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Gol AAA 1234" value="Gol AAA 1234" />
                <Picker.Item label="Ford Ka BBB 4567" value="Ford Ka BBB 4567" />
            </Picker>
            <Text style={styles.txtregular}>Odômetro(KM)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='12345' 
                    onChangeText={txtOdometro => onChangeOdometro(txtOdometro)} 
                    value={odometro}
                    keyboardType={'numeric'}
                >
                </TextInput>
            <Text style={styles.txtregular}>Tipo</Text>
            <Picker
                style={styles.input}
                selectedValue={tipo}
                onValueChange={(itemValue, itemIndex) =>
                    setTipo(itemValue)
                }>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Abastecimento" value="Abastecimento" />
                <Picker.Item label="Lavagem" value="Lavagem" />
            </Picker>
            <Text style={styles.txtregular}>Observações</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Oservações' 
                    onChangeText={txtObservacao => onChangeObservacao(txtObservacao)} 
                    value={observacao}
                >
                </TextInput>
            <View style={styles.buttonpstv}>
                <TouchableOpacity  onPress={() => {pushFirebase()}}>
                        <Text style={styles.txtButton}>SALVAR</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}
