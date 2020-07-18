import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class CurrentTime extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date
        }
    }

    current = () =>{
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        this.currentTime = setInterval(()=>this.current(),1000)
    }
    componentWillUnmount () {
        clearInterval(this.currentTime);
    }



    render () {
      return (
          <SafeAreaView styles = {{
              backgroundColor: 'black'
          }}>
        <View style={styles.container}>
            <Text
            style = {styles.text}
            >Current Time</Text>
            <View styles = {{
                fontSize: 50,
                backgroundColor: 'white',
                color: 'white'
        }}>
            <Text style = {{
                color: 'white',
                fontSize: 50
                }}>{this.state.time.toLocaleTimeString()}</Text>        
            </View>
            </View>
        </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 500
  },
  text:{
    fontSize: 50,
    color: 'white',
    marginBottom: 20
  }
});

export default CurrentTime;