import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Days from './Days';
import DayCourse from './DayCourse';

let DayScreen = createStackNavigator({
    Here:{
        screen: Days
    },
    Day:{
        screen:DayCourse
    }
});


export default class MoreOnDays extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DayScreen/>
        );
    }
}