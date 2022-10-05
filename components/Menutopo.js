import React ,{useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Modal, Linking } from 'react-native';
import { Entypo, Ionicons   } from '@expo/vector-icons';
import {styles} from '../assets/Style';

export default function Menutopo (props){

    const [modalVisible, setModalVisible] = useState(false);


    return(    
       <View style={styles.topo}>
            <TouchableOpacity
                onPress={() => {setModalVisible(!modalVisible);
                }}
            >
                <Ionicons name="md-menu" size={30} color="#E8F1F2" />
            </TouchableOpacity>
           <Text style={styles.title}>{props.title}</Text>
        </View>
        
    );
}