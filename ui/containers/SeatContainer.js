import {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";
import axios from "axios";

export default class SeatContainer extends Component {
  state = {
    latest: {},
  };

  componentDidMount(): void {
  }

  render() {
    if (!this.props.pc_room) return null;

    if (this.props.pc_room?.latest_seat)
      return (
        <View>
          <Text style={styles.title}>좌석 확인</Text>

          <Image
            style={{width: '40%', height: 30, marginTop: 10, marginBottom: 20,}}
            source={require('../../static/legend.png')}/>
          <Image
            style={{width: '100%', height: 200,}}
            source={{uri: 'http://13.125.74.250:8000' + this.props.pc_room?.latest_seat?.seat_image}}/>
          {/*<Text style={{marginLeft: 40, marginTop: 20, fontSize: 14,}}>좌석 배치도를 불러올 수 없습니다.</Text>*/}
          <Text style={{marginLeft: 40, marginTop: 20, fontSize: 16,}}>남은 좌석 수
            : {this.props.pc_room?.latest_seat?.data.empty_seats}석</Text>
        </View>
      );

    return (<View>
      <Text style={styles.title}>이 PC방은 Watcher 가맹점이 아니므로 좌석 정보를 제공하지 않습니다.</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});