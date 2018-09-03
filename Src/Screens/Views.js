import React from 'react';
import { createBottomTabNavigator} from 'react-navigation';
import {FontAwesome} from 'react-native-vector-icons';
import TimeTable from './Main';
import MoreOnDays from './index';


let Views = createBottomTabNavigator({
    Today:TimeTable,
    Days: MoreOnDays,
  },
  {
    navigationOptions:({ navigation }) => ({
      TabBarIcon:({focused, tintColor}) =>{
        const {routeName} = navigation.state;
        let name;
        if(routeName == "Today"){
          name = "clock-o";
        }else if(routeName == "Days"){
          name = "calendar";
        }

        return <FontAwesome name={name} color="#003366" size={30}/>
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#003366',
    },
  },
);


  module.exports = Views;
