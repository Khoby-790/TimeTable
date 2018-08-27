import {StyleSheet} from 'react-native';


let styles = StyleSheet.create({
    container:{
    flex:1,
  },
  navTitle:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
  },
  navbar:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:24,
    height:40,
    width:'100%',
    backgroundColor:'#003366',
    // color:'white',
  },
  content:{
    flex:1,
    padding:5,
    paddingTop:10,
    backgroundColor:'skyblue',
    // alignItems:'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    Button:{
    margin: 10,
},
daysContainer:{
    flex:1,
    flexDirection:'column',
    padding:10
},
card:{
    height:150,
    width:'100%',
    backgroundColor:'#b3fff0',
    // borderRadius:12,
    marginBottom:10,
  },
  dayCard:{
    height:95,
    width:'100%',
    flexDirection:'column',
    backgroundColor:'#b3fff0',
    borderRadius:12,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
  },
  row:{
    flex:1,
    // height:30,
    // backgroundColor:'yellow'
    padding:15,
    justifyContent:'center',
    alignItems:'center',
  },
  rowBottom:{
     flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  col:{
    width:'50%',
    height:'100%',
    backgroundColor:'red',
  },
  course_code:{
    fontWeight: 'bold',
    fontSize: 24,
    color:'#ff6666',
  },
  time:{
    fontSize:17,
    padding:5,
    color:'#66d9ff',
  },


});


module.exports = styles;