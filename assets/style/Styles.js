import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    modalight:{
        backgroundColor:'#E8F1F2', 
    },

    modadark:{
        backgroundColor:'#13293D', 
    },
    
    blocoDark:{
        backgroundColor:'#13293D', 
        padding:10
    },

    blocoLight:{
        backgroundColor:'#E8F1F2', 
        padding:10
    },
    light:{
        backgroundColor:'#E8F1F2',
    },

    txtLight:{
        color:'#E8F1F2', 
        fontSize:17,
        textAlign:'justify',
    },

    txtDark:{
        color:'#13293D', 
        fontSize:17,
        textAlign:'justify',
    },

    txtbtnDark:{
        color:'#13293D', 
        fontSize:17,
        textAlign:'center',
    },

    titleDark:{
        color:'#13293D', 
        fontSize:30, 
        textAlign:'center'
    },

    titleLight:{
        color:'#E8F1F2', 
        fontSize:30, 
        textAlign:'center'
    },

    subTitledark:{
        color:'#13293D',
        textAlign:'left',
        fontSize:25,
    },

    subtTitlelight:{

    },

    iconLight:{
        fontSize:30,
        color:'#E8F1F2',
        padding:5
    },

    iconDark:{
        fontSize:40,
        color:'#13293D',
        padding:5
    },

    btnLight:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#E8F1F2',
        flexDirection:'row', 
        padding:15,
        alignItems:'center',
        marginTop:10,
        
    },

    btnDark:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#13293D',
        flexDirection:'row', 
        padding:15,
        alignItems:'center',
        marginTop:10
    },

    borda:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E8F1F2',
        margin:10
    },

    txtExtra:{
        textAlign:'left',
        borderBottomWidth:1,
        borderColor:'#247BA0',
        fontSize:25,
    },

    linha:{
        borderBottomWidth:1,
        borderColor:'#247BA0',
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingTop:10
    },

    btnHome:{
        backgroundColor:'#E8F1F2', 
        borderRadius:5, 
        paddingHorizontal:5, 
        paddingVertical:5, 
        width:'40%',
        marginHorizontal:5,
        marginVertical:5
    },


    cadastro:{
        paddingBottom:10,
        color:"#F33329",
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },

    img:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        marginBottom:-40,
        marginTop:-35
        
        
    },
    icone:{
        width:"15%",
        marginTop:-30,
        marginLeft:200,
        paddingRight:5
    },

    logo:{
        fontSize:50,
        margin:10,
        color:'#FF8C00'
    },

    loginErro:{
        fontWeight:'bold',
        fontSize:22,
        color: '#F33329',
        marginTop:10,
        marginBottom:15,
    },
//////////////////////// Inicio Topo /////////////////////////////////////
    
    containertop:{
        justifyContent:'flex-start'
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

    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

    buttonMenu:{
        textAlign:'left'
    },

    buttonNews:{
        textAlign:'right'
    },
//////////////////////// Fim Topo /////////////////////////////////////

//////////////////////// Inicio Formulario  /////////////////////////////////////
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
//////////////////////// Fim Formulario  /////////////////////////////////////


//////////////////////// Inicio Botões  /////////////////////////////////////

botao:{
    backgroundColor:"#2271B3",
    width:'100%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
},

btnatv:{
    backgroundColor:"#F33329",
    width:300,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
},

txtBtn:{
    textAlign:'center',
    color:'#fff',
    fontSize:15,
    textTransform:'uppercase'
},

//////////////////////// Fim Botões  /////////////////////////////////////

///////////////////// Feed ////////////////////

containerfeed:{
    flex: 1,
    backgroundColor:'#fff'
},

title:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
},

boletimdia:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'#13293D',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    color:'white'
    
},

box:{
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    borderBottomWidth:0.6,
    borderColor:'black',
},

boxfim:{
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
},



infor:{
    fontSize:25,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    textAlign:'left'
},

num:{
    flexDirection:'row',
    fontSize:25,
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:5,
    textAlign:'right'
},

boletim:{
    flex:1,
    justifyContent:'space-evenly',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:7,
    marginBottom:15,
},



});



export {styles}

