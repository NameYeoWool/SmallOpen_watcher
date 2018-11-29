import {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import React from "react";

export default class OptionContainer extends Component {
  render() {
    const options = [
      {title: 'CPU', text: 'Intel i7-7700K'},
      {title: '그래픽카드', text: '지포스 RTX 2080 Ti D6 11GB'},
      {title: 'RAM', text: '32GB'},
      {title: '모니터', text: ''},
      {title: '헤드셋', text: ''},
      {title: '키보드', text: ''},
      {title: '마우스', text: ''},
    ];

    return (
      <View>
        <Text style={styles.title}>정보</Text>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>사양</Text>
        </View>

        <View>
          {
            options.map((option) => {
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