import React , {useState} from 'react';
import { Text,TextInput, View, Modal,TouchableOpacity, Button} from 'react-native';
import {styles} from '../../assets/css/Styles';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';




export default function Cadmanutencao (){

    const [finalidade, setFinalidade] = useState('');
    const [veiculo, setVeiculo]= useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [kmSaida, setKmSaida]= useState('');
    const [observacao, setObservacao]= useState('');

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);



      const onChangeFinalidade = (txtFinalidade) =>{
        setFinalidade(txtFinalidade)
      }
      const onChangeVeiculo = (txtVeiculo) =>{
        setVeiculo(txtVeiculo)
      }
      const onChangeKmSaida = (txtKmSaida) =>{
        setKmSaida(txtKmSaida)
      }
     
      const onChangeObservacao = (txtObservacao) =>{
        setObservacao(txtObservacao)
      }

      const onChange = (event, selectedDate) => {
        const currentDateSaida = selectedDate;
        setShow(false);
        setDateSaida(currentDateSaida);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

    return(    
        <View style={styles.container}>
            <View style={styles.bloco}>
            <Text style={styles.txtregular}>Finalidade</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Motivo do deslocamento' 
                    onChangeText={txtFinalidade => onChangeFinalidade(txtFinalidade)} 
                    value={finalidade}
                >
                </TextInput>

                <View>
                    <Text style={styles.txtregular}>Data/Hora Saída </Text>
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
                <Picker.Item label="Gol AAA 1234" value="veiculo1" />
                <Picker.Item label="Ford Ka BBB 4567" value="veiculo2" />
            </Picker>
            <Text style={styles.txtregular}>KM Saída</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='12345' 
                    onChangeText={txtKmSaida => onChangeKmSaida(txtKmSaida)} 
                    value={kmSaida}
                    keyboardType={'numeric'}
                >
                </TextInput>
            
            <Text style={styles.txtregular}>Observações</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Oservações' 
                    onChangeText={txtObservacao => onChangeObservacao(txtObservacao)} 
                    value={observacao}
                >
                </TextInput>
            <View style={styles.buttonpstv}>
                <TouchableOpacity onPress={() => navigation.navigate('Manutencao')}>
                        <Text style={styles.txtButton}>INICIAR DESLOCAMENTO</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}
