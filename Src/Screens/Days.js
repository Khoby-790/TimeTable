import React from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from './Css/Styles';
import {FontAwesome} from 'react-native-vector-icons';
export default class Days extends React.Component{
    constructor(props){
        super(props);

    }


    static navigationOptions = {
        title: 'Days',
        headerStyle:{
          backgroundColor :'#003366',
        },
        headerTitleStyle:{
          color: 'white',
          //fontFamily:'calibri'
          fontWeight:'bold',
          textAlign:'center',
        }
    
        };



    openDaysCourse(course_id,day){
        this.props.navigation.navigate('Day',{
            course_num:course_id,
            day:day
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView>
                    <TouchableOpacity
                        style={styles.dayCard}
                        onPress={()=>this.openDaysCourse(1,"Monday")}
                    >
                        <View style={styles.dayCard}>
                        <FontAwesome name="hourglass-o" color="#003366" size={30}/>
                            <Text>
                                Monday
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.dayCard}
                        onPress={()=>this.openDaysCourse(2,"Tuesday")}
                    >
                        <View style={styles.dayCard}>
                        <FontAwesome name="hourglass-o" color="#003366" size={30}/>
                            <Text>
                                Tuesday
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.dayCard}
                        onPress={()=>this.openDaysCourse(3,"Wednesday")}
                    >
                        <View style={styles.dayCard}>
                        <FontAwesome name="hourglass-o" color="#003366" size={30}/>
                            <Text>
                                Wednessday
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.dayCard}
                        onPress={()=>this.openDaysCourse(4,"Thursday")}
                    >
                        <View style={styles.dayCard}>
                        <FontAwesome name="hourglass-o" color="#003366" size={30}/>
                            <Text>
                                Thursday
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.dayCard}
                        onPress={()=>this.openDaysCourse(5,"Friday")}
                    >
                        <View style={styles.dayCard}>
                        <FontAwesome name="hourglass-o" color="#003366" size={30}/>
                            <Text>
                                Friday
                            </Text>
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}



