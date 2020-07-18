import { StatusBar } from 'expo-status-bar';
import React, {  useState } from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView , TouchableOpacity } from 'react-native';
import StopWatch from './StopWatch'
import CurrentTime from './CurrentTime';

const TimeManager = () => {
    const [toggler,setToggler] = useState({
        realTime: true
    })
    let main = null,mainName = null;
    const switcher = () => {
        setToggler({
            realTime: !toggler.realTime
        })
    }


    if(toggler.realTime){
        main = (
            <CurrentTime style = {{
  
            }}/>
        )
        mainName = "Stop Watch"
        }
        else{
        main = (
            <StopWatch />
        )
        mainName = "Current Time"
    }

    return (
    <SafeAreaView style = {(toggler.realTime) ? styles.containerReal: styles.containerStop }>
      <TouchableOpacity 
        style={(toggler.realTime) ? styles.Play: styles.Pause}
      onPress = {switcher}>
      <Text style = {(toggler.realTime) ? styles.fontReal: styles.fontStop}>Switch to {mainName} </Text>
      </TouchableOpacity>
      <View>
        {main}
      </View>
                    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerReal: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontReal: {
    color: 'white',
    fontSize:20,
    alignSelf:'center'
  },
  fontStop: {
    color: 'black', 
    fontSize:20,
    alignSelf:'center'
  },
  containerStop: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Play: {
    alignItems: 'center',
    height: 100,
    width: 250,
    marginTop: 400,
    marginBottom: 25,
    justifyContent: 'center',
    borderWidth : 1,
    borderColor: 'white',
    color: 'white',
    borderRadius:10
  },
  
  Pause: {
    alignItems: 'center',
    height: 100,
    width: 250,
    marginTop: 400,
    marginBottom: 25,
    justifyContent: 'center',
    borderWidth : 1,
    borderColor: 'black',
    color: 'black',
    borderRadius:10
  }
});

export default TimeManager;

