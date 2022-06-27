import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import {styles} from '../../assets/css/Styles';
import firebase from '../../firebaseConfig';

export default function Login ({ navigation }){

    const [email,setEmail]= useState('')
    const [senha,setSenha]= useState('')
    const [mostrar,setMostrar]= useState(true)
  
    function login(){
      firebase.auth().signInWithEmailAndPassword( email, senha)
    .then((userCredential) => {
          navigation.navigate('Restrito')
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
    }
  
    useEffect(()=>{
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              navigation.navigate('Restrito')
          } else {
            console.log('Usuário não autenticado!!!');
          }
        });
    },[])
  
      return(
            
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/sev.png')}
                    style={styles.imagens}
                />
                <View style={styles.bloco}>
                    <Text style={styles.txtregular}>Matricula/ CPF</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Matricula ou CPF"
                        onChangeText={email => setEmail(email)} 
                        value={email}
                        keyboardType="email-address"
                    ></TextInput> 
                </View>
                <View style={styles.bloco}>
                    <Text style={styles.txtregular}>Matricula/ CPF</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={mostrar}
                        onChangeText={senha => setSenha(senha)} 
                        value={senha}
                    ></TextInput> 
                    <TouchableOpacity 
                        style={styles.icone}
                        //trocando o valor da constante para aparecer a senha
                        onPress={()=>setMostrar(!mostrar)}
                    >
                       {mostrar?
                            <Feather name="eye-off" size={24} color="#C9CFDF" />
                            :
                            <Ionicons name="eye" color="#C9CFDF" size={24}/>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonpstv}>
                    <TouchableOpacity 
                        
                        onPress={() => {login()}}
                    >
                        <Text style={styles.txtButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={styles.cadastro}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
    );
}
