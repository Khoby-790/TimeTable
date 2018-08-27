import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import styles from './Css/Styles';

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
        <View style={styles.rowBottom}>
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



