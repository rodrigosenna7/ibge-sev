import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import {styles} from '../assets/Style';
import firebase from '../firebaseConfig';


export default function Login ({ navigation }){

  const [email,setEmail]= useState('')
  const [senha,setSenha]= useState('')
  const [mostrar,setMostrar]= useState(true)

  function login(){
    firebase.auth().signInWithEmailAndPassword( email, senha)
  .then((userCredential) => {
        navigation.navigate('Home')
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
            navigation.navigate('Home')
        } else {
          console.log('não logado')
        }
      });
  },[])

  function handleForgotPassword() {

}
  
      return(
            
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <Image
                        source={require('../assets/img/logotipo.png')}
                        style={styles.logotipo}
                    />
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Seu email cadastrado"
                        onChangeText={email => setEmail(email)} 
                        value={email}
                        keyboardType="email-address"
                    ></TextInput> 
                </View>
                
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Sua senha"
                        secureTextEntry={mostrar}
                        onChangeText={senha => setSenha(senha)} 
                        value={senha}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.buttonpstv}
                        onPress={() => {login()}}
                    >
                        <Text style={{color:'#ffffff'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {handleForgotPassword}}
                    >
                        <Text style={styles.cadastro}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
    );
}
