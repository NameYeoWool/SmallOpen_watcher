import {Component} from "react";
import {SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {AirbnbRating, Rating} from "react-native-ratings";

export default class MyPCRoom extends Component {
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

          <View style={{flexDirection: 'row',}}>
            {['혜화동', '율전동', '인사동'].map((area) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.warn('ff');
                  }}>
                  <Text style={{padding: 5, backgroundColor: '#55468c', color: 'white', margin: 5}}
                        borderRadius={5}>{area} ×</Text>
                </TouchableOpacity>
              );
            })}
          </View>

        </View>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>내 PC방</Text>
        </View>

        {[1,].map(() => {
          return (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TestContainer')}>
              <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={{width: 60, height: 60, marginLeft: 10, marginRight: 10,}}
                  source={{uri: 'http://image.itdonga.com/files/2016/12/08/004.JPG'}}
                  borderRadius={5}
                />
                <View>
                  <Text style={{fontSize: 14,}}>초이스 PC방</Text>
                  <Text style={{fontSize: 11,}}>1.43km 수원시 장안구 서부로 2136</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Rating
                      style={{paddingVertical: 10}}
                      imageSize={20}
                      defaultRating={5}
                    />
                    <View style={{flex: 1,}}/>
                    <Text style={{marginLeft: 80, textAlign: 'right',}}>잔여 좌석 : 12석</Text>
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