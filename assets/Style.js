import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#F7F7F7',
        padding:10,
        marginTop:15
    }, 

    logotipo:{
        resizeMode: "center",
        height: 150,
        width: 250,  
    },

    bloco:{
        padding:10,
        width:'90%',
        justifyContent:"center",
        alignItems:'center'
    },
    
    inputs:{
        width: '100%',
        height:50,
        marginBottom:5,
        borderWidth:0.7,
        padding:5,
        backgroundColor:'#fff',
        borderRadius:2,
        borderColor:'#D4D3D8',
        borderBottomWidth:3,
    },

    buttonpstv:{
        
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        height:50,
        marginTop:15,
        backgroundColor:'#004F88',
        borderRadius: 2,
      },

    txtbutton:{
        color:'#fff',

    },

    topo:{
        flexDirection:'row',
        paddingTop:40,
        paddingBottom:15,
        paddingRight:10,
        paddingLeft:10,
        width:'100%',
        backgroundColor:'#2271B3',
        alignItems:'center',
        justifyContent:'space-between',
    },

    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },

    row:{
        flexDirection:'row', 
        justifyContent: 'space-between',
        padding:5,
        alignItems:'center', 
        
    },

    titleDark:{
        color:'#13293D', 
        fontSize:20, 
        textAlign:'left'
    },

    cabeçalho:{
        backgroundColor:'#2271B3',
    },
    
    box:{
        backgroundColor:'#fff',
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        borderRadius:2,
        borderColor:'#D4D3D8',
        borderBottomWidth:3,
        borderTopWidth:1
    },

    bigbox:{
        backgroundColor:'#fff',
        marginBottom:10,
        paddingLeft:5,
    }, 

    titlevcl:{
        alignItems:'center',
        padding:10,
        fontWeight:'bold',
        paddingTop:5,
        fontSize:20,
        textAlign:'center'
    },

    negrito:{
        fontWeight:'bold',
        paddingTop:5,
        fontSize:15
    },

    texto:{
        paddingLeft:5
    },

    



});



export {styles}