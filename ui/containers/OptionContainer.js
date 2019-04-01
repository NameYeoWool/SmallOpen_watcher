import {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import React from "react";
import axios from "axios";

export default class OptionContainer extends Component {
  state = {
    specs: [],
  };

  componentDidMount(): void {
  }

  render() {

    return (
      <View>
        <Text style={styles.title}>정보</Text>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>사양</Text>
        </View>

          <View>
          {
            this.props?.pc_room?.pc_spec?.map((option) => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <Text style={styles.badge}>{option.title}</Text>
                  <Text style={{fontSize: 13,}}>{option.text}</Text>
                </View>
              );
            })
          }
        </View>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>공지사항</Text>
        </View>

        <Text style={{padding: 10,}}>{this.props.pc_room && this.props.pc_room.notice}</Text>

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

  badge: {
    padding: 5,
    backgroundColor: '#55468c',
    color: 'white',
    marginTop: 5,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 7,
    fontSize: 13,
    width: 70,
    textAlign: 'center',
  }
});