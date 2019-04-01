import {Component} from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import SeatContainer from "./SeatContainer";
import OptionContainer from "./OptionContainer";
import ReviewContainer from "./ReviewContainer";

export default class TestContainer extends Component {
  menus = [
    {id: 1, text: '좌석 확인'},
    {id: 2, text: 'PC방 정보'},
    {id: 3, text: '리뷰'},
  ];

  state = {selectedMenu: 1,};


  componentDidMount(): void {
    const pc_room = this.props.navigation.getParam('pc_room');
    this.setState({pc_room});
  }

  render() {
    const {pc_room} = this.state;

    return (
      <View style={{backgroundColor: 'white',}}>
        <View style={{flexDirection: 'row',}}>
          {this.menus.map((menu) => {
            return (
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                  this.setState({...this.state, selectedMenu: menu.id})
                }}
              >
                <Text style={styles.gridText}>{menu.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView style={{backgroundColor: 'white',}}>
          {this.state.selectedMenu === 1 && <SeatContainer pc_room={pc_room}/>}
          {this.state.selectedMenu === 2 && <OptionContainer pc_room={pc_room}/>}
          {this.state.selectedMenu === 3 && <ReviewContainer pc_room={pc_room}/>}
          <View style={{backgroundColor: 'white', height: 400,}}/>
        </ScrollView>
        <View style={{backgroundColor: 'white', height: 400,}}/>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderColor: '#ddddddaa',
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridText: {

    padding: 10,
    fontSize: 12,
  }
});
