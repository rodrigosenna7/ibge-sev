import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image, Platform, Alert} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import firebase from '../../firebaseConfig';
import {styles} from '../../assets/css/Styles';
//import Constants from 'expo-constants';
//import Axios from "axios";




export default function Cadastrofull ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

  const user_id = firebase.auth().currentUser.uid

  const [nome,setNome]= useState('')
  const [user,setUser]= useState('')
  const [funcao,setFuncao]= useState('')
  const [lotacao,setLotacao]= useState('')

  
  
  const onChangeNome = (txtNome) => {
      setNome(txtNome)
  }

  const onChangeUser = (txtUser) => {
    setUser(txtUser)
}

const onChangeFuncao = (txtFuncao) => {
    setFuncao(txtFuncao)
}

  const onChangeLotacao = (txtLotacao) => {
    setLotacao(txtLotacao)
}



function cadastrofull () {
    try{
        firebase.firestore().collection('user').add({
            nome: nome,
            user: user,
            funcao: funcao,
            lotacao: lotacao,
            user_id:user_id,
        });
        console.log('foto')
    
        navigation.navigate('Restrito')
        
    }catch (error){
        alert(error)
    }
  
}

  ///////////////////////////////////
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
      .then(() => {
          Alert.alert("Sucesso");
      })
      .catch((error) => {
          Alert.alert(error);
      });
    }
  }

  uploadImage = async (uri, imageName) => {
      const response = await fetch (uri);
      let blob = await response.blob();

      //blob = URL.createObjectURL(blob);

      var ref = firebase.storage().ref().child("user/"+user_id+'/perfil');
      return ref.put(blob);
  }

  
  
  
      return(
              
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Nome"
                        onChangeText={txtNome => onChangeNome(txtNome)} 
                        value={nome}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Siape ou CPF"
                        keyboardType="numeric"
                        onChangeText={txtUser => onChangeUser(txtUser)} 
                        value={user}
                    ></TextInput> 
                </View>
                <Picker
                style={styles.input}
                selectedValue={funcao}
                onValueChange={(itemValue, itemIndex) =>
                    setFuncao(itemValue)
                }>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="APM" value="APM" />
                <Picker.Item label="Supervisor" value="Supervisor" />
                <Picker.Item label="Motorista" value="Motorista" />
            </Picker>


                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Lotação"
                        onChangeText={txtLotacao => onChangeLotacao(txtLotacao)} 
                        value={lotacao}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={pickImage}
                    >
                        <Text style={{color:'#ffffff'}}>Foto</Text>
                      
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonpstv}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => {cadastrofull()}}
                    >
                        <Text style={{color:'#ffffff'}}>Salvar</Text>
                    </TouchableOpacity>
                </View>

               
            </View>
        
    );
}

