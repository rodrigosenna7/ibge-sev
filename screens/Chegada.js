import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';



export default function Chegada ({navigation}){

    const [finalidade, setFinalidade] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [kmInicio, setKmInicio]= useState('');



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
