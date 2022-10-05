import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../firebaseConfig';



export default function Chegada ({navigation}){

    const [siape, setSiape] =useState (navigation.getParam('siape'));
    const [datas, setDatas] = useState(navigation.getParam('datas'));
    const [horas, setHoras] = useState(navigation.getParam('horas'));
    const [kminicio, setKminicio] = useState(navigation.getParam('kminicio'));
    const [finalidade, setFinalidade] = useState(navigation.getParam('finalidade'));
   
    const [datac, setDatac] = useState('');
    const [horac, setHorac] = useState('');
    const [kmfinal, setKmfinal] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [observacao, setObservacao] = useState('');
        
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
    const onChangeVeiculo = (txtVeiculo) =>{
        setVeiculo(txtVeiculo)
    }
    
    const onChangeFinalidade = (txtFinalidade) =>{
        setFinalidade(txtFinalidade)
    }
    
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

    function upDateFire() {
        try {
          firebase.database().ref('/moviment/'+navigation.getParam('key')).update({
            siape: siape,
            datas: datas,
            horas: horas,
            veiculo:veiculo,
            kminicio: kminicio,
            finalidade: finalidade,
            datac:datac,
            horac:horac,
            kmfinal:kmfinal,
            observacao:observacao,
          })
    
        } catch (error) {
          alert(error);
        }
        finally {
            setSiape('');
            setDatas('');
            setHoras('');
            setKminicio('');
            setFinalidade('');
            setVeiculo('');
            setDatac('');
            setHorac('');
            setKmfinal('');
            setObservacao('');
          navigation.navigate("Listagem")
        }
      }
   
    function pushFirebase () {
        try{
            firebase.firestore().collection('moviment').add({
             
              datac: datac,
              horac: horac,
              kmfinal: kmfinal,
              observacao: observacao,
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
            setVeiculo('');
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
                        onChangeText={siape=> onChangeSiape(siape)} 
                        value={siape}
                       
                />

                <TextInput
                    style={styles.input}
                    onChangeText={datas => onChangeDatas(datas)} 
                    value={datas}
                />

                    <TextInput
                        style={styles.input}
                        onChangeText={hHoras => onChangeHoras(horas)} 
                        value={horas}
                     />

                  <TextInput
                    style={styles.input}
                    onChangeText={txtkminicio => onChangeKminicio(kminicio)} 
                    value={kminicio}
                  
                 />
                 <TextInput
                        style={styles.input}
                        onChangeText={veiculo => onChangeVeiculo(veiculo)} 
                        value={veiculo}
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={finalidade => onChangeFinalidade(finalidade)} 
                        value={finalidade}
                    />
                

                <TextInput
                    style={styles.input}
                    onChangeText={datac => onChangeDatac(txtdatac)} 
                    value={datac}
                />

                    <TextInput
                        style={styles.input}
                        onChangeText={horac => onChangeHorac(horac)} 
                        value={horac}
                     />

                  <TextInput
                    style={styles.input}
                    onChangeText={kmfinal => onChangeKmfinal(kmfinal)} 
                    value={kmfinal}
                  
                 />

                    <TextInput
                        style={styles.input}
                        onChangeText={observacao => onChangeObservacao(observacao)} 
                        value={observacao}
                    />

                    
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => {upDateFire()}}
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