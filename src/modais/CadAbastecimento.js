import React , {useState} from 'react';
import { Text,TextInput, View, Modal,TouchableOpacity,ScrollView, Button} from 'react-native';
import {styles} from '../../assets/css/Styles';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../firebaseConfig';






export default function CadAbastecimento (){

  
    if (firebase.auth().currentUser !==null){
          
    }else{
        navigation.navigate('Login')
    }

    const [veiculo, setVeiculo]= useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [odometro, setOdometro]= useState('');
    const [qntlitros, setQntlitros]= useState('');
    const [valorUnilitro, setValorUnilitro]= useState('');
    const [valorTotal, setValorTotal]= useState('');
    const [combustivel, setCombustivel]= useState('');
    const [observacao, setObservacao]= useState('');
    
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const user_id = firebase.auth().currentUser.uid


    
      const onChangeVeiculo = (txtVeiculo) =>{
        setVeiculo(txtVeiculo)
      }
      const onChangeCombustivel = (txtCombustivel) =>{
        setCombustivel(txtCombustivel)
      }
      const onChangeOdometro = (txtOdometro) =>{
        setOdometro(txtOdometro)
      }
      const onChangeQntlitros = (txtQntlitros) =>{
        setQntlitros(txtQntlitros)
      }
      const onChangeValorUnilitro = (txtValorUnilitro) =>{
        setValorUnilitro(txtValorUnilitro)
      }
      const onChangeValorTotal = (txtValorTotal) =>{
        setValorTotal(txtValorTotal)
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

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.cancelled) {
          this.uploadImage(result.uri, imageName)
          .then(() => {
              Alert.alert("Sucesso");
          })
          .catch((error) => {
              Alert.alert(error);
          });
        }
      }
      function pushFirebase () {
        try{
            firebase.firestore().collection('abastecimento').add({
             
              qntlitros: qntlitros,
              veiculo: veiculo,
              valorTotal: valorUnilitro * qntlitros,
              valorUnilitro: valorUnilitro,
              odometro: odometro,
              observacao: observacao,
              combustivel: combustivel,
              date: date,
              user_id:user_id,
            })
        }catch (error){
            alert(error)
        }
        finally{
            
          onChangeVeiculo('');
          onChangeCombustivel('');
          onChangeQntlitros('');
          onChangeOdometro('');
          onChangeValorUnilitro('');
          onChangeValorTotal('');
          onChangeObservacao('');
          
        }
    }


    return( 
        
        <ScrollView >
          <View style={styles.container}>
            <View style={styles.bloco}>
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
            <View>
                    <Text style={styles.txtregular}>Data </Text>
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
            <Text style={styles.txtregular}>Quantidade de litros</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='42' 
                    onChangeText={txtQntlitros => onChangeQntlitros(txtQntlitros)} 
                    value={qntlitros}
                    keyboardType={'numeric'}
                >
                </TextInput>
                <Text style={styles.txtregular}>Valor por litro</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='5.95' 
                    onChangeText={txtValorUnilitro => onChangeValorUnilitro(txtValorUnilitro)} 
                    value={valorUnilitro}
                    keyboardType={'numeric'}
                >
                </TextInput>
                
            <Text style={styles.txtregular}>Odômetro(KM)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='12345' 
                    onChangeText={txtOdometro => onChangeOdometro(txtOdometro)} 
                    value={odometro}
                    keyboardType={'numeric'}
                >
                </TextInput>
            <Text style={styles.txtregular}>Combustivel</Text>
            <Picker
                style={styles.input}
                selectedValue={combustivel}
                onValueChange={(itemValue, itemIndex) =>
                    setCombustivel(itemValue)
                }>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Etanol" value="Etanol" />
                <Picker.Item label="Gasolina" value="Gasolina" />
                <Picker.Item label="Diesel" value="Diesel" />
            </Picker>
            <Text style={styles.txtregular}>Observações</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Oservações' 
                    onChangeText={txtObservacao => onChangeObservacao(txtObservacao)} 
                    value={observacao}
                >
                </TextInput>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={pickImage}
                    >
                        <Text style={{color:'#ffffff'}}>Foto</Text>
                      
                    </TouchableOpacity>
                </View>
            <View style={styles.buttonpstv}>
                <TouchableOpacity onPress={() => {pushFirebase()}}>
                        <Text style={styles.txtButton}>SALVAR</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </ScrollView>

    );
}
