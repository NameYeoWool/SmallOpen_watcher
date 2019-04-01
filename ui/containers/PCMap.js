import {Component} from "react";
import {Image, Text, View, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import React from "react";
import MapView, {Marker} from 'react-native-maps';
import Rating from "react-native-ratings/src/rating";
import {geo_list} from "./Geo";

const {height, width} = Dimensions.get('window');
//,,17z

export default class PCMap extends Component {
  state = {
    region: {
      latitude: 37.583709,
      longitude: 127.000105,
      latitudeDelta: 0.0082,
      longitudeDelta: 0.0081,
    },
    markers: [
      // {latlng: {latitude: 37.2988452, longitude: 126.972422}, title: "타이틀", description: "설명"},
      {latlng: {latitude: 37.2988452, longitude: 126.972422}, title: "초이스 PC방",},
    ],
    geo: {id: 1,},
    showInfo: false,
  };


  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <View style={{width: '100%', height: '100%',}}>

        <View style={{marginTop: 30,}}>
          <Text> </Text>
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

        <MapView
          initialRegion={{
            latitude: 37.2961846,
            longitude: 126.9745117,
            latitudeDelta: 0.0082,
            longitudeDelta: 0.0081,
          }}
          region={this.state.region}
          // onRegionChange={this.onRegionChange.bind(this)}
          style={{width: '100%', height: '100%',}}
          onPress={() => {
            if (this.state.showInfo === true)
              this.setState({showInfo: false,});
          }}
        >
          {this.props.pc_rooms &&
          this.props.pc_rooms.map((pc_room) => {
            let marker = null;

            if (pc_room.affiliate) {
              marker = require('../../static/icon_mapmarker_50x50.png');
            } else {
              marker = require('../../static/icon_mapmarker_off_50x50.png');
            }

            return (<Marker
                style={{width: 30, height: 30,}}
                coordinate={{latitude: pc_room.latitude, longitude: pc_room.longitude}}
                title={pc_room.name}
                description={pc_room.address}
                image={marker}
                onPress={() => {
                  this.setState({showInfo: true, pc_room: pc_room,});
                }}
              />
            )
          })
          }
        </MapView>


        {this.state.showInfo &&
        <View style={styles.info}>
          <TouchableWithoutFeedback
            hitSlop={{top: 20, right: 100, bottom: 20, left: 100}}
            onPress={() => this.setState({showInfo: false,})}>
            <View style={{alignItems: 'center', paddingTop: 15,}}>
              <View style={{backgroundColor: 'white', height: 5, width: 150, borderRadius: 5,}}/>
            </View>
          </TouchableWithoutFeedback>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              style={{width: 60, height: 60, marginLeft: 10, marginRight: 10,}}
              source={{uri: 'http://image.itdonga.com/files/2016/12/08/004.JPG'}}
              borderRadius={5}
            />
            <View>

              <View style={{flexDirection: 'row',}}>
                <Text style={{fontSize: 18, color: 'white', width: '100%',}}>{this.state.pc_room.name}</Text>
                <View style={{position: 'absolute', top: 0, right: 110,}}>

                  {this.state.pc_room?.latest_seat?.data &&
                  <Text style={{fontSize: 14, width: '100%', color: 'white',}}>잔여 좌석
                    : {this.state.pc_room?.latest_seat?.data.empty_seats}석</Text>
                  }
                </View>
              </View>

              <Text style={{fontSize: 13, color: 'white',}}>0.0km {this.state.pc_room.address}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', width: '100%',}}>

                {[1, 2, 3, 4, 5].map(() => {
                  return <Image
                    style={{width: 15, height: 15, margin: 1,}}
                    source={require('../../static/star_icon.png')}/>
                })}

              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row',}}>
            <View style={{flex: 1,}}/>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TestContainer', {pc_room: this.state.pc_room})}>
              <View style={styles.yellowButton}>
                <Text style={{fontSize: 17,}}>좌석 확인하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        }

      </View>
    );
  }
};

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