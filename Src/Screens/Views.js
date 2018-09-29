import React from 'react';
import { createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import TimeTable from './Main';
import MoreOnDays from './index';


let Views = createBottomTabNavigator({
    Today:TimeTable,
    Days: MoreOnDays,
  },
  {
    navigationOptions:({ navigation }) => ({
      tabBarIcon:({focused, tintColor}) =>{
        const {routeName} = navigation.state;
        let name;
        if(routeName == "Today"){
          name = "md-notifications";
        }else if(routeName == "Days"){
          name = "md-podium";
        }

        return <Ionicons name={name} size={32} color="#003366"/>;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#003366',
    },
  },
);


  module.exports = Views;
