import {Component} from "react";
import {SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions} from "react-native";
import React from "react";
import {AirbnbRating, Rating} from "react-native-ratings";
import _ from "lodash";
import {geo_list} from "./Geo";

const {height, width} = Dimensions.get('window');

export default class MyPCRoom extends Component {
  state = {
    geo: geo_list[0],
    region: geo_list[0].region,
  };

  isIn = (address) => {
    let isInArea = false;

    this.state.geo.keywords.map((keyword) => {
      if (address.indexOf(keyword) >= 0)
        isInArea = true;
    });

    return isInArea;
  };

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 40}}>
        {/*<Text style={{textAlign: 'right', margin: 10}}>오늘의 날씨</Text>*/}

        {/*<View style={{padding: 10, backgroundColor: '#ebebeb'}}>*/}
        {/*<Text style={{fontSize: 14,}}>내 위치</Text>*/}
        {/*<View style={{flexDirection: 'row', alignItems: 'center'}}>*/}
        {/*<Text style={{fontSize: 16, textStyle: 'bold'}}>서울 종로구</Text>*/}
        {/*<Text style={{fontSize: 14, marginLeft: 15,}}>내 주위에 15개의 PC방이 있습니다.</Text>*/}
        {/*</View>*/}
        {/*</View>*/}

        <View style={{padding: 10,}}>
          {/*<View style={{flexDirection: 'row',}}>*/}
          {/*<Text style={{flex: 1,}}>내 지역</Text>*/}
          {/*<Text>+</Text>*/}
          {/*</View>*/}

          {/*<View style={{flexDirection: 'row',}}>*/}
          {/*{['혜화동', '율전동', '인사동'].map((area) => {*/}
          {/*return (*/}
          {/*<TouchableOpacity*/}
          {/*onPress={() => {*/}
          {/*console.warn('ff');*/}
          {/*}}>*/}
          {/*<Text style={{padding: 5, backgroundColor: '#55468c', color: 'white', margin: 5}}*/}
          {/*borderRadius={5}>{area} ×</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*);*/}
          {/*})}*/}
          {/*</View>*/}

        </View>

        <View style={{}}>
          <View style={{flexDirection: 'row',}}>
            {geo_list.map((menu) => {
              return (
                <TouchableOpacity
                  style={[styles.gridItem, {backgroundColor: (menu.id === this.state?.geo?.id) ? '#b99ef1' : '#ffffff'}]}
                  onPress={() => {
                    this.setState({...this.state, geo: menu, region: menu.region})
                  }}
                >
                  <Text
                    style={[styles.gridText, {color: (menu.id === this.state?.geo?.id) ? '#ffffff' : '#111111'}]}>
                    {menu.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>Watcher 가맹점</Text>
        </View>

        {this.props.pc_rooms && _.filter(this.props.pc_rooms, (pc_room) => pc_room.affiliate === true).map((pc_room) => {
          if (!this.isIn(pc_room.address)) return null;
          return (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TestContainer', {pc_room: pc_room})}>
              <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={{width: 60, height: 60, marginLeft: 10, marginRight: 10,}}
                  source={{uri: 'http://image.itdonga.com/files/2016/12/08/004.JPG'}}
                  borderRadius={5}
                />
                <View>
                  <Text style={{fontSize: 14,}}>{pc_room.name}</Text>
                  <Text style={{fontSize: 11,}}>{pc_room.address}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Rating
                      style={{paddingVertical: 10}}
                      imageSize={20}
                      defaultRating={5}
                    />
                    <View style={{flex: 1,}}/>
                    <Text style={{marginLeft: 80, textAlign: 'right',}}>잔여 좌석
                      : {pc_room?.latest_seat?.data?.empty_seats}석</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>일반 PC방</Text>
        </View>


        {this.props.pc_rooms && _.filter(this.props.pc_rooms, (pc_room) => pc_room.affiliate === false).map((pc_room) => {
          if (!this.isIn(pc_room.address)) return null;
          return (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TestContainer', {pc_room: pc_room})}>
              <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={{width: 60, height: 60, marginLeft: 10, marginRight: 10,}}
                  source={{uri: 'http://image.itdonga.com/files/2016/12/08/004.JPG'}}
                  borderRadius={5}
                />
                <View>
                  <Text style={{fontSize: 14,}}>{pc_room.name}</Text>
                  <Text style={{fontSize: 11,}}>{pc_room.address}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Rating
                      style={{paddingVertical: 10}}
                      imageSize={20}
                      defaultRating={5}
                    />
                    <View style={{flex: 1,}}/>
                    {/*<Text style={{marginLeft: 80, textAlign: 'right',}}>잔여 좌석 : {pc_room?.latest_seat?.data?.empty_seats}석</Text>*/}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    left: 0,
    top: height - 270,
    width: '100%',
    height: 270,
    backgroundColor: '#583c93',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  yellowButton: {
    backgroundColor: '#fdd519',
    marginTop: 20,
    marginRight: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },

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
  },
});