import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';
import Confirmed from './Confirmed';
import Deaths from './Deaths';
import Recovered from './Recovered';



class App extends Component{
  constructor(){
    super();
    this.state = {
      greeting: 'welcome to React Native'
    }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <View>
        <View style={styles.container2}><Text style={styles.Title}>Data COVID-19 Global & Indonesia</Text></View>
      
      <View><Text style={styles.SubTitle}>Global</Text></View>
      
      <View style={styles.container1}>
        <Confirmed />
        <Recovered />
        <Deaths />
      </View>
        
      <View style={styles.container}><Text style={styles.SubTitle}>Indonesia</Text></View>
       <List />
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1, 
  },
  container1:{
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container2:{ 
    paddingTop: 14,
    paddingLeft: 5,
    paddingBottom: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  SubTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App
