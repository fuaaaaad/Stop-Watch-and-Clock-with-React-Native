import React, {  useState } from 'react';
import { StyleSheet,
     Text,
     View, 
     Button,
     SafeAreaView } from 'react-native';
import Build from './Build/Build';


const StopWatch = () => {
    const [time,setTime] = useState({
        Millisecond: 0,
        second: 0,
        minute: 0,
        hour: 0,
    })
    const [toggler,setToggler] = useState({
        pause: false
    })

    const[interval,set] = useState();

    var updatedMilli= time.Millisecond;    
    var updatedMin= time.minute;
    var updatedSec= time.second;
    var updatedHour= time.hour;
    
    const toggleHandler = () => {
        setToggler({
            pause: !toggler.pause
        })
    } 
const timeConverter = () => {
    if(updatedMin === 60){
        updatedMin = 0;
        updatedHour = updatedHour + 1;
    }
    if(updatedSec === 60){
        updatedSec = 0;
        updatedMin = updatedMin + 1;
    }
    if(updatedMilli === 60){
          updatedMilli = 0;
          updatedSec = updatedSec + 1;
        }
        updatedMilli = updatedMilli + 1;
        return setTime({            
            Millisecond: updatedMilli,
            second: updatedSec,
            minute: updatedMin,
            hour: updatedHour,
        })
    }

    const timer = () => {
        timeConverter();
            set( setInterval(timeConverter, 10))
        }

    const stopTimer = () => {
        clearInterval(interval)
            }

    const stopWatch = () => {
        toggleHandler();
        if(!toggler.pause){
            timer();
        }
        else{
            stopTimer();
        }
    }

    const reset = () => {
        stopTimer();
        setToggler({
            pause: false
        })
        setTime({
            Millisecond:0,
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    return (
    <SafeAreaView style={Styles.container}>
          
          
          <Build 
             stopwatch = {stopWatch}
             time = {time}
             reset = {reset} 
             status = {toggler.pause}
        />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StopWatch;