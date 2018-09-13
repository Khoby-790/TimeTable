import React from 'react';
import {View, Text, AsyncStorage, TouchableOpacity,Picker, StyleSheet, ImageBackground} from 'react-native';
let userObj = {};
import Views from './Views';
let info = require('../../organizedData');
let data = info.Combination;





export default class SelectPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            level:"Select Level",
            program:"Select Program",
            loader:false,
         }
    }


     updateProgram(data){
        this.setState({
          program:data,
        })
     }

     updateLevel(data){
         this.setState({
           level:data,
         })
     }


     submit = () =>{
       let prog = this.state.program;
       let level = this.state.level;

       // console.log(prog);
       // console.log(level);
        //query timetable data and stringfy it before passing to the next page.
         let userRealTimeTableData = data[prog].level[level];
         // console.log(userRealTimeTableData);
         let jsondata = JSON.stringify(userRealTimeTableData);
         AsyncStorage.setItem('userDetails', jsondata);
         this.props.navigation.navigate('pagecheck'); // navigate to the nexrt page from navigator
     }

//function that checks to see if the input collected is not empty before further processes can take place
     validateInputs() {
         if(this.state.level === "Select Level"){
             alert("Please select your level");
         }else if(this.state.program === "Select Program"){
             alert("Please select your program");
         }else{
             this.submit();
         }
     };


    render(){


        return(
            <ImageBackground
                source={require('./images/background.png')}
                style={styles.background}
            >
            <View style={styles.container}>

                    <View style={styles.div}></View>
                    <View style={styles.div}>
                        <Picker
                        selectedValue={this.state.program}
                        onValueChange={(data)=>this.setState({program:data})}
                        style={styles.UserInput}
                        >

                            <Picker.Item label="Select Program" value="Samuel"/>
                            <Picker.Item label="Computer Science" value="Computer Science"/>
                            <Picker.Item label="Information Technology" value="Information Technology"/>
                        </Picker>

                        <Picker
                        selectedValue={this.state.level}
                        onValueChange={(data)=>this.setState({level:data})}
                        style={styles.UserInput}
                        >

                            <Picker.Item label="Select Level" value="Samuel"/>
                            <Picker.Item label="100" value="100"/>
                            <Picker.Item label="200" value="200"/>
                            <Picker.Item label="300" value="300"/>
                            <Picker.Item label="400" value="400"/>
                        </Picker>


                        <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.validateInputs()}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>

                    </View>

            </View>


            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    background:{
        width:'100%',
        height:'100%',
    },
    UserInput:{
        width:'80%',
        height:50,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:10,
    },
    div:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    modalContent:{
        margin:0,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:20,
        left:0,
        right:0,
        shadowOpacity:1,

    },
    listItem:{
        padding:10,
        backgroundColor:'#ffffff',
        width:'100%',
        alignItems:'center',
    },
    buttonText:{
      color:'white',
      fontWeight:'bold',
    },
    button:{
      backgroundColor:'green',
      margin:10,
      padding:15,
      alignItems:'center',
      width:'80%',
    }
});
