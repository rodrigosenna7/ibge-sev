import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagens:{
    width:'80%',
    height:300,
    resizeMode:'contain',
    marginBottom:-40,
    marginTop:-35 
},
  input:{
    width: '100%',
    height:50,
    marginBottom:12,
    borderWidth:0.7,
    padding:10,
    backgroundColor:'#fff',
    borderRadius:4,
    borderColor:'#D4D3D8',
    borderBottomWidth:3,


  },
  rows:{
    flexDirection: "row",
    height: 100,
    padding: 20,
    marginBottom:80
  },
    boxrow:{
    flexDirection: "row",
    height: 70,
    padding: 10,
    alignContent:'stretch',
    justifyContent:'space-between',
    marginBottom:5,
    marginTop:10,
    borderBottomWidth:3,
    borderBottomColor:'#D4D3D8'
  },
  txticon:{
    padding:10,
  },
  buttonpstv:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    height:50,
    marginTop:15,
    backgroundColor:'#004F88',
    borderRadius: 6,
  },
  buttonHome:{
    height:160,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderWidth:5,
    borderColor:'#004F88',
    borderRadius: 6,
  },
  txtButton:{
    color:'#f8f8f8', 
    fontSize:17,
    textAlign:'center',
    fontWeight:'bold'
  },
  txtBold:{
    color:'#1f1f1f', 
    fontSize:17,
    textAlign:'left',
    fontWeight:'bold',
  },
  txtregular:{
    color:'#1f1f1f',
    textAlign:'left',
    fontSize:17,
    flexShrink:1,

  },
  linha:{
    flexDirection:'row', 
    justifyContent:'flex-start',
    paddingTop:2
  },
  borda:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#E8F1F2',
    margin:10
  },

  bloco:{
    alignSelf:'center',
    width:'95%',
    padding:10,
    marginBottom:5,
  },

  box:{
    minWidth:'95%',
    borderWidth:0.7,
    borderBottomWidth:3,
    borderColor:'#D4D3D8',
    backgroundColor:'#fff',
    borderRadius:4,
    margin:8,
    marginBottom:10,
    padding:5,
  },


});

export {styles};