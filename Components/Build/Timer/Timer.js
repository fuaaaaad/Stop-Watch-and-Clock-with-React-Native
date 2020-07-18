import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Timer = (props) => {
  return (
    <SafeAreaView style={styles.container}>
             <Text style = {styles.Timer}> {(props.time.hour) >= 10 ? props.time.hour: '0' + props.time.hour}
            : {(props.time.minute) >= 10 ? props.time.minute: '0' + props.time.minute}
            : {(props.time.second) >= 10 ? props.time.second: '0' + props.time.second}
             : {(props.time.Millisecond) >= 10 ? props.time.Millisecond: '0' + props.time.Millisecond} </Text>
      

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
  Timer: {
    fontSize: 50 ,
}
});

export default Timer;