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
    flexDirection:'row',
    justifyContent:'center',
    // alignItems:'center',
    marginTop:24,
    height:70,
    width:'100%',
    backgroundColor:'#003366',
    // 
    // color:'white',
  },
  navbarLeft:{
    paddingLeft:20,
    justifyContent:'center',
    flex:1,
  },
  navbarRight:{
    paddingRight:20,
    justifyContent:'center',
    flex:1,
  },
  timeHeader:{
    fontSize:10,
    position:'relative',
    top:5,
    left:5,
  },
  dateHeader:{
    fontSize:10,
    textAlign:'right',
    paddingRight:10,
    position:'relative',
    top:5,
    left:5,
  },
  date:{
    color:'white',
    position:'relative',
    left:10,
    top:5,
  },
  content:{
    flex:1,
    padding:5,
    paddingTop:10,
    backgroundColor:'#363765',
    alignItems:'center',
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
    height:180,
    width:'100%',
    backgroundColor:'white',
    borderRadius:12,
    marginBottom:10,
  },
  dayCard:{
    height:95,
    width:350,
    // flexDirection:'column',
    backgroundColor:'white',
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
  code_row:{
    flex:1,
    paddingLeft:10,
    justifyContent:'flex-end',
  },
  title_row:{
    flex:3,
    paddingLeft:10,
    justifyContent:'center',
  },
  rowBottom:{
     flex:1.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  col:{
    width:'50%',
    height:'100%',
    backgroundColor:'#fff114',
    borderBottomStartRadius:12,
    paddingLeft:10,
    // color:'363765',
    borderRightWidth:1,
    borderRightColor:'#003366',
  },
  col_1:{
    width:'50%',
    height:'100%',
    backgroundColor:'#fff114',
    borderBottomEndRadius:12,
    // color:'#363765',
    paddingRight:10,
  },
  course_code:{
    fontWeight: 'bold',
    fontSize: 10,
    // color:'#ff6666',
    marginTop:15,
  },
  course_title:{
    fontWeight: 'bold',
    fontSize: 30,
    color:'##363765',
    // marginTop:15,
  },
  time:{
    fontSize:17,
    padding:5,
    // color:'#363765',
    position:'relative',
    top:-5,
  },
  venue:{
    fontSize:17,
    padding:5,
    // color:'#363765',
    textAlign:'right',
    position:'relative',
    top:-5,
  },
  cardInner:{
    flexDirection:'row',
    width:'100%',
  },
  dayColLeft:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    backgroundColor:'#fff114',
  },
  dayColRight:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-start',
  },
  dayText:{
    fontSize:25,
    position:'relative',
    left:10,
  }

});


module.exports = styles;