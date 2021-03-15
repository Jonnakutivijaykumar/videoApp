import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CarouselScreen from './component/Carousel';
import {dummyData} from './data/Data';
import { Container, Header, Content, Accordion } from "native-base";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <CarouselScreen data= {dummyData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  }
});
