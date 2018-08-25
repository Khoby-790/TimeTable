import React from 'react';
import {View, Text , StyleSheet} from 'react-native';


export default class Course extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.card}>
        <View style={styles.row}>
            <Text style={styles.course_code}>{this.props.course_code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.course_code}>{this.props.course_title}</Text>
        </View>
        <View style={styles.row, styles.rowBottom}>
            <View style={styles.col}>
                <Text style={styles.time}>{this.props.course_time}</Text>
            </View>
            <View style={styles.col}>
                <Text style={styles.time}>{this.props.course_venue}</Text>
            </View>
        </View>
      </View>
    );

  }

}



const styles  = StyleSheet.create({
  card:{
    height:150,
    width:'100%',
    backgroundColor:'#b3fff0',
    borderRadius:12,
    marginBottom:10,
  },
  row:{
    flex:1,
    // height:30,
    // backgroundColor:'yellow'
    justifyContent:'center',
    alignItems:'center',
  },
  rowBottom:{
    // display:'flex',
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  col:{
    width:'50%',
    // height:'100%',
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
