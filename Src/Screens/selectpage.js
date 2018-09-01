import React from 'react';
import {View, Text, AsyncStorage, TouchableOpacity,Modal, StyleSheet, ImageBackground} from 'react-native';
let userObj = {};
import data from '../../organizedData';

const levels = [100,200,300,400];
const courses = ['Computer Science','Information Technology'];




export default class SelectPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            level:"Select Level",
            program:"Select Program",
            modalVisible:false,
        }
    }

    closeModal(){
        this.setState({modalVisible:false})
     }
     openModal(){

     }

     updateProgram(data){
        userObj.push({
            course:data
        })
     }

     updateLevel(data){
         userObj.push({
             level:data
         });
     }


     submit(){
         let userRealTimeTableData = data.Combination[userObj.program][userObj.level];
         AsyncStorage.setItem('userDetails',JSON.stringify(userRealTimeTableData));
         this.props.navigate('Page');
     }

     validateInputs(){
         if(this.state.level === "Select Level"){
             alert("Please select your level");
         }else if(this.state.program == "Select Program"){
             alert("Please select your program");
         }else{
             this.submit();
         }
     }


    render(){
        return(
            <ImageBackground
                source={require('./images/splash.png')}
                style={styles.background}
            >
            <View style={styles.container}>
                    
                    <View style={styles.div}></View>
                    <View style={styles.div}>
                        <TouchableOpacity 
                        style={styles.UserInput}
                        onPress={()=>this.setState({modalVisible:true})}
                        >
                            <Text>{this.state.level}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.UserInput}>
                            <Text>{this.state.program}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        onPress={}
                        style={styles.divBtn}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

            </View>


        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose ={()=>this.closeModal()}
        >
        
             <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.listItem}>
                        <Text>Select Level</Text>
                    </TouchableOpacity>
                    {
                        levels.map((value,index)=>{
                            <TouchableOpacity 
                            key={index}
                            onPress={this.updateLevel(value)}
                            style={styles.listItem}>
                                <Text>{value}</Text>
                             </TouchableOpacity>
                        })
                    }
             </View>
             
        </Modal>            


        <Modal
            visible={false}
            transparent={true}
            animationType="slide"
            onRequestClose={()=>console.log("Hello there")}
        >

         <View style={styles.modalContent}>
         <TouchableOpacity style={styles.listItem}>
                        <Text>Select Program</Text>
                    </TouchableOpacity>
                    {
                        courses.map((value,index)=>{
                            <TouchableOpacity 
                            key={index}
                            onPress={this.updateLevel(value)}
                            style={styles.listItem}>
                                <Text>{value}</Text>
                             </TouchableOpacity>
                        })
                    }
             </View>
            
        </Modal>    

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
    }
});
