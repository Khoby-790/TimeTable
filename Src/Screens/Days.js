import React from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from './Css/Styles';
import {FontAwesome} from 'react-native-vector-icons';
let day = new Date().getDay();






export default class Days extends React.Component{
    constructor(props){
        super(props);

    }


    static navigationOptions = {
        title: 'Days',
        headerStyle:{
          backgroundColor :'#363765',
        },
        headerTitleStyle:{
          color: 'white',
          fontWeight:'bold',
          textAlign:'center',
        }

      };



    openDaysCourse(course_id,day){
        this.props.navigation.navigate('Day',{
            course_num:course_id,
            day:day
        })
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView>
                    <TouchableOpacity
                       style={styles.dayCard}
                       onPress={()=>this.openDaysCourse(1,"Monday")}
                   >
                       <View style={styles.cardInner}>
                           <View style={styles.dayColLeft}>
                           </View>
                           <View style={styles.dayColRight}>
                               <Text style={styles.dayText}>Monday</Text>
                           </View>
                       </View>
                   </TouchableOpacity>


                   <TouchableOpacity
                       style={styles.dayCard}
                       onPress={()=>this.openDaysCourse(2,"Tuesday")}
                   >
                       <View style={styles.cardInner}>
                           <View style={styles.dayColLeft}>
                           </View>
                           <View style={styles.dayColRight}>
                               <Text style={styles.dayText}>Tuesday</Text>
                           </View>
                       </View>
                   </TouchableOpacity>


                   <TouchableOpacity
                       style={styles.dayCard}
                       onPress={()=>this.openDaysCourse(3,"Wednesday")}
                   >
                       <View style={styles.cardInner}>
                           <View style={styles.dayColLeft}>
                           </View>
                           <View style={styles.dayColRight}>
                               <Text style={styles.dayText}>Wednessday</Text>
                           </View>
                       </View>
                   </TouchableOpacity>


                   <TouchableOpacity
                       style={styles.dayCard}
                       onPress={()=>this.openDaysCourse(4,"Thursday")}
                   >
                       <View style={styles.cardInner}>
                           <View style={styles.dayColLeft}>
                           </View>
                           <View style={styles.dayColRight}>
                               <Text style={styles.dayText}>Thursday</Text>
                           </View>
                       </View>
                   </TouchableOpacity>


                   <TouchableOpacity
                       style={styles.dayCard}
                       onPress={()=>this.openDaysCourse(5,"Friday")}
                   >
                       <View style={styles.cardInner}>
                           <View style={styles.dayColLeft}>
                           </View>
                           <View style={styles.dayColRight}>
                               <Text style={styles.dayText}>Friday</Text>
                           </View>
                       </View>
                   </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        );
    }
}
