import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import Timer from './Timer/Timer';

const Build = (props) => {
    let button = null;
    if(props.status){
        button = (
            <TouchableOpacity 
            style = {styles.Pause}
            onPress = {props.stopwatch}>
           <Text
            style = {styles.text}
           >Pause</Text>
           </TouchableOpacity>

            )
        }
    else{
        button = (
            <TouchableOpacity 
             style = {styles.Play}
             onPress = {props.stopwatch}>
            <Text
             style = {styles.text}
            >Start</Text>
            </TouchableOpacity>

        )
        }

  return (
    <SafeAreaView style={styles.container}>
        <Text style = {{
         fontSize: 50,
         color: 'black'     
        }}>Stop Watch</Text>
        <Timer 
         time = {props.time}
        />
        {button}
        <TouchableOpacity 
        style = {styles.Reset}
        onPress = {props.reset}>
            <Text style = {styles.text}
            >Reset</Text>
        </TouchableOpacity>
       

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
      fontSize: 50,
       color: 'white'
  },
 
  Play: {
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 4,
    borderColor: 'orange',
    color: 'black',
  },

  Pause: {
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 4,
    borderColor: 'orange',
    color: 'black',
  },

  Reset: {
    alignItems: 'center',
    width: 200,
    marginTop: 10,
    marginBottom: 400,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    borderColor: 'orange',
    color: 'black',
    }

});

export default Build;
