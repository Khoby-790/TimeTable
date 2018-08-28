import React from 'react';
import {View, Text , TouchableOpacity} from 'react-native';
import styles from './Css/Styles';
import {FontAwesome} from 'react-native-vector-icons';
export default class Course extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.card}>
        <View style={styles.code_row}>
            <Text style={styles.course_code}>{this.props.course_code}</Text>
        </View>
        <View style={styles.title_row}>
          <Text style={styles.course_title}>{this.props.course_title}</Text>
        </View>
        <View style={styles.rowBottom}>
            <View style={styles.col}>
                <Text style={styles.timeHeader}>TIME</Text>
                <Text style={styles.time}>{this.props.course_time}</Text>
            </View>
            <View style={styles.col_1}>
                <Text style={styles.dateHeader}>VENUE</Text>
                <Text style={styles.venue}>{this.props.course_venue}</Text>
            </View>
        </View>
      </View>
    );

  }

}


