import {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

export default class SeatContainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>좌석 확인</Text>

        <Image
          style={{width: '100%', height: 30, marginTop: 10, marginBottom: 20,}}
          source={require('../../static/seat_legend.png')}/>
        <Image
          style={{width: '100%', height: 200,}}
          source={require('../../static/seat_sample.png')}/>
        <Text style={{marginLeft: 40, marginTop: 20, fontSize: 16,}}>남은 좌석 수 : 12석</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});